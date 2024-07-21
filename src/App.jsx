import React, { useEffect, useState } from 'react'
import Nav from "./components/Nav/Nav"
import Footer from './components/Footer/Footer'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Shop from "./components/Shop/Shop"
import Fake from "./components/Fake Api/Fakeapi"
import Dummy from "./components/Dummy/Dummy"
import FakeDetails from './components/Fake Api/FakeDetails'
import DummyDetails from './components/Dummy/DummyDetails'
import Cart from './components/Cart/Cart'
import Saved from './components/Saved/Saved'
import axios from 'axios';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Swal from 'sweetalert2'
import ScrollToTop from './components/scroll/Scroll'


function App() {
const FakeApi ="https://fakestoreapi.com/products"
const DummyApi ="https://dummyjson.com/products"
const [FakeProducts , SetFakeProducts]= useState([])
const [DummyProducts , SetDummyProducts]= useState([])
const [loader , setLoader]= useState(false)

async function getFakeProducts(){
  setLoader(true)
let {data} = await axios.get(FakeApi)
SetFakeProducts(data)
setLoader(false)
}  


async function getDummyProducts(){
  setLoader(true)
let {data} = await axios.get(DummyApi)
SetDummyProducts(data.products)
setLoader(false)
}


useEffect(()=>{
    getFakeProducts()
    getDummyProducts()
  } , [])

  let checkpro=JSON.parse(localStorage.getItem("product"))
  useEffect(()=>{
  if(checkpro){
    setCartItems(checkpro)
  }else{
    setCartItems([])
  }
  }, [])
//

let checkproducts=JSON.parse(localStorage.getItem("products"))
  useEffect(()=>{
  if(checkproducts){
    setFavItems(checkproducts)
  }else{
    setFavItems([])
  }
  }, [])

//
  let [cartItems , setCartItems]= useState([])

  function addToCart(pro){
    let selectedProduct = cartItems.find(item => item.title == pro.title)
    if(selectedProduct){
      Swal.fire({
        title: "This Product Already add!",
        text: "That thing is still around?",
        icon: "info",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Your Product (${pro.title ? pro.title : pro.name}) add Successfully`,
      showConfirmButton: false,
      timer: 1500
    });
    
    setCartItems([...cartItems , {...pro ,amount : 1}])
  }
  }

  function increamnt(pro){
    ++pro.amount    
    setCartItems([...cartItems ])
  }

  function deccreamnt(pro){
    if(pro.amount > 1){
          --pro.amount    
    }else{
      removeFromCart()
    }
    setCartItems([...cartItems ])
  }

  function removeFromCart(key){
    Swal.fire({
      title: "Are you sure to Delete Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer:1500

       
       });
       cartItems.splice(key , 1)
       setCartItems([...cartItems ])
      }
    });
   
  }
 useEffect(()=>{
  localStorage.setItem("product" , JSON.stringify(cartItems))
 },[cartItems])

// 
    let [favItems , setFavItems]= useState([])

  function addToFav(pro){
    let selectedProduct = favItems.find(item => item.title == pro.title)
    if(selectedProduct){
      Swal.fire({
        title: "This Product Already add!",
        text: "That thing is still around?",
        icon: "info",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Your Product (${pro.title ? pro.title : pro.name}) add Successfully`,
      showConfirmButton: false,
      timer: 1500
    });
    
    setFavItems([...favItems , {...pro ,amount : 1}])
  }
  }



  //

  function removeFromFav(key){
    Swal.fire({
      title: "Are you sure to Delete Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer:1500

       
       });
       favItems.splice(key , 1)
       setFavItems([...favItems ])
      }
    });
   
  }
  useEffect(()=>{
    localStorage.setItem("products" , JSON.stringify(favItems))
   },[favItems])


    let [dark , setDark] = useState(false)
    function isDark(){
      setDark(!dark)
    }
  return (
    <div className={dark ? "dark BODY" : "BODY"} isDark ={isDark}>

<ScrollToTop />

<BrowserRouter>
<Nav cartItems={cartItems} favItems={favItems} dark={dark}  isDark ={isDark}/>

<Routes>
  <Route path='/' element={<Home addToCart={addToCart} addToFav={addToFav}/>} />
  <Route path='/About' element={<About/>} />
  <Route path='/Contact' element={<Contact/>} />
  <Route path='/Shop' element={<Shop addToCart={addToCart} addToFav={addToFav}/>} />
  <Route path='/Fake' element={<Fake loader={loader} FakeProducts={FakeProducts} getFakeProducts={getFakeProducts} addToCart={addToCart} addToFav={addToFav}/>} />
  <Route path='/Product/:ProductId' element={<FakeDetails addToCart={addToCart}/>}/>
  <Route path='/Dummy' element={<Dummy loader={loader} DummyProducts={DummyProducts} getDummyProducts={getDummyProducts}  addToCart={addToCart} addToFav={addToFav}/>} />
  <Route path='/Products/:DummyId' element={<DummyDetails addToCart={addToCart}/>}/>
    <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} increamnt={increamnt}  deccreamnt={deccreamnt}/>}/>
    <Route path='/saved' element={<Saved favItems={favItems} removeFromFav={removeFromFav} addToCart={addToCart}/>}/>
</Routes>
<Footer/>
</BrowserRouter>

    </div>
  )
}

export default App
