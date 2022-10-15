import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

 

  return (
  <nav className="app_navbar">
    <div className="app_navbar-logo">
      <img src={images.gericht} alt="app_logo" />
    </div>
    <ul className="app_navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#award">Award</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app_navbar_login">
      <a href="#Login" className="p__opensans">
        Log in / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app_navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      
      
      {toggleMenu &&(
      
      <div className="app_navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay_close"
          onClick={() => setToggleMenu(false)}
        />
        <ul className="app_navbar-smallscreen-links">
          <li className="p__opensans">
            <a href="#">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#">About</a>
          </li>
          <li className="p__opensans">
            <a href="#">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#">Award</a>
          </li>
          <li className="p__opensans">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      )}
    </div>

  </nav>
  )
}

export default Navbar;
