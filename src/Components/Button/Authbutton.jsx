import React from 'react'
import "./Authbutton.css"
const Authbutton = (props) => {
  return (
    <button className='btn  signin'>{props.buttonname}</button>
  )
}

export default Authbutton