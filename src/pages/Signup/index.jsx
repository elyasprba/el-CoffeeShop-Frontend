import React, { Component } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import SecondFooter from '../../components/SecondFooter';
import 'bootstrap';
import './Signup.css';

export default class Signup extends Component {
   constructor() {
      super();
      this.state = {
         email: '',
         password: '',
         phone_number: '',
         isSuccess: false,
         isRegister: false,
         successMsg: '',
         errorMsg: '',
         isPasswordShown: false,
      };
   }

   render() {
      document.title = 'Sign Up';
      if (this.state.isRegister) {
         return <Navigate to="/login" />;
      }
      return (
         <>
            <section className="container-sign">
               <aside className="side-content">
                  <header className="side-header">
                     <img
                        src="https://s3-alpha-sig.figma.com/img/94cf/d4df/dd22d129a5bbab44da4da62471dafa2a?Expires=1655683200&Signature=g~uQOPz~NhQcU0zA3WxEQpfJ3hbzifq-A6DDFo2qE4oYvApLtSP5Eh5ElOskIRBvhno4pTi7BkqasaJKS~ZKqQCMK0d5I2tVvEHzI6Ud-lyiJ8ozqBUzDAQp~YJ~~dx5tFSiEVWtCfcOwrbFd5f8uizu8msy6jFZVTvulm20J5DSxZhNiGSCX-paYuRFMgPiXfxQtzjy5PXCHl8B0Qi8BO-9tkuDIggkTs37ErTO9naYzrH2WKMeTVEg3Lls2ZFEtT3JCKNcTnhjcLtGlLuUkcOxkPkEmg8fpNaLjEgwJRac7Cd9oyep01rJ9Baf~C7qcVUr0YLbdci-aGy~ZVJ0dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="background-signup"
                        className="background-signup"
                     />
                  </header>
               </aside>
               <section className="main-container-sign">
                  <header className="main-header">
                     <div className="main-header-name">
                        <Link to="/">
                           <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" />
                        </Link>
                        <p className="name-logo">el-CoffeeShop</p>
                     </div>
                     <div>
                        <p className="main-header-title">Sign Up</p>
                     </div>
                  </header>
                  <form className="register-form-sign">
                     <label htmlFor="email">Email Address :</label>
                     <input
                        type="text"
                        id="email"
                        placeholder="Enter your email address"
                        value={this.state.email}
                        onChange={(e) => {
                           this.setState({
                              email: e.target.value,
                           });
                        }}
                     />
                     <label htmlFor="password">Password :</label>
                     <input
                        type={`${this.state.isPasswordShown ? 'text' : 'password'}`}
                        id="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={(e) => {
                           this.setState({
                              password: e.target.value,
                           });
                        }}
                     />
                     <label>
                        <input
                           type="checkbox"
                           value={this.state.isPasswordShown}
                           onChange={() => {
                              this.setState({
                                 isPasswordShown: !this.state.isPasswordShown,
                              });
                           }}
                        />
                        Show Password
                     </label>
                     <label htmlFor="phone">Phone Number :</label>
                     <input
                        type="text"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={this.state.phone_number}
                        onChange={(e) => {
                           this.setState({
                              phone_number: e.target.value,
                           });
                        }}
                     />
                     <div
                        className="sign-up"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={(e) => {
                           e.preventDefault();
                           const { email, password, phone_number } = this.state;
                           const body = {
                              email,
                              password,
                              phone_number,
                           };
                           axios
                              .post(`${process.env.REACT_APP_HOST}/auth/register`, body)
                              .then((result) => {
                                 console.log(result.data.data.msg);
                                 this.setState({
                                    isSuccess: true,
                                    successMsg: result.data.data.msg,
                                 });
                              })
                              .catch((error) => {
                                 console.log(error.response.data.err.msg);
                                 this.setState({
                                    isSuccess: false,
                                    errorMsg: error.response.data.err.msg,
                                 });
                              });
                        }}
                     >
                        Sign Up
                     </div>
                     <button className="sign-up-google" type="submit">
                        <img
                           src="https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1653868800&Signature=Vg4eVgXJlLpzHb~l-hmau-AYqNsNjLgu6zHcNh2aKvADQqJOjAgBZy-jdvhP8FYt-8iZp7k2YbFNpo9mWd-e4HA~fKtfLAm5PAxAp1s-tEdZ~KnNWUHawtISfzXvkxdwIb-f-nPxZ8ggwfFrx2qB1LU1EXpyCnOgfOh~Z~pbkdgsz-8kszhk8DNcvZcFr88UGJI0Xxh6z2m0wdq1EcYrw~WIqxCCOjO~Hg4uAVt2jjjWIKZ0wGFIJUBKQFWOq1xLVYY1V0vrmRU5l3KQTuSQsd654NL5qR1kmV4rdl0YXBaEsNlTxfhnG1HZup~BwHyZt28PxSGBobSNMNxp6QeVGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                           alt=""
                           className="img-google"
                        />{' '}
                        Sign up with Google
                     </button>
                     <section className="has-account">
                        <div className="underline"></div>
                        <p className="has-account-text">Already have an account?</p>
                        <div className="underline"></div>
                     </section>
                     <Link to={'/login'}>
                        <button className="login" type="submit">
                           Login Here
                        </button>
                     </Link>
                  </form>
                  <SecondFooter />
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                        <div class="modal-content">
                           <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                 {this.state.isSuccess ? (
                                    <p className="text-warning">
                                       {this.state.successMsg}
                                       {'!'}
                                    </p>
                                 ) : (
                                    <p className="text-danger">{this.state.errorMsg}</p>
                                 )}
                              </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                 Close
                              </button>
                              {this.state.isSuccess ? (
                                 <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                       this.setState({
                                          isRegister: true,
                                       });
                                    }}
                                 >
                                    Oke
                                 </button>
                              ) : null}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </section>
         </>
      );
   }
}
