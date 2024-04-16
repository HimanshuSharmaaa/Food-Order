import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore, magni nihil ipsa ea, voluptatum, beatae minima suscipit odit quae sint sequei</p>
            <div className="footer-logo-img">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+215-236-788-800</li>
                <li>Tomato@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='copyRight'>Copyright 2024 @ Tomato.</p>
    </div>
  )
}

export default Footer;