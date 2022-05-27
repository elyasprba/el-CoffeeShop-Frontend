import React, { Component } from 'react';

import Header from '../../components/Home/Header';
import Main from '../../components/Home/Main';
import Footer from '../../components/Footer/Footer';

import './Home.css';

class Home extends Component {
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

export default Home;
