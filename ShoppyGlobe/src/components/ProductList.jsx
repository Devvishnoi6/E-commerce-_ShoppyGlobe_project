

import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { useFetchProducts } from '../hooks/useFetchProducts';
import './ProductList.css';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [searchedItems , setSearchedItems] = useState('');
  const location = useLocation();

  useEffect(() =>{
    const param = new URLSearchParams(location.search);
    const query = param.get('query');
    setSearchedItems(query || '');
  } , [location.search]);

  //Filtering the items or products based on your searched name
  const filteredItems = products.filter((product) => 
    typeof product.name === 'string' && product.name.includes(searchedItems));
    
  // Render loading, error or product items
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <div className="product-list-container">
    <div className="product-list">
      {filteredItems.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;

