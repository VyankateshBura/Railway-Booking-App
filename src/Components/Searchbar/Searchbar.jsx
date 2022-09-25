import React from 'react'
import "./Searchbar.css"
const Searchbar = (props) => {
  return (
    <div className='my-3 d-flex justify-content-evenly'>
       <div className="form-floating "><input type="search" onChange={(e)=>{props.updateSearch(e.target.value)}} className="form-control input-lg box" id="floatingInput" placeholder="rajdhani" style={{width: "250px", height: "50px"}}/><label htmlFor="floatingInput">Search by name</label></div>
       <div className="form-floating "><input type="search" onChange={(e)=>{props.updateSearch(e.target.value)}} className="form-control input-lg box" id="floatingInput" placeholder="rajdhani" style={{width: "250px", height: "50px"}}/><label htmlFor="floatingInput">Search by number</label></div>
       <div className="form-floating "><input type="search" className="form-control input-lg box" id="floatingInput" placeholder="rajdhani" style={{width: "250px", height: "50px"}}/><label htmlFor="floatingInput">From</label></div>
       <div className="form-floating "><input type="search" className="form-control input-lg box" id="floatingInput" placeholder="rajdhani" style={{width: "250px", height: "50px"}}/><label htmlFor="floatingInput">To</label></div>
    </div>
    
  )
}

export default Searchbar