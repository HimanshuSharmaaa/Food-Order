import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const[line , setLine] = useState("Home")

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>{setLine("Home")}} className={line === "Home" ? "active" : ""}>Home</Link>
        <a href='#exploe-menu' onClick={()=>{setLine("Menu")}} className={line === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={()=>{setLine("Mobile-App")}} className={line === "Mobile-App" ? "active" : ""}>Moblie-App</a>
        <a href='#footer' onClick={()=>{setLine("Contact-Us")}} className={line === "Contact-Us" ? "active" : ""}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icons">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className='dot'></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign-In</button>
      </div>
    </div>
  )
}

export default Navbar;