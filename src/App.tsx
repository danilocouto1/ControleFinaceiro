import { useState, useEffect } from 'react';
import * as styled from './App.styles'
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/item';
import { categories } from './data/categories';
import { getCurrentMouth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from './components/TableArea'

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMounth, setCurrentMounth] = useState(getCurrentMouth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMounth))
  }, [list, currentMounth]);
  
  return(
    <styled.Container>
      <styled.Header>
        <styled.HeaderText>Sistema Finaceiro</styled.HeaderText>
      </styled.Header>
      <styled.Body>
          <TableArea list={filteredList}/>
      </styled.Body>
    </styled.Container>

  );
}

export default App;