import React, { useContext } from 'react'
import './Menubar.css'
import { assests } from '../../assets/assets';
import { Link,useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Menubar = () => {
  const navigate = useNavigate();
  const {foodList,quantities} = useContext(StoreContext);
  const cartItems = foodList.filter((food) => quantities[food.id] > 0);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container mt-2">
        <Link to="/"><img src={assests.logo} alt="" className='logo' height={40} width={40} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore" >Explore</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>

          <div className="menubar-right">
              <Link to="/cart" className="position-relative">
                <img src={assests.cart} alt="" height={40} width={40}  className='position-relative' />
                <span className='position-absolute top-90 translate-middle badge rounded-pill bg-warning'>{cartItems.length}</span>
              </Link>
            <button className='btn btn-outline-primary' onClick={() => navigate("/login")}>Login</button> 
            <button className='btn btn-outline-success' onClick={() => navigate("/register")}>Register</button>
          </div>


        </div>
      </div>
    </nav>
  )
}

export default Menubar;