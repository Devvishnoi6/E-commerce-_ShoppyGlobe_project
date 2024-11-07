


import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import './App.css';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/checkout" element={<Checkout />}  />
      </Routes>
    </Suspense>
  </Router>
);

export default App;

