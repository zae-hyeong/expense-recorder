import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {

  const chartBarHeignt = (props.monthlyExpense.totalExpense/props.maxExpense) * 100 + '%';

  return (
    <div className='chart-bar-wrapper'>
      <div className='chart-bar'>
        <div id={props.monthlyExpense.monthName[0] + 'month-val'} className='chart-bar__inner'
          style={{ height:chartBarHeignt }}
        ></div>
      </div>
      <label className='chart-bar-label' htmlFor={props.monthlyExpense.monthName[0] + 'month-val'}>{props.monthlyExpense.monthName}</label>
    </div>
  )
}

export default ChartBar