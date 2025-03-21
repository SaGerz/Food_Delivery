import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="fb-icon" />
                    <img src={assets.twitter_icon} alt="twitter-icon" />
                    <img src={assets.linkedin_icon} alt="linkedin-icon" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+62 8127232211</li>
                    <li>contacdev@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright-text">Copyright 2024 © Tomato.com - All right Reserverd </p>
    </div>
  )
}

export default Footer