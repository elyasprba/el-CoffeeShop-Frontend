import React, { Component } from 'react';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';
import './ProductDetails.css';
import axios from 'axios';
import withParams from '../../helper/whitParams';

class ProductDetails extends Component {
   constructor() {
      super();
      this.state = {
         product: [],
      };
   }

   componentDidMount() {
      const { params } = this.props;
      axios
         .get(`http://localhost:8080/products/${params.id}`)
         .then((result) => {
            console.log(result);
            this.setState({
               product: result.data.data[0],
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
            <section className="protail">
               <section className="main-protail">
                  <aside className="info-protail">
                     <div>
                        <p className="favpromos">Favorite & Promo {this.state.product.name}</p>
                     </div>
                     <img src={`http://localhost:8080${this.state.product.pict}`} alt="product-img" width={'400px'} />
                     <p className="info-name-protail">{this.state.product.name}</p>
                     <p className="info-price-protail">IDR. {this.state.product.price}</p>
                     <button className="add-to-cart">Add to Cart</button>
                     <button className="ask-a-staff">Ask a Staff</button>
                  </aside>
                  <div>
                     <section className="detail-protail">
                        <p className="detail-deliv-protail">Delivery only on Monday to friday at 1 - 7 pm</p>
                        <p className="detail-desc-protail">{this.state.product.description}</p>
                        <p className="size-protail">Choose a size</p>
                        <div className="detail-size-protail">
                           <div className="title-size">R</div>
                           <div className="title-size">L</div>
                           <div className="title-size">XL</div>
                        </div>
                     </section>
                     <section className="delivery-methods-protail">
                        <p className="detail-delivery-protail">Choose Delivery Methods</p>
                        <section className="list-delivery-protail">
                           <button className="dine-in">Dine in</button>
                           <button className="door-delivery">Door Delivery</button>
                           <button className="pick-up">Pick-Up</button>
                        </section>
                        <form action="" className="settime-protail">
                           <label htmlFor="settime">Set time:</label>
                           <input type="text" name="settime" id="settime" placeholder="Enter the time you'll arrived" />
                        </form>
                     </section>
                  </div>
               </section>
               <section className="checkout-protail">
                  <section className="checkout-info-protail">
                     <div className="checkout-img-protail">
                        <img src={require('../../assets/products/Mask Group.png')} alt="product-img" width={'120px'} height={'120px'} />
                     </div>
                     <div className="checkout-name-size">
                        <p className="checkout-name-product-protail">COLD BREW</p>
                        <p className="checkout-size-product-protail">x1 (Large)</p>
                        <p className="checkout-size-product-protail">x1 (Large)</p>
                     </div>
                  </section>
                  <section className="checkout-button-protail">
                     <button className="checkout">Checkout</button>
                  </section>
               </section>
            </section>
            <Footer />
         </>
      );
   }
}

export default withParams(ProductDetails);
