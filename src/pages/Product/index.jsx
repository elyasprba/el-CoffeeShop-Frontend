import React, { Component } from 'react';

import Header from '../../components/Product/Header';
import Main from '../../components/Product/Main';
import Footer from '../../components/Footer/Footer';

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
