import React from 'react'
import "./Services.css"
import { FaCheck } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";




function Services() {
  return (
    <>
    <div className=" container m-auto mt-5">
      <div className=" x d-flex align-items-center justify-content-center text-align-center gap-2 fs-3 mt-5 p2 fw-bold">
          <i>      <FaCheck />          </i>
        <p className='m-auto'>Quality Product</p>
        </div>      
      <div className=" x d-flex align-items-center justify-content-center text-align-center gap-2 fs-3 mt-5 p2 fw-bold">
        <i>      <FaShippingFast />        </i>
      <p className=' m-auto'>Free Shipping </p>
      </div>      
      <div className=" x d-flex align-items-center justify-content-center text-align-center gap-2 fs-3 mt-5 p2 fw-bold">
        <i><FaExchangeAlt />        </i>
        <p className='m-auto'>14-Day Return        </p>
        </div>       
      <div className=" x d-flex align-items-center justify-content-center text-align-center gap-2 fs-3 mt-5 p2 fw-bold">
        <i><FaPhoneVolume />        </i>
        <p className='m-auto'>24/7 Support        </p>
        </div>      
    </div>
    </>
  )
}

export default Services
