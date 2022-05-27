import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
   render() {
      return (
         <>
            <footer className="main-footer">
               <div className="main-footer-content">
                  <div className="main-footer-info">
                     <div className="main-footer-name">
                        <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" className="logo-image-footer" />
                        <p className="name-logo-footer">el-CoffeeShop</p>
                     </div>
                     <p className="description-footer">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                     <div className="sosmed-img-footer">
                        <img src={require('../../assets/sosmed/fb-img.png')} alt="fb-img" />
                        <img src={require('../../assets/sosmed/twitter-img.png')} alt="twitter-img" />
                        <img src={require('../../assets/sosmed/ig-img.png')} alt="ig-img" />
                     </div>
                     <p className="copy-right-footer">@2020el-CoffeeShop</p>
                  </div>
                  <div className="product-info-footer">
                     <div className="main-footer-detail-info-product">
                        <p className="product-title-footer">Product</p>
                        <div className="product-detail-info-footer">
                           <div className="footer-info-detail">
                              <p className="product-detail-footer">Download</p>
                              <p className="product-detail-footer">Location</p>
                              <p className="product-detail-footer">Blog</p>
                              <p className="product-detail-footer">Pricing</p>
                              <p className="product-detail-footer">Countries</p>
                           </div>
                        </div>
                     </div>
                     <div className="main-footer-detail-info-engage">
                        <p className="product-title-footer">Engage</p>
                        <div className="engage-detail-info-footer">
                           <div className="footer-info-detail">
                              <p className="engage-detail-footer">Coffe Shop ?</p>
                              <p className="engage-detail-footer">FAQ</p>
                              <p className="engage-detail-footer">Terms of Service</p>
                              <p className="engage-detail-footer">About Us</p>
                              <p className="engage-detail-footer">Privacy Police</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </>
      );
   }
}
