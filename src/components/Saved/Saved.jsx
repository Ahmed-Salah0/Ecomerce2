import React from 'react'
import "../Cart/Cart.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import img from '../../images/product-8.jpg'



function Saved({favItems , removeFromFav , addToCart}){
  return(
         

      <div className='fav container '> 
        {favItems.length >0?
        
      <>
     {favItems.map((val , key)=>{
      return(
      <div className=" card p-5 align-items-center w-25 " key={key}>
              <img src={val.image ? val.image : val.thumbnail} alt="" className='w-100'/>
              <p className=' fs-3 fw-bold'>{val.title.slice(1, 15)}</p>
              <p className='fw-bold fs-4 mt-1'>price : <span>{val.price} $</span></p>
              <div className=' d-flex align-items-center justify-content-between'>
                <i onClick={()=>{addToCart(val)}} className='fs-2 c'><FaShoppingCart/></i>
                <i onClick={()=>{removeFromFav(key)}} className='fs-2 text-danger '><FaWindowClose /></i>
              </div>
            </div>
      )
     })}
      </> 
      :
      <div className=' text-danger fs-1 text-center'>Your Favourite Cart is Empty</div>
 
      }
      
    </div>
      
      )
}
    
  


export default Saved
