import { useState } from 'react';
import * as styled from './style';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
      <styled.Container>
        <styled.InputLabel>
          <styled.InputTitle>Data</styled.InputTitle>
          <styled.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </styled.InputLabel>
        <styled.InputLabel>
          <styled.InputTitle>Categoria</styled.InputTitle>
          <styled.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </styled.Select>
        </styled.InputLabel>
        <styled.InputLabel>
          <styled.InputTitle>Título</styled.InputTitle>
          <styled.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </styled.InputLabel>
        <styled.InputLabel>
          <styled.InputTitle>Valor</styled.InputTitle>
          <styled.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </styled.InputLabel>
        <styled.InputLabel>
          <styled.InputTitle>&nbsp;</styled.InputTitle>
          <styled.Button onClick={handleAddEvent}>Adicionar</styled.Button>
        </styled.InputLabel>
      </styled.Container>
  );
}