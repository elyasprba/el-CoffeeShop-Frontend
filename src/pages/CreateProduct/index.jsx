import React, { Component } from 'react';
import mapStateWithProps from '../../helper/mapStateWithProps';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';

import './createproduct.css';

class CreateProduct extends Component {
   constructor() {
      super();
      this.state = {
         token: '',
         product: [],
         name: '',
         price: '',
         description: '',
         size: '',
         stock: 0,
         category: '',
         pict: null,
         file: null,
      };
   }

   componentDidMount() {
      window.scrollTo(0, 0);
   }

   render() {
      document.title = 'Create Product';
      return (
         <>
            <Header />
            <p className="title-newprod">Favorite & Promo {'>'} Add new product</p>
            <section className="main-newprod">
               <aside className="left-newprod">
                  <div className="img-newprod-content">{this.state.file ? <img src={this.state.file} alt="img-products" className="img-newprod" /> : <img src={require('../../assets/products/products-default.png')} alt="img-products" className="img-newprod" />}</div>
                  <div className="button-newprod">
                     <button type="button" className="take-picture">
                        Take picture
                     </button>
                     <label htmlFor="image-upload" className="choose-from-gallery">
                        <input
                           type="file"
                           hidden
                           name="image-upload"
                           id="image-upload"
                           onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                 const reader = new FileReader();
                                 reader.onload = () => {
                                    this.setState({ file: reader.result, pict: file });
                                 };
                                 reader.readAsDataURL(file);
                              }
                           }}
                        />
                        <div className="input-choose"> Choose from gallery </div>
                     </label>
                  </div>
                  <div className="detail-size-protail">
                     <div
                        className={this.state.category === '1' ? 'category-active' : 'category-non'}
                        onClick={() => {
                           this.setState({
                              category: '1',
                           });
                        }}
                     >
                        Food
                     </div>
                     <div
                        className={this.state.category === '2' ? 'category-active' : 'category-non'}
                        onClick={() => {
                           this.setState({
                              category: '2',
                           });
                        }}
                     >
                        Coffee
                     </div>
                     <div
                        className={this.state.category === '3' ? 'category-active' : 'category-non'}
                        onClick={() => {
                           this.setState({
                              category: '3',
                           });
                        }}
                     >
                        Non Coffee
                     </div>
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
                     <label for="cars">Input stock :</label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Input stock"
                        className="text-newprod"
                        value={this.state.stock}
                        onChange={(e) => {
                           this.setState({
                              stock: e.target.value,
                           });
                        }}
                     />
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
                        value={this.state.description}
                        onChange={(e) => {
                           this.setState({
                              description: e.target.value,
                           });
                        }}
                     />
                  </div>
                  <div className="input-size-newprod">
                     <p className="input-product-size">Input product size :</p>
                     <p className="info-size-newprod">Click size you want to use for this product</p>
                  </div>
                  <div className="detail-size-protail">
                     <div
                        className={this.state.size === 'Regular' ? 'title-size-active' : 'title-size'}
                        onClick={() => {
                           this.setState({
                              size: 'Regular',
                           });
                        }}
                     >
                        R
                     </div>
                     <div
                        className={this.state.size === 'Large' ? 'title-size-active' : 'title-size'}
                        onClick={() => {
                           this.setState({
                              size: 'Large',
                           });
                        }}
                     >
                        L
                     </div>
                     <div
                        className={this.state.size === 'Extra Large' ? 'title-size-active' : 'title-size'}
                        onClick={() => {
                           this.setState({
                              size: 'Extra Large',
                           });
                        }}
                     >
                        XL
                     </div>
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
                           const { name, price, description, size, stock, category, pict } = this.state;
                           const body = new FormData();
                           body.append('name', name);
                           body.append('price', price);
                           body.append('description', description);
                           body.append('size', size);
                           body.append('stock', stock);
                           body.append('category', category);
                           body.append('pict', pict);

                           const { token } = this.props.userInfo.token;
                           const config = { headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' } };

                           axios
                              .post(`${process.env.REACT_APP_HOST}/products/`, body, config)
                              .then((result) => {
                                 alert(result.data.msg);
                                 this.setState({
                                    product: result.data.data,
                                 });
                              })
                              .catch((error) => {
                                 console.log(error);
                              });
                        }}
                     >
                        <Link to={'/product'} className="link-save-newprod">
                           Save Product
                        </Link>
                     </button>
                     <button
                        type="button"
                        className="cancel-delivery"
                        onClick={() => {
                           this.setState({
                              name: '',
                              price: '',
                              description: '',
                              category: '',
                              pict: '',
                              size: '',
                              stock: '',
                              file: null,
                           });
                        }}
                     >
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
