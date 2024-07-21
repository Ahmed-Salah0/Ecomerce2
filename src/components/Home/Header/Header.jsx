import React from 'react'
import "./Header.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';


function Header() {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1

  };
  return (
    <header className='container '>
  
        
       <Slider {...settings} className="header-left">
        <div className="header-left-men d-flex justify-content-center align-items-center text-light gap-3 ">
          <h3 className='slider-title fs-1 animate__animated animate__fadeInDown'>Men Fashion</h3>
          <p className='fs-4 mx-auto px-5 animate__animated animate__fadeIn'>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
          <button className='btn btn-light animate__animated animate__fadeInUp '>Shop Now</button>

        </div>
        <div className="header-left-wemen d-flex justify-content-center align-items-center text-light gap-3">
          <h3 className='slider-title fs-1 animate__animated animate__fadeInDown'>Wemen Fashion</h3>
          <p className='fs-4 mx-auto px-5 animate__animated animate__fadeInDown'>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
          <button className='btn btn-light animate__animated animate__fadeInDown'>Shop Now</button>

        </div>
        <div className="header-left-Kids d-flex justify-content-center align-items-center text-light gap3">
          <h3 className='slider-title fs-1 animate__animated animate__fadeInDown'>Kids Fashion</h3>
          <p className='fs-4 mx-auto px-5 animate__animated animate__fadeInDown'>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
          <button className='btn btn-light animate__animated animate__fadeInDown '>Shop Now</button>

        </div>
       </Slider>
      
      
       <div className="header-right">
        <div className="header-right-up">
          <h4>SAVE 20%  </h4>
          <h3 className='slider-title'>Special Offer </h3>
          <button className='bt'>Shop Now</button>
        </div>
        <div className="header-right-Down">
        <h4>SAVE 20%  </h4>
          <h3 className='slider-title'>Special Offer </h3>
          <button className='bt'>Shop Now</button>
        </div>
       </div>
       
    </header>
  )
}

export default Header
