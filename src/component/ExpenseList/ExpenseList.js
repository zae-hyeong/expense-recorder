import React, { useState } from 'react'
import './ExpenseList.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import YearFilter from './YearFilter'

const ExpenseList = (props) => {

  const [filterYear, setFilterYear] = useState(2020);

  const onGetFilterYear = (filterYear) => {
    setFilterYear(filterYear)
  }

  const expenseItems = props.expenseList.filter(expenseItem => expenseItem.date.getFullYear() === filterYear);

  return (
    <Card className='list-wrapper'>
      <ul>
        <YearFilter onGetFilterYear={onGetFilterYear} />
        { !expenseItems.length ? (<p className='no-expense-msg'>Nothing expensed</p>) : (
          expenseItems.map(expenseItem => <ExpenseItem key={expenseItem.id} expenseItemData={expenseItem} />))
        }
      </ul>
    </Card>
  )
}

export default ExpenseList