import React from 'react'
import Menubar from './components/Menubar/Menubar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import ExploreFood from './pages/ExploreFood/ExploreFood';
import ContactUs from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import FoodDetail from './pages/FoodDetail/FoodDetail';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Menubar/>
      <ToastContainer/>  
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/food/:id" element={<FoodDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App;