import React, { Component } from 'react';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Main from '../../components/Home/Main';

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
