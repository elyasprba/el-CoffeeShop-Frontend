import React, { Component } from 'react';
import mapStateWithProps from '../../helper/mapStateWithProps';
import { connect } from 'react-redux';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';

import './createproduct.css';

class CreateProduct extends Component {
   constructor() {
      super();
      this.state = {
         token: '',
         name: '',
         price: '',
         desciption: '',
         isSuccess: false,
         successMsg: '',
      };
   }
   render() {
      return (
         <>
            <Header />
            <p className="title-newprod">Favorite & Promo {'>'} Add new product</p>
            <section className="main-newprod">
               <aside className="left-newprod">
                  <div className="img-newprod-content">
                     <img src={require('../../assets/products/beef.png')} alt="img-products" className="img-newprod" />
                  </div>
                  <div className="button-newprod">
                     <button type="button" className="take-picture">
                        Take picture
                     </button>
                     <button className="choose-from-gallery" type="submit">
                        Choose from gallery
                     </button>
                  </div>
                  <div className="delivery-hour">
                     <div className="form-date-delivery">
                        <label for="date" className="name-delivery">
                           Delivery Hour
                        </label>
                        <input type="date" placeholder="birthday-date" />
                        <input type="date" placeholder="birthday-date" />
                     </div>
                  </div>
                  <div className="input-stock">
                     <label for="cars">Input stock</label>
                     <select name="cars" id="cars" className="input-stock-newprod">
                        <option value="price">1</option>
                        <option value="category_name">3</option>
                        <option value="name">5</option>
                     </select>
                  </div>
               </aside>
               <section className="right-newprod">
                  <div className="input-desc-newprod">
                     <label htmlFor="name" className="name-prod">
                        Name :
                     </label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Input product name"
                        className="text-newprod"
                        value={this.state.name}
                        onChange={(e) => {
                           this.setState({
                              name: e.target.value,
                           });
                        }}
                     />
                     <label htmlFor="price" className="new-label">
                        Price :
                     </label>
                     <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Input price"
                        className="text-newprod"
                        value={this.state.price}
                        onChange={(e) => {
                           this.setState({
                              price: e.target.value,
                           });
                        }}
                     />
                     <label htmlFor="description" className="new-label">
                        Description :
                     </label>
                     <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Describe your product min. 150 characters"
                        className="text-newprod"
                        value={this.state.desciption}
                        onChange={(e) => {
                           this.setState({
                              desciption: e.target.value,
                           });
                        }}
                     />
                  </div>
                  <div className="input-size-newprod">
                     <p className="input-product-size">Input product size :</p>
                     <p className="info-size-newprod">Click size you want to use for this product</p>
                  </div>
                  <div className="detail-size-protail">
                     <div className="title-size">R</div>
                     <div className="title-size">L</div>
                     <div className="title-size">XL</div>
                  </div>
                  <div className="input-delivery-methods">
                     <p className="input-product-size">Input delivery methods :</p>
                     <p className="info-size-newprod">Click methods you want to use for this promo</p>
                  </div>
                  <div className="detail-input-delivery">
                     <button type="button" className="home-delivery">
                        Home Delivery
                     </button>
                     <button type="button" className="home-delivery">
                        Dine in
                     </button>
                     <button type="button" className="home-delivery">
                        Take away
                     </button>
                  </div>
                  <div className="save-cancel-newprod">
                     <button
                        type="button"
                        className="save-product-delivery"
                        onClick={(e) => {
                           e.preventDefault();
                           const { name, price, desciption } = this.state;
                           const body = {
                              name,
                              price,
                              desciption,
                           };
                           const { token } = this.props.userInfo.token;
                           axios
                              .post(`${process.env.REACT_APP_HOST}/products/`, body, { headers: { Authorization: `Bearer ${token}` } })
                              .then((result) => {
                                 console.log(result);
                              })
                              .catch((error) => {
                                 console.log(error);
                              });
                        }}
                     >
                        Save Product
                     </button>
                     <button type="button" className="cancel-delivery">
                        Cancel
                     </button>
                  </div>
               </section>
            </section>

            <Footer />
         </>
      );
   }
}

export default connect(mapStateWithProps)(CreateProduct);
