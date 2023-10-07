import elanlogo from "../assets/elan-logo.png";
import React from 'react';
import '../styles/navbar-styles.css';
import { useState } from "react";


function Navbar() {

    const [chalu, setChalu] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 70) {
          setChalu(true);
        } else {
          setChalu(false);
        }
      };

  return (
    <nav className={!chalu ? "navbar" : "navbar"}>
      <div className="navbar-left">
        <img src={elanlogo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-right">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Gallery</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
