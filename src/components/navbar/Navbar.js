import React from 'react';
import './index.css'

const Navbar = () => {
  return (
    <div className='navbar-component'>

      <div className='company-logo-container'>
        <h1>Laundry-App</h1>
      </div>

      <div className='button-container'>
        <div className="navbar-buttons">
          <a className="nav-button" href="/">Home</a>
          <a className="nav-button" href="/services">Services</a>
          <a className="nav-button" href="/about">About us</a>
        </div>
      </div>






    </div>
  )
}

export default Navbar