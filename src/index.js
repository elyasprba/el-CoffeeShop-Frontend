import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Forgot from './pages/Forgot';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/forgot" element={<Forgot />} />
         </Routes>
      </BrowserRouter>
   );
}

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
