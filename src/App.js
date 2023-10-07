import { useState } from 'react';
import './App.css';
import ExpenseList from './component/ExpenseList/ExpenseList';
import NewExpenseForm from './component/NewExpense/NewExpenseForm';
import Wrapper from './component/UI/Wrapper';
import Alert from './component/UI/Alert';

const dummyExpenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 5000, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 890000, date: new Date(2020, 9, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 1500000, date: new Date(2020, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 45000, date: new Date(2020, 5, 12) },
  { id: 'e5', title: 'Keybord', amount: 120000, date: new Date(2022, 9, 11) },
  { id: 'e6', title: 'Guitar', amount: 80000, date: new Date(2022, 3, 19) },
  { id: 'e7', title: 'Piano', amount: 200000, date: new Date(2022, 6, 19) },
  { id: 'e8', title: 'Present', amount: 100000, date: new Date(2022, 11, 31) },
  { id: 'e9', title: 'Snack', amount: 8000, date: new Date(2023, 3, 9) },
  { id: 'e10', title: 'Snack2', amount: 9000, date: new Date(2023, 11, 12) },
  { id: 'e11', title: 'Snack3', amount: 12000, date: new Date(2023, 11, 12) },
  { id: 'e12', title: 'Snack4', amount: 6000, date: new Date(2023, 0, 12) },
  { id: 'e13', title: 'Snack5', amount: 2000, date: new Date(2023, 3, 12) },
  { id: 'e14', title: 'Snack6', amount: 4000, date: new Date(2023, 4, 12) },
  { id: 'e15', title: 'Snack7', amount: 8800, date: new Date(2023, 5, 12) },
  { id: 'e16', title: 'Snack8', amount: 9000, date: new Date(2023, 5, 12) },
];

function App() {

  const [expenseList, setExpenseList] = useState(dummyExpenses);
  const [alertMsg, setAlertMsg] = useState('');

  const addExpenseItem = (newExpense) => {
    setExpenseList((expenseList) => {
      return [newExpense, ...expenseList];
    })
  }

  const removeExpenseItemHandler = (id) => {
    setExpenseList((expenseList) => {
      return expenseList.filter(expenseItem => expenseItem.id !== id);
    })
  }

  const onSetAlert = (msg) => {
    setAlertMsg(msg);
  }

  return (
    <div className="App">
      <Wrapper>
        <NewExpenseForm onAddExpenseItem={addExpenseItem} listLength={dummyExpenses.length} onSetAlert={onSetAlert}/>
        <ExpenseList expenseList={expenseList} onRemoveExpenseItem={removeExpenseItemHandler}/>
      </Wrapper>
      {alertMsg? (<Alert onSetAlert={onSetAlert} contents={alertMsg}/>) : (<div></div>) }
    </div>
  );
}

export default App;