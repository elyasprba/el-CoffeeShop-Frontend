import React, { Component } from 'react';
import './Forgot.css';

export default class Forgot extends Component {
   render() {
      return (
         <div className="container-forgot">
            <aside className="aside-img">
               <img
                  src="https://s3-alpha-sig.figma.com/img/245d/3c2d/d9b99b0f8bb8ff1c5992ab8bd7684491?Expires=1654473600&Signature=eisO3DYa2TxLCA7KetEpnA4MUFMhCfqHXZ2jVwUd6Eyt59rhPl6vgGE~is09dzsk7OYx~XyLWmqJ-mEGddWp3RDTUnMybtXeh6-P0cOHBFYEcRAt-bZni-HIE74YWMVvBt7S8e0CuHiwi6LMbVfK4RbcaPWOgdqE3Vz4WqTlkiIoGTAnE~zM37woSDgyqXexaWyALKBzszIaryoQV2OEpZVsrLyWZ83dKPMu9BKqcrKdHYMuj1YbS~3Mjs8g~ALuLJHA41~WKBjfii6axepcNVWg9HyKD4FI-rcvrg0DhYDtYq1djX5TQXovLDtFLrKmv0tiOQ8oQpqIRF9PytCP-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt=""
               />
            </aside>
            <section>
               <section className="main-container-forgot">
                  <section className="main-forgot">
                     <header className="header-forgot">
                        <p className="header-name-forgot">
                           <img src={require('../../assets/coffee-1.png')} alt="logo-img" />
                           Coffee Shop
                        </p>
                     </header>
                     <section className="title-forgot">
                        <p className="info-title">Forgot your password?</p>
                        <p className="desc-title">Don't worry, we got your back!</p>
                     </section>
                     <form className="form-forgot-password">
                        <input type="text" id="email" placeholder="Enter your email adress to get link" />
                        <button className="send-forgot">Send</button>
                        <p className="clik-here">Click here if you didn't receive any link in 2 minutes</p>
                        <p className="time-forgot">01:52</p>
                        <button className="resend-forgot">Resend Link</button>
                     </form>
                  </section>
               </section>
               <footer className="footer-forgot" id="forgot-img">
                  <div className="footer-content-forgot">
                     <div className="footer-info-forgot-desc">
                        <div className="main-header-name-forgot">
                           <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" />
                           <p className="name-logo-forgot">el-CoffeeShop</p>
                        </div>
                        <p className="description-forgot">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                        <div className="sosmed-img-forgot">
                           <img src={require('../../assets/sosmed/fb-img.png')} alt="fb-img" />
                           <img src={require('../../assets/sosmed/twitter-img.png')} alt="twitter-img" />
                           <img src={require('../../assets/sosmed/ig-img.png')} alt="ig-img" />
                        </div>
                        <p className="copy-right-forgot">@2020el-CoffeeShop</p>
                     </div>
                     <div className="product-info-forgot">
                        <p className="product-title-forgot">Product</p>
                        <div className="product-detail-info-forgot">
                           <div className="footer-info-forgot">
                              <p className="product-detail">Download</p>
                              <p className="product-detail">Location</p>
                              <p className="product-detail">Blog</p>
                           </div>
                           <div className="footer-info-forgot">
                              <p className="product-detail">Pricing</p>
                              <p className="product-detail">Countries</p>
                           </div>
                        </div>
                        <p className="title-info-forgot">Engage</p>
                        <div className="engage-title-forgot">
                           <div className="footer-info-forgot">
                              <p className="engage-detail">Coffe Shop ?</p>
                              <p className="engage-detail">FAQ</p>
                              <p className="engage-detail">Terms of Service</p>
                           </div>
                           <div className="footer-info-forgot">
                              <p className="engage-detail">About Us</p>
                              <p className="engage-detail">Privacy Police</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </footer>
            </section>
         </div>
      );
   }
}
