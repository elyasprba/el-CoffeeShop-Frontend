import React, { useState } from 'react';
import './forgot.css';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Forgot() {
   const [page, setPage] = useState('first');
   const [email, setEmail] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [password, setPassword] = useState('');
   const [confirmCode, setConfirmCode] = useState('');
   const [msg, setMsg] = useState('');
   const [show, setShow] = useState(false);

   const navigate = useNavigate();

   const forgotHandler = async () => {
      try {
         if (email === '') {
            setMsg('Email invalid');
            return setShow(true);
         }
         const result = await axios.get(`${process.env.REACT_APP_HOST}/auth/forgot-password/${email}`);
         setMsg(result.data.msg);
         setShow(true);
         setPage('tes');
      } catch (error) {
         console.log(error);
      }
   };

   const cofirmPassword = async () => {
      try {
         if (newPassword !== password) {
            setMsg('Passwords don`t match!');
            setShow(true);
            return;
         }
         const body = {
            email: email,
            newPassword: newPassword,
            confirmCode: confirmCode,
         };
         const result = await axios.patch(`${process.env.REACT_APP_HOST}/users/update-password`, body);
         setMsg(result.data.message);
         setShow(true);
         setTimeout(() => {
            navigate('/login');
         }, 2000);
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
                              <div className="header-name-forgot" onClick={() => navigate('/')}>
                                 <img src={require('../../assets/coffee-1.png')} alt="logo-img" />
                                 Coffee Shop
                              </div>
                           </header>
                           <section className="title-forgot">
                              <p className="info-title">Forgot your password?</p>
                              <p className="desc-title">Don't worry, we got your back!</p>
                           </section>
                           <form className="form-forgot-password">
                              <input
                                 type="text"
                                 id="email"
                                 placeholder="Enter your email adress to get link"
                                 value={email}
                                 onChange={(email) => {
                                    setEmail(email.target.value);
                                 }}
                              />
                              <div className="send-forgot" onClick={forgotHandler}>
                                 Send
                              </div>
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
                              <div className="header-name-forgot" onClick={() => navigate('/')}>
                                 <img src={require('../../assets/coffee-1.png')} alt="logo-img" />
                                 Coffee Shop
                              </div>
                           </header>
                           <section className="title-forgot">
                              <p className="info-title">Input your password?</p>
                              <p className="desc-title">Don't worry, we got your back!</p>
                           </section>
                           <form className="form-forgot-password">
                              <input
                                 type="password"
                                 id="email"
                                 placeholder="Enter your new password"
                                 value={newPassword}
                                 onChange={(newPassword) => {
                                    setNewPassword(newPassword.target.value);
                                 }}
                              />
                              <input
                                 type="password"
                                 id="email"
                                 placeholder="Enter your new password"
                                 value={password}
                                 onChange={(password) => {
                                    setPassword(password.target.value);
                                 }}
                              />
                              <input
                                 type="text"
                                 id="email"
                                 placeholder="Enter your confirm code"
                                 value={confirmCode}
                                 onChange={(confirmCode) => {
                                    setConfirmCode(confirmCode.target.value);
                                 }}
                              />
                              <div className="send-forgot" onClick={cofirmPassword}>
                                 Send
                              </div>
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
         <Modal show={show}>
            <Modal.Header>
               <Modal.Title>
                  <div>{msg}</div>
               </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
               <Button
                  variant="secondary"
                  onClick={() => {
                     setShow(false);
                  }}
               >
                  Oke
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default Forgot;
