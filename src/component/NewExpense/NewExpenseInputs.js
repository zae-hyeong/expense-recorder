import React from 'react'
import './NewExpenseInputs.css'

const NewExpenseInputs = () => {
  return (
    <div id='input-wrapper'>
      <div>
        <label for='dateInput'>Date</label>
        <input type='date' id='dateInput'/>
      </div>
      <div>
        <label for='titleInput'>Title</label>
        <input type='text' id='titleInput'/>
      </div>
      <div>
        <label for='amountInput'>Amount</label>
        <input type='number' id='amountInput' min={0}/>
        <label for='amountInput'>원</label>
      </div>
    </div>
  )
}

export default NewExpenseInputs