import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.css"
import Backtotop from '../Backtotop/Backtotop'
const Footer = () => {
  return (
    <div >
      {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" className='fixed-bottom'>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center d-flex justify-content-evenly">
          <div className="copyright">
            &copy; Copyright <strong>Train Info</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Vyankatesh Bura</a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-3 pt-lg-0">
            <Link className='scrollto' to ="/">Home</Link>
            <Link className='scrollto' to ="/about">About</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
    <Backtotop/>
  </footer>
  
  {/* <!-- End Footer --> */}

  

    </div>
  )
}

export default Footer