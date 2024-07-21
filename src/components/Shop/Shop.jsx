import React from 'react'
import "../FEATURED PRODUCTS/FEATURED.css"
import { LiaStarSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"
import productsData from '../FEATURED PRODUCTS/Product';

function Shop({addToCart , addToFav}) {
  return (
    <>
            <p className='cat'>FEATURED PRODUCTS  <span>     -------------------------------------------------------------------</span>        </p>

    <div className="container m-auto">
      {productsData.map((val , key)=>{
        return(
          <div className="card " key={key}>
          <img src={val.image} alt="" />
          <p className='fs-4'>{val.title}</p>
          <h5>{val.price} $ <del className='text-muted'>{val.sale} $</del></h5>
            <i className='d-flex align-items-center justify-content-center mb-1 '>
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <sub className='text-dark' >(99)</sub>
              </i> 
  
              <div className='d-flex align-items-center justify-content-between m-2 '>
             <i> <FaHeart onClick={()=>{addToFav(val)}} /></i>
              <i onClick={()=>{addToCart(val)}}><FaShoppingCart /></i>
              </div>
      </div>
     
        )
      }
      )

      }
    

    </div>
    </>
  )
}

export default Shop