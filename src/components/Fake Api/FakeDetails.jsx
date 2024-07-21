import React, { useEffect, useState } from 'react'
import img from "../../images/product-3.jpg"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../Fake Api/Fakeapi.css"

function FakeDetails({addToCart}) {
    let {ProductId} =useParams()
const url =`https://fakestoreapi.com/products/${ProductId}`
const [fakeDetails , setFakeDetails]=useState({}) 
async function getProductDetails (){
let {data} = await axios.get(url)
setFakeDetails(data)

}
useEffect(()=>{
    getProductDetails()
},[])
    return (
    <section>
      <div className="fake ">
        <div>
            <img src={fakeDetails.image} alt="" />
        </div>
        <div className=''>
            <b className='fs-3 d-block '>{fakeDetails.title}</b>
            <strong className=' gap-5'>{fakeDetails.category}</strong>
            <p >{fakeDetails.description}</p>
            <h5>{fakeDetails.price} $</h5>
            <button onClick={()=>{addToCart(fakeDetails)}} className=' '>Add To Cart</button>
        </div>
      </div>
    </section>
  )
}

export default FakeDetails
