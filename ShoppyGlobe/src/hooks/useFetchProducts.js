

import { useEffect, useState } from 'react';

//custom hook to fetch data
export const useFetchProducts = () => {
    //Different types of States for different purposes
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
         //Updates products state with fetched data
        setProducts(data.products);
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, 
  //Empty dependency shows that effect will run only once when compnent renders
  []);

  return { products, loading, error };
};


