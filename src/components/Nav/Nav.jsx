import React from 'react'
import "./Nav.css"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";


function Nav({cartItems ,favItems , dark , isDark}) {
  return (
    <>
    <nav
      className="navbar navbar-expand-sm navbar-light"
    >
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 fw-bold " >Trendify <span>Shop</span></Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active"  aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link active" href="#" aria-current="page"
                >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Shop" className="nav-link active" href="#" aria-current="page"
                >Shop</Link>
            </li>
          
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Products</a
              >
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownId"
              >
                <Link to="/Fake" className="dropdown-item" href="#"
                  > Fake Api</Link>

                <Link to="/Dummy" className="dropdown-item" href="#"
                  > Dummy json Api</Link>
              

              </div>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link active" href="#" aria-current="page"
                >Contact</Link>
            </li>
            <li className="nav-item">
              <i onClick={isDark} className="nav-link active fs-5" href="#" aria-current="page"
                ><BsMoonStars/></i>
            </li>
           
        
          </ul>
          <div className=' d-flex gap-2 fs-4'>
              <Link to="/saved">
              <FaHeart className='ic'/>
                <sub>({favItems.length})</sub>
              </Link>
              <Link to="/cart">
              <FaShoppingCart className='ic' />
                <sub>({cartItems.length})</sub>
              </Link>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Nav
