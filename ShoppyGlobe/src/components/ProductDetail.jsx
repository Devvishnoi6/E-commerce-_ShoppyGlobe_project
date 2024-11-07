

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';



function ProductDetail() {
    const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product details: {error}</p>;

  return (
   <div className="product-detail">
  { product &&
   ( 
   <>
      <img src={product.thumbnail} alt={product.title} />
    
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p> <b>Price</b> - ${product.price} USD</p>
        <p><b>Ratings</b> - {product.rating} ⭐</p>


        <button onClick={handleAddToCart}>Add to Cart</button>
     
    </>
    )
    }
</div>
  );
};

export default ProductDetail;
