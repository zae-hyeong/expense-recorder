import React, { useState } from 'react'
import './NewExpenseForm.css'
import Card from '../UI/Card'

const NewExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [idNum, setIdNum] = useState(props.listLength + 1);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault()

    if (!enteredTitle || !enteredAmount || !enteredDate) {
      props.onSetAlert('Input Form');
      return;
    }

    const newExpense = {
      id: 'e' + idNum,
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate)
    }

    props.onAddExpenseItem(newExpense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setIdNum(num => num+1);
  }
  
  return (
    <Card className="new-expense-wrapper">
      <form onSubmit={submitHandler}>
        <div id='input-wrapper'>
        <div>
          <label htmlFor='dateInput'>Date</label>
          <input name='date' type='date' id='dateInput'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='titleInput'>Title</label>
          <input name='title' type='text' id='titleInput'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor='amountInput'>Amount</label>
          <input name='amount' type='number' id='amountInput' min={0}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <label htmlFor='amountInput'>원</label>
        </div>
      </div>
        <button type='submit' className='submit-new-expense'>Record</button>
      </form>
    </Card>
  )
}

export default NewExpenseForm