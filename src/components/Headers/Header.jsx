import React from 'react'
import logo from '../../assets/Logo.png';
import './Header.css' 

const Header = () => {
  return (
    // {/* navbar */}
    <header className='navb'>
        <div className="logo">
            <img src={logo} alt ="Logo"/>
           <h3> Foodii 🥗</h3>
        </div>
        <nav>
          <a href="#">Buy Online</a>
          <a href="#">Menu</a>
          <a href="#">Offer</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>

        </nav>
         <button className="login-btn">Login</button>

    </header>
    
  )
}

export default Header