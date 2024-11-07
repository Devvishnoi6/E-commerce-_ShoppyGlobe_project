

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    // From redux store getting the cart items
  const cartItems = useSelector(state => state.cart);

  // Render cart items
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        //Render a CartItem component for each item and mapping it.
        cartItems.map(item => <CartItem 
            //Unique key for each cartItem
            key={item.id} 
            //Passing cart items as prop to cartItem component
            item={item} />)
      )}
    </div>
  );
};

export default Cart;
