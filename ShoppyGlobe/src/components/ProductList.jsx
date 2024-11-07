

import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useFetchProducts } from '../hooks/useFetchProducts';
import './ProductList.css';

const ProductList = () => {
    //Using products , loading and error from the custom hook
  const { products, loading, error } = useFetchProducts();

  // Render loading, error or product items
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <div className="product-list">
        {/* For rendering each product from ProductItem component */}
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

