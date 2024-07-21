import React from 'react'
import "./Slider2.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/vendor-1.jpg"
import img2 from "../../images/vendor-2.jpg"
import img3 from "../../images/vendor-3.jpg"
import img4 from "../../images/vendor-4.jpg"
import img5 from "../../images/vendor-5.jpg"
import img6 from "../../images/vendor-6.jpg"
import img7 from "../../images/vendor-7.jpg"
import img8 from "../../images/vendor-8.jpg"
function Slider2() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
<section className='slider2'>
    <Slider {...settings}  className=' container'>
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
            <img src={img2} alt="" />
        </div>
        <div>
            <img src={img3} alt="" />
        </div>
        <div>
            <img src={img4} alt="" />
        </div>
        <div>
            <img src={img5} alt="" />
        </div>
        <div>
            <img src={img6} alt="" />
        </div>
        <div>
            <img src={img7} alt="" />
        </div>
        <div>
            <img src={img8} alt="" />
        </div>
    </Slider>
</section>


    </>
  )
}

export default Slider2
