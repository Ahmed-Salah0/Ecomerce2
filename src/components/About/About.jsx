import React from 'react';
import { Link } from 'react-router-dom';
import Shop from "../Shop/Shop"

import img from "../../images/online-shopping.jpg"
import "../About/About.css"
function About() {
  return (
    <div className="container About mt-5">
      <h1 >About Us</h1>
      <div className='about-content d-flex justify-content-between align-content-center mb-5'>
      <div className='left'>
        <img src={img} alt=""/>
        </div>
        <div className='right'>
          <h2>Welcome To <span>TrendyFi Shop</span></h2>
          <p><span>TrendyFi</span> Shop is Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.  </p>
            <Link to="/Shop" className='btn'>Shop NOW</Link>
        </div>
       
      </div>
    </div>
  );
}

export default About;
