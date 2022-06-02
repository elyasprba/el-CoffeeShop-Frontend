import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import './Payment.css';

export default class Payment extends Component {
   render() {
      return (
         <>
            <Header />
            <main className="payment-main-container">
               <div className="payment-title">Checkout your item now!</div>
               <section className="payment-main-content">
                  <section className="payment-left-content">
                     <div className="payment-order-summary">Order Summary</div>
                     <div className="payment-all-order">
                        <div className="payment-order-item">
                           <div className="payment-item-img">
                              <img src={require('../../assets/products/beef.png')} alt="" className="payment-product-img" />
                           </div>
                           <div className="payment-item-detail">
                              <p>Hazelnut Latte</p>
                              <p>x 1</p>
                              <p>Regular</p>
                           </div>
                           <div className="payment-item-price">IDR 24.0</div>
                        </div>
                        <div className="payment-order-item">
                           <div className="payment-item-img">
                              <img src={require('../../assets/products/beef.png')} alt="" className="payment-product-img" />
                           </div>
                           <div className="payment-item-detail">
                              <p>Hazelnut Latte</p>
                              <p>x 1</p>
                              <p>Regular</p>
                           </div>
                           <div className="payment-item-price">IDR 24.0</div>
                        </div>
                     </div>
                     <div className="payment-border"></div>
                     <div className="payment-all-order-info">
                        <div className="payment-subtotal">
                           <div className="payment-info">SUBTOTAL</div>
                           <div className="payment-price">IDR 120.000</div>
                        </div>
                        <div className="payment-tax">
                           <div className="payment-info">TAX {'&'} FEES</div>
                           <div className="payment-price">IDR 20.000</div>
                        </div>
                        <div className="payment-shipping">
                           <div className="payment-info">SHIPPING</div>
                           <div className="payment-price">IDR 10.000</div>
                        </div>
                     </div>
                     <div className="payment-total-order-price">
                        <div className="payment-total-info-title">TOTAL</div>
                        <div className="payment-total-info-price">IDR 150.000</div>
                     </div>
                  </section>
                  <section className="payment-right-content">
                     <div className="payment-right-content-card">
                        <div className="payment-address-detail-section">
                           <div className="payment-address-detail-container">
                              <div className="payment-address-detail-title">Address details</div>
                              <div className="payment-address-detail-edit">edit</div>
                           </div>
                           <div className="address-detail-card">
                              <div className="payment-address-detail">
                                 <span>Delivery to</span> Iskandar Street
                              </div>
                              <div className="payment-border"></div>
                              <div className="payment-address-detail">Km 5 refinery road oppsite re public road, effurun, Jakarta</div>
                              <div className="payment-border"></div>
                              <div className="payment-address-detail">+62 81348287878</div>
                           </div>
                        </div>
                        <div className="payment-payment-method">
                           <div className="payment-payment-method-title">Payment method</div>
                           <div className="payment-payment-method-card">
                              <form>
                                 <label className="payment-radio-method-container">
                                    <div className="payment-card-vector-container">
                                       <img src={require('../../assets/payment/vector-card.png')} alt="card" className="payment-card-vector" />
                                    </div>
                                    <p>Card</p>
                                    <input type="radio" name="payment-method-input" />
                                    <span className="checkmark"></span>
                                 </label>
                                 <div className="payment-border"></div>
                                 <label className="payment-radio-method-container">
                                    <div className="payment-bank-vector-container">
                                       <img src={require('../../assets/payment/vector-bank.png')} alt="bank" className="payment-bank-vector" />
                                    </div>
                                    <p>Bank account</p>
                                    <input type="radio" name="payment-method-input" />
                                    <span className="checkmark"></span>
                                 </label>
                                 <div className="payment-border"></div>
                                 <label className="payment-radio-method-container">
                                    <div className="payment-cod-vector-container">
                                       <img src={require('../../assets/payment/vector-delivery.png')} alt="delivery" className="payment-cod-vector" />
                                    </div>
                                    <p>Cash on Delivery</p>
                                    <input type="radio" name="payment-method-input" />
                                    <span className="checkmark"></span>
                                 </label>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="payment-confirm-button">Confirm and Pay</div>
                  </section>
               </section>
            </main>
            <Footer />
         </>
      );
   }
}
