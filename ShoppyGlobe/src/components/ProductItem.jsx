
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
import './ProductItem.css';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  //Function to handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (

    <div className="product-item">
        
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p> <b>Price</b> - ${product.price} USD</p>
        <p><b>Ratings</b> - {product.rating} ⭐</p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to={`/product/${product.id}`} className="button">View Details</Link>
    </div>
  );
}

export default ProductItem;



