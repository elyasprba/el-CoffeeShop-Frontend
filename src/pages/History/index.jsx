import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import './history.css';

export default class History extends Component {
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
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col history-product-card-container">
                     <div className="history-product-card">
                        <div className="history-product-img-container">
                           <img src={require('../../assets/products/product-history.png')} alt="coldbrew" className="history-product-img" />
                        </div>
                        <div className="history-product-info">
                           <div className="history-product-name">Veggie tomato mix</div>
                           <div className="history-product-price-status-container">
                              <div className="history-product-price-status">
                                 <div className="history-product-price">IDR 34.000</div>
                                 <div className="history-product-status">Delivered</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}
