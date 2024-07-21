import React from 'react'
import "./Category.css"
import img1 from "../../images/cat-1.jpg"
import img2 from "../../images/cat-2.jpg"
import img3 from "../../images/cat-3.jpg"
import img4 from "../../images/cat-4.jpg"
function Category() {
  return (
    <> 
         <p className='cat'> CATEGORIES    <span>     ---------------------------------------------------------------------------------</span></p>
    <div className=" container d-flex align-items-center justify-content-between m-auto ">
      <div className=" Ca">
        <img src={img1} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" align-items-center Ca ">
        <img src={img2} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca">
        <img src={img3} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca">
        <img src={img4} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
    </div>
    <div className=" container d-flex align-items-center  justify-content-between m-auto">
      <div className=" Ca">
        <img src={img4} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca align-items-center ">
        <img src={img3} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca">
        <img src={img2} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca">
        <img src={img1} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
    </div>
    <div className=" container d-flex align-items-center justify-content-between m-auto ">
      <div className="Ca">
        <img src={img2} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" align-items-center Ca ">
        <img src={img3} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca">
        <img src={img4} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
      <div className=" Ca">
        <img src={img1} alt="" />
        <p className='fw-bold fs-4 mt-1'>Category Name</p>
        <b>100 Product</b>
      </div>
 
    </div>
    </>
  )
}

export default Category
