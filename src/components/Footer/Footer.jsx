import React from 'react'
import "./Footer.css"
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img from "../../images/payments.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";





function Footer() {
  return (
    <>
    <div className='foo'>
  <footer>
    <div className="left-footer S">
      <h3>GET IN TOUCH </h3>
      <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
      <i><IoLocationSharp />123 Street, New York, USA</i>
      <i><IoIosMail /> mail@domain.com</i> 
      <i><FaPhoneAlt />+012 345 67890</i>
      </div>
    <div className="sec-footer S">
      <h3>QUICK SHOP</h3>
        <i>      <FaAngleRight />Home </i>
        <i>      <FaAngleRight />Shop Detail </i>
        <i>      <FaAngleRight />Our Shop </i>
        <i>      <FaAngleRight />Shopping Cart </i>
        <i>      <FaAngleRight />Checkout </i>
        <i>      <FaAngleRight />Contact Us </i>
    </div>
    <div className="third-footer fs-4">
    <h3>MY ACCOUNT</h3>
        <i> <FaGithub/> </i>
        <i><FaFacebookSquare /></i>
        <i><FaSquareInstagram /></i>
        <i><FaLinkedin /> </i>
        <i><FaTwitter /></i>
        <i><FaWhatsapp /></i>
    </div>
    <div className="right-footer S">
      <h3>NEWSLETTER </h3>
      <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
      <div className='input'>
        <input type="text" />
        <button className='btn bttn w-100 d-flex h-auto'>Sign Up</button>
      </div>
      <h4>FOLLOW US</h4>
      <div>
        <div className='icon S'>
        <i> <FaFacebookF /></i>   
        <i>   <FaTwitter /></i>
        <i>      <FaLinkedin /></i>
        <i>      <FaInstagram /> </i>

      </div>
      </div>
    </div>

  </footer>
  <hr />
  <div className='f-down d-flex justify-content-around'>
  <div className='f-left'>
  <h3 className='text-light fs-5'>© All Rights Reserved. Designed by <a href="">Ahmed Salah</a></h3>
</div>
<div className='f-right'>
<img src={img} alt="" />
</div>
  </div>

  </div>

    </>
  )
}

export default Footer
