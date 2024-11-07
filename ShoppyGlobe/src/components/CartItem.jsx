

import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/action';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  //Function for handling removing an items from cart
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };
  //Function for handling increment in the quanatity of an item in cart
  const handleIncrementQuantity = () =>{
    dispatch(incrementQuantity(item.id));
  };
    //Function for handling decrement in the quanatity of an item in cart
  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(item.id));
  }

  //It return the cartitems with the image , price title and remove option in it .
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
        <button>CheckOut</button>
      </div>
    </div>
  );
};

export default CartItem;

