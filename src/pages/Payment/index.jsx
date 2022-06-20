import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import mapStateWithProps from '../../helper/mapStateWithProps';
import { paymentAction } from '../../Redux/actionCreator/payment';
import { removeCart } from '../../Redux/actionCreator/cart';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import './Payment.css';

class Payment extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: this.props.cartInfo.product ? this.props.cartInfo.product.id : null,
         pict: this.props.cartInfo.product ? this.props.cartInfo.product.pict : null,
         qty: this.props.cartInfo.qty,
         size: this.props.cartInfo.size,
         price: this.props.cartInfo.product ? this.props.cartInfo.product.price : null,
         display_name: this.props.userInfo.payload.name,
         address: this.props.userInfo.payload.address,
         phone: this.props.userInfo.payload.phone_number,
         tax: 10000,
         shipping: 10000,
         isPayment: false,
         user_id: this.props.userInfo.payload.id,
         isOpen: false,
      };
   }

   paymenHandler() {
      const { paymentAction, removeCart } = this.props;
      const body = {
         name_products: this.state.id,
         qty: this.state.qty,
         size: this.state.size,
         subtotal: parseInt(this.state.qty) * parseInt(this.state.price),
         tax: this.state.tax,
         shipping: this.state.shipping,
         total: parseInt(this.state.qty * parseInt(this.state.price)) + this.state.tax + this.state.shipping,
         users_id: this.state.user_id,
      };
      paymentAction(body);
      removeCart();
   }

   openModal = () => this.setState({ isOpen: true });
   closeModal = () => this.setState({ isOpen: false });
   render() {
      document.title = 'Payment';
      return (
         <>
            <Header />
            <main className="payment-main-container">
               <div className="payment-title">Checkout your item now!</div>
               <section className="payment-main-content">
                  <section className="payment-left-content">
                     <div className="payment-order-summary">Order Summary</div>
                     {!this.state.id ? (
                        <h3>Please add to cart your products</h3>
                     ) : (
                        <>
                           {' '}
                           <div className="payment-all-order">
                              <div className="payment-order-item">
                                 <div className="payment-item-img">
                                    <img src={`${this.state.pict}`} alt="product-pict" className="payment-product-img" style={{ borderRadius: '50%', width: '70px', height: '70px' }} />
                                 </div>
                                 <div className="payment-item-detail">
                                    <p>{this.props.cartInfo.product.name}</p>
                                    <p>{this.state.qty}</p>
                                    <p>{this.state.size}</p>
                                 </div>
                                 <div className="payment-item-price">IDR. {this.state.price}</div>
                              </div>
                           </div>
                           <div className="payment-border"></div>
                           <div className="payment-all-order-info">
                              <div className="payment-subtotal">
                                 <div className="payment-info">SUBTOTAL</div>
                                 <div className="payment-price">IDR {`${parseInt(this.state.qty * parseInt(this.state.price))}`}</div>
                              </div>
                              <div className="payment-tax">
                                 <div className="payment-info">TAX {'&'} FEES</div>
                                 <div className="payment-price">IDR {this.state.tax}</div>
                              </div>
                              <div className="payment-shipping">
                                 <div className="payment-info">SHIPPING</div>
                                 <div className="payment-price">IDR {this.state.shipping}</div>
                              </div>
                           </div>
                           <div className="payment-total-order-price">
                              <div className="payment-total-info-title">TOTAL</div>
                              <div className="payment-total-info-price">IDR {`${parseInt(this.state.qty * parseInt(this.state.price)) + this.state.tax + this.state.shipping}`}</div>
                           </div>{' '}
                        </>
                     )}
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
                                 <span>Delivery to</span> {this.state.display_name}
                              </div>
                              <div className="payment-border"></div>
                              <div className="payment-address-detail">{this.state.address}</div>
                              <div className="payment-border"></div>
                              <div className="payment-address-detail">{this.state.phone}</div>
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
                                    <p>Bank account.</p>
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

                     <div
                        className="payment-confirm-button"
                        onClick={() => {
                           this.paymenHandler();
                           this.openModal();
                        }}
                     >
                        Confirm and Pay
                     </div>
                  </section>
               </section>
            </main>
            <Footer />
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
               <Modal.Header closeButton>
                  <Modal.Title>Payment Successfull</Modal.Title>
               </Modal.Header>
               <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeModal}>
                     <Link to={'/history'}>Close</Link>
                  </Button>
               </Modal.Footer>
            </Modal>
         </>
      );
   }
}

export default connect(mapStateWithProps, { paymentAction, removeCart })(Payment);
