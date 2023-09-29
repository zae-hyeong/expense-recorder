import React from 'react'
import './ExpenseList.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

  // const ExpenseItem = props.items;

  return (
    <Card className='list-wrapper'>
      <ul>
        <ExpenseItem/>
      </ul>
    </Card>
  )
}

export default ExpenseList