import React from 'react'
import './YearFilter.css'

const YearFilter = () => {
  return (
    <div className='year-filter-wrapper'>
      <label for='year-filter'>Filter by year</label>
      <select name='year-filter' id='year-filter'>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
      </select>
    </div>
  )
}

export default YearFilter