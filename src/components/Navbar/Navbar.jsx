import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="uifry logo" className="logo" />
        <span className="brand">uifry</span>
      </div>
      <ul className="navbar-menu">
        <li className="menu-item"><a href="#home">Home</a></li>
        <li className="menu-item"><a href="#about">About Us</a></li>
        <li className="menu-item"><a href="#pricing">Pricing</a></li>
        <li className="menu-item"><a href="#features">Features</a></li>
      </ul>
      <button className="download-button">Download</button>
    </nav>
    </>
  )
}

export default Navbar