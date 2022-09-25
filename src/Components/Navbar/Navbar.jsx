import React from 'react'
import Authbutton from '../Button/Authbutton'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <img src='../favicon.ico' className='image-thumbnail' style={{width:"5%",margin:"0px 2%"}}></img>
        <a className="navbar-brand" href="#">Train Info</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link to="/" className='link'><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
            <Link to="/trains" className='link'><a className="nav-link " href="#">Trains</a></Link>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </div>
        </div>
        <Authbutton buttonname ="Sign in"/>
        <Authbutton buttonname ="Register"/>
    </div>
    </nav>
  )
}

export default Navbar