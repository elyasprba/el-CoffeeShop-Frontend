import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import './history.css';
import { CardHistory } from '../../components/CardHistory/CardHistory';

export default class History extends Component {
   constructor() {
      super();
      this.state = {
         token: localStorage.getItem('token'),
         history: [],
         isLogin: true,
      };
   }

   componentDidMount() {
      document.title = 'History';
      if (!this.state.token) {
         this.setState({ isLogin: false });
      }
      const config = { headers: { Authorization: `Bearer ${this.state.token}` } };

      axios
         .get(`${process.env.REACT_APP_HOST}/transactions`, config)
         .then((result) => {
            console.log(result);
            this.setState({
               history: result.data.data,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   render() {
      return (
         <>
            <Header />
            <main className="history-main-container">
               <section className="history-title">
                  <h1>Let's see what you have bought!</h1>
                  <p>Select item to delete</p>
                  <div className="history-select-all">Select All</div>
               </section>
               <section className="history-main-product-container row row-cols-sm-2 row-cols-md-3 row-cols-xs-1">
                  {this.state.history.map((result, idx) => (
                     <CardHistory key={idx} name={result.name} price={result.total} pict={result.pict} />
                  ))}
               </section>
            </main>
            <Footer />
         </>
      );
   }
}
