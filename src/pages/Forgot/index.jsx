import React, { useState } from 'react';
import './forgot.css';
import axios from 'axios';

function Forgot() {
   const [page, setPage] = useState('first');
   // const [input, setInput] = useState({
   //    email: '',
   //    newPassword: '',
   //    newPasswordSec: '',
   //    confirmCode: '',
   // });

   const forgotHandler = async () => {
      try {
         const result = await axios.get(`${process.env.REACT_APP_HOST}/auth/forgot-password/${input.email}`);
         console.log(result);
         setTimeout(() => {
            setPage('tes');
         }, 2000);

         // console.log(result.data.msg);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         {page === 'first' ? (
            <>
               <div className="container-forgot">
                  <aside className="aside-img">
                     <img src={require('../../assets/bg-forgot.png')} alt="bg-forgot" />
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
                              <button className="send-forgot" onClick={forgotHandler}>
                                 Send
                              </button>
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
                                 <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" width={'30px'} height={'30px'} />
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
            </>
         ) : (
            <>
               <div className="container-forgot">
                  <aside className="aside-img">
                     <img src={require('../../assets/bg-forgot.png')} alt="bg-forgot" />
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
                              <p className="info-title">Input your password?</p>
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
                                 <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" width={'30px'} height={'30px'} />
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
            </>
         )}
      </>
   );
}

export default Forgot;
