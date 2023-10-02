import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar';
import Card from '../UI/Card';

const Chart = (props) => {
  
  class ChartBarData {
    constructor(monthName) {
      this.monthName = monthName;
      this.totalExpense = 0;
    }
  }

  const monthlyExpenses = []
  for (let i = 1; i < 13; i++) {
    monthlyExpenses.push(new ChartBarData(i + '월'));
  }
  
  let maxExpense = 0;

  props.filteredExpenseItems.map(datas => {
    maxExpense += datas.amount;
    monthlyExpenses[datas.date.getMonth()].totalExpense += datas.amount;
    return 0;
  });

  return (
    <Card className='chart'>
      {monthlyExpenses.map(monthlyExpense => 
        <ChartBar key={monthlyExpense.monthName} monthlyExpense={monthlyExpense} maxExpense={maxExpense}/>
      )}
    </Card>
  )
}

export default Chart