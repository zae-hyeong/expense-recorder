import React from 'react'
import Card from '../UI/Card'
import { ExpenseItemDate } from './ExpenseItemDate'

const ExpenseItem = () => {
  return (
    <Card className='item-wrapper'>
      <li>
        <ExpenseItemDate/>
        <h2 className='expense-title'>title</h2>
        <Card className='expense-amount'>
          $109238091824
        </Card>
      </li>
    </Card>
  )
}

export default ExpenseItem