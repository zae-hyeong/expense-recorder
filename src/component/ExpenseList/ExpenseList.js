import React, { useState } from 'react'
import './ExpenseList.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import YearFilter from './YearFilter'
import Chart from '../Chart/Chart'

const ExpenseList = (props) => {

  const [filterYear, setFilterYear] = useState(2020);

  const onGetFilterYear = (filterYear) => {
    setFilterYear(filterYear)
  }

  const expenseItems = props.expenseList.filter(expenseItem => expenseItem.date.getFullYear() === filterYear);
  console.log(expenseItems);

  return (
    <Card className='list-wrapper'>
      <ul>
        <YearFilter onGetFilterYear={onGetFilterYear} />
        <Chart filteredExpenseItems={expenseItems}/>
        { !expenseItems.length ? (<p className='no-expense-msg'>Nothing expensed</p>) : (
          <div>
            {expenseItems.map(expenseItem => <ExpenseItem key={expenseItem.id} expenseItemData={expenseItem} />)}
          </div>)
        }
      </ul>
    </Card>
  )
}

export default ExpenseList