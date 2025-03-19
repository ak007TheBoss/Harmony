import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from '../imgs/logo.jpg'
const Navbarcomponent = () => {
  return (
    <>
    <div className=' container-fluid position-sticky top-0 z-1'>
    <div className="m-3 navbar">
      <div className="col-md-4">
        <div className="d-flex  px-3">
          <h1><img className="logo" src={logo}alt="img" /></h1>
        </div>
      </div>
      <div className="col-md-4">
        <div>
          <ul className="d-flex">
            <li className="list-unstyled p-3"><Link to="/" className="text-white text-decoration-none "><button
                  className="btn btn-danger">Home</button></Link></li>
            <li className="list-unstyled p-3"><Link to="/about" className="text-white text-decoration-none"><button
                  className="btn btn-danger">About</button></Link></li>
            <li className="list-unstyled p-3"><Link to="/facilites" className="text-white text-decoration-none"><button
                  className="btn btn-danger">Facilities</button></Link></li>
            <li className="list-unstyled p-3"><Link to="/rules" className="text-white text-decoration-none"><button
                  className="btn btn-danger">Service</button></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="offset-lg-6">
          <Link to="/book"><button className="btn btn-danger m-3">Book Now</button></Link>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default Navbarcomponent