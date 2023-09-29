import React from 'react'
import './Wrapper.css'

const Wrapper = (props) => {
  return (
    <div id="wrapper">{props.children}</div>
  )
}

export default Wrapper