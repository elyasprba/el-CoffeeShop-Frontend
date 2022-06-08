import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Product.css';
import withSearchParams from '../../helper/withSerchParams';

class Product extends Component {
   constructor(props) {
      super(props);
      this.state = {
         product: [],
         isFavorite: false,
         isCoffee: false,
         isNonCoffee: false,
         isFood: false,
         isAllProduct: false,
         isActive: '',
         setSearchParams: this.props.setSearchParams.bind(this),
      };
   }

   componentDidMount() {
      document.title = 'Product';
      this.state.setSearchParams('');
      axios
         .get(`${process.env.REACT_APP_HOST}/products/all`)
         .then((result) => {
            this.setState({
               product: result.data.data,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   componentDidUpdate() {
      if (this.state.isFavorite) {
         this.state.setSearchParams('category=favorite');
         axios
            .get(`${process.env.REACT_APP_HOST}/products/fav`)
            .then((result) => {
               this.setState({
                  product: result.data.data,
               });
            })
            .catch((error) => {
               console.log(error);
            });
         this.setState({
            isFavorite: false,
         });
      }
      if (this.state.isCoffee) {
         this.state.setSearchParams('category_name=coffee');
         axios
            .get(`${process.env.REACT_APP_HOST}/products/all?category_name=coffee`)
            .then((result) => {
               this.setState({
                  product: result.data.data,
               });
            })
            .catch((error) => {
               console.log(error);
            });
         this.setState({
            isCoffee: false,
         });
      }

      if (this.state.isNonCoffee) {
         this.state.setSearchParams('category_name=non coffee');
         axios
            .get(`${process.env.REACT_APP_HOST}/products/all?category_name=non coffee`)
            .then((result) => {
               this.setState({
                  product: result.data.data,
               });
            })
            .catch((error) => {
               console.log(error);
            });
         this.setState({
            isNonCoffee: false,
         });
      }

      if (this.state.isFood) {
         this.state.setSearchParams('category_name=food');
         axios
            .get(`${process.env.REACT_APP_HOST}/products/all?category_name=food`)
            .then((result) => {
               this.setState({
                  product: result.data.data,
               });
            })
            .catch((error) => {
               console.log(error);
            });
         this.setState({
            isFood: false,
         });
      }

      if (this.state.isAllProduct) {
         this.state.setSearchParams('');
         axios
            .get(`${process.env.REACT_APP_HOST}/products/all`)
            .then((result) => {
               this.setState({
                  product: result.data.data,
               });
            })
            .catch((error) => {
               console.log(error);
            });
         this.setState({
            isAllProduct: false,
         });
      }
   }

   render() {
      return (
         <>
            <Header />
            <main className="row body">
               <div className="col-sm-4 row sideBar">
                  <div className="promoTitle">
                     <h3>Promo for you</h3>
                     <p>Coupons will be updated every weeks.</p>
                     <p>Check them out</p>
                  </div>
                  <div className="layer">
                     <div className="imgContainer">
                        <img src={require('../../assets/products/beef.png')} alt="products-img" />
                        <div className="discount">
                           <h2>Beef Spaghetti</h2>
                           <h2>20% OFF</h2>
                           <p>Buy 1 Choco Oreo and get 20% off</p>
                           <p>for Beef Spaghetti</p>
                           <div className="dashLine"></div>
                           <div className="coupon d-flex justify-content-around flex-column align-items-center">
                              <div className="p2">COUPON CODDE</div>
                              <h1>FNPR15RG</h1>
                              <p>Valid until October 10th 2022</p>
                           </div>
                        </div>
                     </div>
                     <div className="blackLayer"></div>
                     <div className="brownLayer"></div>
                  </div>
                  <div className="apply">
                     <div className="applyCoupon">Apply Coupon</div>
                  </div>
                  <div className="terms">
                     <h5>Terms and Condition</h5>
                     <p>1. You can only apply 1 coupon per day</p>
                     <p>2. It only for dine in</p>
                     <p>3. Buy 1 get 1 only for new user</p>
                     <p>4. Should make member card to apply coupon</p>
                  </div>
               </div>
               <div className="col-sm-8 content">
                  <div className="d-flex justify-content-around productHeader">
                     <div
                        className={this.state.isActive === 'favorite' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              isFavorite: true,
                              isActive: 'favorite',
                           });
                        }}
                     >
                        Favorit Product
                     </div>
                     <div
                        className={this.state.isActive === 'coffee' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              isCoffee: true,
                              isActive: 'coffee',
                           });
                        }}
                     >
                        Coffee
                     </div>
                     <div
                        className={this.state.isActive === 'non-coffee' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              isNonCoffee: true,
                              isActive: 'non-coffee',
                           });
                        }}
                     >
                        Non Coffee
                     </div>
                     <div
                        className={this.state.isActive === 'foods' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              isFood: true,
                              isActive: 'foods',
                           });
                        }}
                     >
                        Foods
                     </div>
                     <div
                        className={this.state.isActive === 'all' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              isAllProduct: true,
                              isActive: 'all',
                           });
                        }}
                     >
                        All
                     </div>
                  </div>
                  <div className="row favoriteProduct">
                     {this.state.product.map((product) => (
                        <div className="col-md-6  col-lg-3 d-flex flex-column productContainer">
                           <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                              <Link to={`/product-details/${product.id}`}>
                                 <img className="imgProduct" key={product.picture} src={`http://localhost:8080${product.pict}`} alt="product-img" />
                              </Link>
                              <div className="productName" key={product.name}>
                                 {product.name}
                              </div>
                              <div className="price-product" key={product.price}>
                                 IDR. {product.price}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </main>
            <Footer />
         </>
      );
   }
}

export default withSearchParams(Product);
