import React, { Component } from 'react';

import Footer from '../../components/Product/Footer';
import Header from '../../components/Product/Header';
import Main from '../../components/Product/Main';

import './Product.css';

export default class Product extends Component {
   render() {
      return (
         <>
            <Header />
            <Main />
            <Footer />
         </>
      );
   }
}
