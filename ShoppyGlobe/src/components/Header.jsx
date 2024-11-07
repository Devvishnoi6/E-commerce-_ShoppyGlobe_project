

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {


   return(
  <header className="header">
    <nav className="nav">
     <h1><Link to="/">🛍️ ShoppyGlobe</Link></h1>
    
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><a href="https://github.com/Devvishnoi6/E-commerce-_ShoppyGlobe_project" target= "_blank" >🔗 GITHUB</a></li>
        <li><Link to="/checkout">Checkout</Link></li>

      </ul>
    </nav>
  </header>
)};

export default Header;
