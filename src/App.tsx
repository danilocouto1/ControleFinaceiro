import { useState, useEffect } from 'react';
import * as styled from './App.styles'
import { Item } from './types/Item';
import { items } from './data/item';
import { categories } from './data/categories';
import { getCurrentMouth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMouth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }
  
  return(
    <styled.Container>
      
      <styled.Header>
        
        <styled.HeaderText>Sistema Finaceiro</styled.HeaderText>

      </styled.Header>

      <styled.Body>

          <InfoArea
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                    income={income}
                    expense={expense}
          />

          <InputArea onAdd={handleAddItem} />

          <TableArea list={filteredList}/>
      
      </styled.Body>

    </styled.Container>

  );
}

export default App;