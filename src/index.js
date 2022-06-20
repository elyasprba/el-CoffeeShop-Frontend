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
import PrivateElement from './components/PrivateElement';
import Dashboard from './pages/Dasboard';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
            <Route
               path="/profile"
               element={
                  <PrivateElement redirectedTo="/login" extraData={{ isAuthenticated: false }}>
                     <Profile />
                  </PrivateElement>
               }
            />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route
               path="/history"
               element={
                  <PrivateElement redirectedTo="/login" extraData={{ isAuthenticated: false }}>
                     <History />
                  </PrivateElement>
               }
            />
            <Route
               path="/payment"
               element={
                  <PrivateElement redirectedTo="/login" extraData={{ isAuthenticated: false }}>
                     <Payment />
                  </PrivateElement>
               }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-product" element={<CreateProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
         </Routes>
      </BrowserRouter>
   );
}

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <App />
         </PersistGate>
      </Provider>
   </React.StrictMode>
);
