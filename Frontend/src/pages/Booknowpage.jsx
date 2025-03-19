import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'

const Booknowpage = () => {
  return (
    <>
    <Navbarcomponent/>
            <div className="container my-5">
            <div className="col-md-6 shadow-lg mt-5 offset-md-3">
                <h1 className="text-center text-decoration-underline">Registration Form</h1>
                <hr/>
                <h2 className="text-center text-decoration-underline">Enter Your Details</h2>
                <div className="container">
                    <div className="p-3 container">
                        <label htmlFor="fname" className="text-white">First Name</label>
                        <input type="text" name="" id="fname" placeholder="First Name" className="form-control"/>
                    </div>
                    <div className="p-3 container">
                        <label htmlFor="lname" className="text-white">Last Name</label>
                        <input type="text" name="" id="lname" placeholder="Last Name" className="form-control"/>
                    </div>
                    <div className="p-3 container">
                        <label htmlFor="address" className="text-white">Address</label>
                        <input type="text" name="" id="address" placeholder="Address" className="form-control"/>
                    </div>
                    <div className="p-3 container">
                        <label htmlFor="number" className="text-white">Contact Number</label>
                        <input type="text" name="" id="number" placeholder="Contact Number" className="form-control"/>
                    </div>
                <hr/>
                <h2 className="text-center text-decoration-underline">Parent's Details</h2>
                <div className="p-3 container">
                    <label htmlFor="fname" className="text-white">First Name</label>
                    <input type="text" name="" id="fname" placeholder="First Name" className="form-control"/>
                </div>
                <div className="p-3 container">
                    <label htmlFor="lname" className="text-white">Last Name</label>
                    <input type="text" name="" id="lname" placeholder="Last Name" className="form-control"/>
                </div>
                <div className="p-3 container">
                    <label htmlFor="number" className="text-white">Contact Number</label>
                    <input type="text" name="" id="number" placeholder="Contact Number" className="form-control"/>
                </div>
                <div className="p-3 container">
                    <label htmlFor="number" className="text-white">Emergency Contact Number</label>
                    <input type="text" name="" id="number" placeholder="Landline Number" className="form-control"/>
                </div>
                <hr/>
                <div className="p-3 container">
                    <h2 className="text-center text-decoration-underline">Legal Doucment Details</h2>
                    <p className="font-weight:bold;"><b>We kindly request the parents to send the hardcopy of the child's selected legal document details for the record of the childrens data</b></p>
                    <ul>
                        <li className="list-unstyled">
                            <label htmlFor="ctzn" className="text-white">Citizenship</label>
                            <input type="checkbox" name="" id="ctzn"/>
                        </li>
                        <li className="list-unstyled">
                            <label htmlFor="bc" className="text-white">Birth Certificate</label>
                            <input type="checkbox" name="" id="bc"/>
                        </li>
                        <li className="list-unstyled">
                            <label htmlFor="nic" className="text-white">National Identity Card</label>
                            <input type="checkbox" name="" id="nic"/>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className="col-md-6 offset-md-5">
                    <a href="/index.html"><button className="btn btn-lg btn-danger">Register!</button></a>
                </div>
                </div>
            </div> 
            </div>

    </>
)
}

export default Booknowpage