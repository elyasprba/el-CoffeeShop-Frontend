import React, { Component } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import SecondFooter from '../../components/SecondFooter';
import 'bootstrap';
import './Signup.css';
import { Eye, EyeSlashFill } from 'react-bootstrap-icons';

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
         errorMsg: 'Failed Registration',
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
                     <img src={require('../../assets/bg-login.png')} alt="background-signup" className="background-signup" />
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
                     <div className="icon-password">
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
                        <div
                           className="icons-eye"
                           onClick={() => {
                              this.setState({
                                 isPasswordShown: !this.state.isPasswordShown,
                              });
                           }}
                        >
                           {this.state.isPasswordShown ? <Eye size={30} /> : <EyeSlashFill size={30} />}
                        </div>
                     </div>
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
                                 // console.log(result.data.msg);
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
                        <img src={require('../../assets/icon/google.png')} alt="icon-google" className="img-google" /> Sign up with Google
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
                                 {this.state.isSuccess ? <p className="text-primary">{this.state.successMsg}</p> : <p className="text-danger">{this.state.errorMsg}</p>}
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
