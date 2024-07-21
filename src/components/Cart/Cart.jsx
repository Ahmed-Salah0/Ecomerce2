import React from 'react'
import "./Cart.css"
import img from "../../images/product-1.jpg"
 


function Cart({cartItems , removeFromCart , increamnt ,deccreamnt} ) {
  
  let totall= 0
  return (
    <>
    <div className="cart p-5  ">
      {cartItems.length> 0?
    <div className="row g-3">
{/* {cartItems.length > 1 ?} */}

  {cartItems.map((value , index)=>{
    return(
     <div className="col-lg-12 " key={index}>
    <span className=' d-none'>{totall += value.price * value.amount}</span>  
<div className='product d-flex align-items-center justify-content-around p-3 rounded-3 border shadow'>
  <img src={value.image ? value.image : value.thumbnail} alt="" />
<div>
  <b className=' d-block fs-5 '>{value.price} $</b>
  <b className=' d-block fs-5 '>{value.price * value.amount} $</b>
</div>
<div className=' d-flex align-items-center justify-content-center gap-2 process'>
  <button onClick={()=>{increamnt(value)}}>+</button>
  <span>{value.amount}</span>
  <button onClick={()=>{deccreamnt(value)}}>-</button>
</div>
<button onClick={()=>{removeFromCart(index)}} className='btn btn-danger w-25 bg-danger '  >Remove from cart</button>
  </div>
  </div> 
    )
  })}
  
  <div className="col-lg-8 mx-auto">
    <div className='total p-3 d-flex align-items-center justify-content-around rounded-3 border shadow'>
      <b>Total</b>
      <b>{totall.toFixed(2)} $</b>
    </div>

  </div>
</div>
:
<div className=' text-danger fs-1 text-center'>Your Cart is empty</div>
    } 
  

    </div>
    </>
  )
}

export default Cart
