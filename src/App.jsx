import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/Placeorder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const[showLoginPopup,setShowLoginPopup]=React.useState(false);
  return (
    <>
    {showLoginPopup?<LoginPopup setShowLoginPopup={setShowLoginPopup}/>:<></>}
    <div className="app">
      <Navbar setShowLoginPopup={setShowLoginPopup} />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="order" element={<PlaceOrder />} />


      </Routes>
     
      
    </div>
     <Footer />
     </>
  )
}

export default App
