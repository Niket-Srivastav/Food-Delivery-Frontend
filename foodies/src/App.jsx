import React from 'react'
import Menubar from './components/Menubar/Menubar';
import Home from './pages/Home/Home';
import ExploreFood from './pages/ExploreFood/ExploreFood';
import ContactUs from './pages/Contact/Contact';
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
      </Routes>

    </div>
  )
}

export default App;