import React from 'react'
import Card from '../UI/Card'
import './ExpenseItemDate.css'

export const ExpenseItemDate = () => {
  return (
    <Card className='expense-date'>
      <div className='expense-date__month'>August</div>
      <div className='expense-date__year'>2020</div>
      <div className='expense-date__day'>14</div>
  </Card>
  )
}
