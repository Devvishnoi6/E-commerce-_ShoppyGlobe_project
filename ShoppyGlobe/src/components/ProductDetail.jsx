

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';



function ProductDetail() {
    const dispatch = useDispatch();
    //It will help in getting the product id from URL parameters
  const { id } = useParams();

  //Different types of States used for different purposes
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

//UseEffect used to fetch products details when the id of product's changes.
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        //Setting Details in state
        setProduct(data);
        //Set loading to false as data is fetched
        setLoading(false);
      })
      .catch(error => {
        //set loading and error according to the need.
        setError(error);
        setLoading(false);
      });
  }, 
  //Dependency array for Use-Effect to re-run when id changes
  [id]);

  //Render loading , error or product details
  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product details: {error}</p>;

  return (
   <div className="product-detail">
  {/* Condtional rendering if product exists */}
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
