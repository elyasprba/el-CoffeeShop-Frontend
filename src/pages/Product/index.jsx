import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Product.css';

export default class Product extends Component {
   constructor() {
      super();
      this.state = {
         product: [],
      };
   }

   componentDidMount() {
      axios
         .get('http://localhost:8080/products/all')
         .then((result) => {
            this.setState({
               product: result.data.data,
            });
            console.log(result);
         })
         .catch((error) => {
            console.log(error);
         });
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
                     <div className="headerItem">Favorit Product</div>
                     <div className="headerItem">Coffee</div>
                     <div className="headerItem">Non Coffee</div>
                     <div className="headerItem">Foods</div>
                     <div className="headerItem">Add on</div>
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
