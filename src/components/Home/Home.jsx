import React from 'react'
import Header from './Header/Header.jsx'
import Services from "../Services/Services.jsx"
import Category from "../category/Category.jsx"
import FEATURED from "../FEATURED PRODUCTS/FEATURED.jsx"
import Footer from "../Footer/Footer.jsx"
import Slider2 from '../slider/Slider2.jsx'
function Home({addToCart , addToFav}) {
  return (
    <>
    <Header/>
    <Services/>
    <Category/>
    <FEATURED addToCart={addToCart} addToFav={addToFav} />
    <Slider2/>
    </>
  )
}

export default Home
