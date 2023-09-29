import React from 'react'
import './ExpenseList.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

  const expenseItems = props.expenseList;

  return (
    <Card className='list-wrapper'>
      <ul>
        {expenseItems.map(expenseItem => <ExpenseItem expenseItemData={expenseItem}/>)}
      </ul>
    </Card>
  )
}

export default ExpenseList