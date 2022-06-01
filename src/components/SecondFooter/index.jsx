import React, { Component } from 'react';
import './SecondFooter.css';

export default class SecondFooter extends Component {
   render() {
      return (
         <>
            <footer className="footer-login" id="footer-login">
               <div className="footer-content-login">
                  <div className="footer-info-login">
                     <div className="main-header-name-login">
                        <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" width={'30px'} height={'30px'} />
                        <p className="name-logo-login">el-CoffeeShop</p>
                     </div>
                     <p className="description-login">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                     <div className="sosmed-img-login">
                        <img src={require('../../assets/sosmed/fb-img.png')} alt="fb-img" />
                        <img src={require('../../assets/sosmed/twitter-img.png')} alt="twitter-img" />
                        <img src={require('../../assets/sosmed/ig-img.png')} alt="ig-img" />
                     </div>
                     <p className="copy-right-login">@2020el-CoffeeShop</p>
                  </div>
                  <div className="product-info-login">
                     <p className="product-title-login">Product</p>
                     <div className="product-detail-info-login">
                        <div className="footer-info-sign-login">
                           <p className="product-detail">Download</p>
                           <p className="product-detail">Location</p>
                           <p className="product-detail">Blog</p>
                        </div>
                        <div className="footer-info-sign-login">
                           <p className="product-detail">Pricing</p>
                           <p className="product-detail">Countries</p>
                        </div>
                     </div>
                     <p className="product-title-login">Engage</p>
                     <div className="engage-title-login">
                        <div className="footer-info-sign-login">
                           <p className="engage-detail">Coffe Shop ?</p>
                           <p className="engage-detail">FAQ</p>
                           <p className="engage-detail">Terms of Service</p>
                        </div>
                        <div className="footer-info-sign-login">
                           <p className="engage-detail">About Us</p>
                           <p className="engage-detail">Privacy Police</p>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </>
      );
   }
}
