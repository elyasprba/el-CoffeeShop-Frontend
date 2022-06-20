import React, { Component } from 'react';
import mapStateWithProps from '../../helper/mapStateWithProps';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import withParams from '../../helper/withParams';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';

import '../CreateProduct/createproduct.css';
import { connect } from 'react-redux';

class EditProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         token: '',
         product: [],
         id: '',
         name: '',
         price: 0,
         description: '',
         category: '',
         size: '',
         pict: '',
         stock: 0,
      };
   }

   componentDidMount() {
      const { params } = this.props;
      axios
         .get(`${process.env.REACT_APP_HOST}/products/${params.id}`)
         .then((result) => {
            console.log(result);
            this.setState({
               product: result.data.data,
               id: result.data.data[0].id,
               name: result.data.data[0].name,
               price: result.data.data[0].price,
               description: result.data.data[0].description,
               stock: result.data.data[0].stock,
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
            <p className="title-newprod">
               Edit Product {'>'} {this.state.name}
            </p>
            <section className="main-newprod">
               <aside className="left-newprod">
                  <div className="img-newprod-content">
                     <img src={require('../../assets/products/products-default.png')} alt="img-products" className="img-newprod" />
                  </div>
                  <div className="button-newprod">
                     <button type="button" className="take-picture">
                        Take picture
                     </button>
                     <label htmlFor="image-upload" className="choose-from-gallery">
                        <input type="file" hidden name="image-upload" id="image-upload" />
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
                        placeholder="Input stock product"
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
                        placeholder="Input product price"
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
                        placeholder="Input description product"
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
                     <button type="button" className="save-product-delivery">
                        <div
                           className="link-save-newprod"
                           onClick={() => {
                              const { name, price, description, category, size, stock } = this.state;
                              const body = new FormData();
                              body.append('name', name);
                              body.append('price', Number(price));
                              body.append('description', description);
                              body.append('category', category);
                              body.append('size', size);
                              body.append('stock', Number(stock));

                              const { token } = this.props.userInfo.token;
                              const config = { headers: { Authorization: `Bearer ${token}`, 'content-type': 'multipart/form-data' } };
                              axios
                                 .patch(`${process.env.REACT_APP_HOST}/products/${this.state.id}`, body, config)
                                 .then((result) => {
                                    console.log(result);
                                    alert(result.data.msg);
                                 })
                                 .catch((error) => {
                                    console.log(error);
                                 });
                           }}
                        >
                           Save Product
                        </div>
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

export default connect(mapStateWithProps)(withParams(EditProduct));
