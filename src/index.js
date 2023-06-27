import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coaches from './Coaches/coaches';
import Blog from './Blog/blog';
import Products from './products/product';
import ProductDetails from './products/productDetail';
import GetStarted from './getStarted/getStarted';
import Error  from './error/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index exact element={<App /> } />
        <Route path='/Products' exact element={<Products />} />
        <Route path='/product/:productId' exact element={<ProductDetails />} />
        <Route path='/Coaches' exact element={<Coaches />} />
        <Route path='/Blog' exact element={<Blog />} />
        <Route path='/pricings' exact element={<GetStarted />} />
       <Route path='*' element={<Error /> } /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
