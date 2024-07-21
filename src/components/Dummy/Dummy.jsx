import React, { useEffect } from 'react'
import img from "../../images/product-4.jpg"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"
import Spiner from "../../images/loooo.gif"
import { Link, useParams } from 'react-router-dom';

function Dummy({DummyProducts, getDummyProducts ,loader ,addToCart , addToFav}) {
  useEffect(()=>{
    getDummyProducts()
  } , [])

  return (
    <>
   <section>
<h2>Dummy Products</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id repellat enim delectus esse maxime quo suscipit praesentium dolore omnis!</p>
<div className=" container">

  {loader ? <div className=' '>
    <img src={Spiner} alt="" />
    </div>
    :
    DummyProducts.map((value , key)=>{
      return(
        <div className="card " key={key}>
          <Link to= {`/Products/${value.id}`}>
          <img src={value.thumbnail} alt="" key={value.index} />
          </Link>
          <p className='fs-4'>{value.title.slice(1, 15)}</p>
          <p className='fs-4'>{value.price} $</p>
  
            <div className='d-flex align-items-center justify-content-between m-2 '>
              <i><FaHeart onClick={()=>{addToFav(value)}}/></i>
              <i onClick={()=>{addToCart(value)}}><FaShoppingCart /></i>
              </div>   
      </div>
      )
    })
    }

       </div> 
   </section>
     
      
    </>
  )
}

export default Dummy
