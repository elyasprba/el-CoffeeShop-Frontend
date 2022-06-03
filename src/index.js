import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Forgot from './pages/Forgot';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import History from './pages/History';
import Payment from './pages/Payment';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/history" element={<History />} />
            <Route path="/payment" element={<Payment />} />
         </Routes>
      </BrowserRouter>
   );
}

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
