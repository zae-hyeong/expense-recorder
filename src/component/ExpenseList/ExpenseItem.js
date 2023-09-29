import React from 'react'
import Card from '../UI/Card'
import { ExpenseItemDate } from './ExpenseItemDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
    <Card className='item-wrapper'>
      <li>
        <ExpenseItemDate date={props.expenseItemData.date}/>
        <h2 className='expense-title'>{props.expenseItemData.title}</h2>
        <Card className='expense-amount'>${props.expenseItemData.amount}</Card>
      </li>
    </Card>
  )
}

export default ExpenseItem