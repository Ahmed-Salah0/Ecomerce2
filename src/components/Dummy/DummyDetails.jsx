import React, { useEffect, useState } from 'react'
import img from "../../images/product-3.jpg"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../Fake Api/Fakeapi.css"

function DummyDetails({addToCart}) {
    let {DummyId} =useParams()
const url =`https://dummyjson.com/products/${DummyId}`
const [DummyDetails , setDummyDetails]=useState({}) 
async function getDummyDetails (){
let {data} = await axios.get(url)
setDummyDetails(data)

}
useEffect(()=>{
    getDummyDetails()
},[])
    return (
    <section>
      <div className="fake ">
        <div>
            <img src={DummyDetails.thumbnail} alt="" />
        </div>
        <div className=''>
            <b className='fs-3 d-block '>{DummyDetails.title}</b>
            <strong className=' gap-5'>{DummyDetails.category}</strong>
            <p >{DummyDetails.description}</p>
            <h5>{DummyDetails.price} $</h5>
            <button onClick={()=>{addToCart(DummyDetails)}} className=' '>Add To Cart</button>
        </div>
      </div>
    </section>
  )
}

export default DummyDetails
