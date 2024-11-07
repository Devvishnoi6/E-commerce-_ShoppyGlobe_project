

import React from 'react';
import { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [searchedItems , setSearchedItems] = useState('');
    const history = useHistory();

    const handleSearchItem = (e) =>{
        setSearchedItems(e.target.value);
    };
 
    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        history.push(`/search ? query = ${searchedItems}`);
    };


   return(
  <header className="header">
    <nav className="nav">
     <h1>🛍️ ShoppyGlobe</h1>
    
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><a href="https://github.com/Devvishnoi6/Online-Library-System" target= "_blank" >🔗 GITHUB</a></li>
        <li><Link to="/checkout">Checkout</Link></li>

      </ul>
    </nav>
  </header>
)};

export default Header;
