

import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/action';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };
  const handleIncrementQuantity = () =>{
    dispatch(incrementQuantity(item.id));
  };
  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(item.id));
  }

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <div className='quantity-controls'>
            <button onClick={handleDecrementQuantity}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncrementQuantity}>+</button>
        </div>
        <button onClick={handleRemoveFromCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

