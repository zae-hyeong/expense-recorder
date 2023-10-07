import React, { useState } from 'react'
import './ExpenseList.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import YearFilter from './YearFilter'
import Chart from '../Chart/Chart'

const ExpenseList = (props) => {

  const [filterYear, setFilterYear] = useState(2020);

  const getFilterYearHandler = (filterYear) => {
    setFilterYear(filterYear)
  }

  const clickItemHandler = (id) => {
    props.onRemoveExpenseItem(id);
  }

  const expenseItems = props.expenseList.filter(expenseItem => expenseItem.date.getFullYear() === filterYear);

  return (
    <Card className='list-wrapper'>
      <ul>
        <YearFilter onGetFilterYear={getFilterYearHandler} />
        <Chart filteredExpenseItems={expenseItems}/>
        { !expenseItems.length ? (<p className='no-expense-msg'>Nothing expensed</p>) : (
          <div>
            {expenseItems.map(expenseItem => <ExpenseItem key={expenseItem.id} expenseItemData={expenseItem} onClickItem={clickItemHandler}/>)}
          </div>)
        }
      </ul>
    </Card>
  )
}

export default ExpenseList