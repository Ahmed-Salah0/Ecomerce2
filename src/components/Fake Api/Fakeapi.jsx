import React, { useEffect } from 'react'
import "./Fakeapi.css"
import img from "../../images/product-2.jpg"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"
import Spiner from "../../images/loooo.gif"
import { Link, useParams } from 'react-router-dom';


function Fakeapi({FakeProducts , getFakeProducts , loader , addToCart , addToFav}) {

  useEffect(()=>{
    getFakeProducts()
  } , [])

  return (
    <section>
<h2>Fake Products</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id repellat enim delectus esse maxime quo suscipit praesentium dolore omnis!</p>
<div className=" container">

  { loader ? <div className=''>
    <img src={Spiner} alt="" />
  </div>
  :
  FakeProducts.map( (value , index)=>{
    return(
<div className="card " key={index}>
<Link to={`/Product/${value.id}`}>
<img src={value.image} alt="" />

</Link>
        <p className='fs-4'>{value.title.slice(1, 15)}</p>
        <p className='fs-4'>{value.price } $</p>
          <div className='d-flex align-items-center justify-content-between m-2 '>
          <i>  <FaHeart onClick={()=>{addToFav(value)}}/></i>
            <i onClick={()=>{addToCart(value)}}><FaShoppingCart /></i>
            </div>      
    </div>


    ) 
  })

  }

       </div> 
   </section>
  )
}

export default Fakeapi
