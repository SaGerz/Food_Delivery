import React from "react";
import '../Navbar/Navbar.css'
import { assets } from "../../assets/assets";

const Navbar = () => {
    return(
        <div className="navbar">
            <img src={assets.logo} alt="logo" className="logo"/>
            <ul className="navbar-menu">
                <li>home</li>
                <li>menu</li>
                <li>mobile app</li>
                <li>contact us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="search-icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket-icon" />
                    <div className="dot"></div>
                </div>                
            <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar;