import React from 'react'
import './NewExpenseForm.css'
import Card from '../UI/Card'
import NewExpenseInputs from './NewExpenseInputs'

const NewExpenseForm = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  return (
    <Card className="new-expense-wrapper">
      <form onSubmit={submitHandler}>
        <NewExpenseInputs/>
        <button className='submit-new-expense'>Record</button>
      </form>
    </Card>
  )
}

export default NewExpenseForm