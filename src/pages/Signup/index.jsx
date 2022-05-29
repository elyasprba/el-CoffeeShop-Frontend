import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Signup.css';

export default class Signup extends Component {
   constructor() {
      super();
      this.state = {
         email: '',
         password: '',
         phone_number: '',
         isSuccess: false,
      };
   }

   render() {
      if (this.state.isSuccess) {
         return <Navigate to="/login" />;
      }
      return (
         <>
            <section className="container-sign">
               <aside className="side-content">
                  <header className="side-header">
                     <img
                        src="https://s3-alpha-sig.figma.com/img/94cf/d4df/dd22d129a5bbab44da4da62471dafa2a?Expires=1653868800&Signature=JNrt7OkAJeXRlGW2SiJF9xambBFW4NyERnvxOioWUEFKwHRUut9MiHG0yUe6wV8pPUbmd5fbxLkaUSAvqPRU4Q7rr1WuLFWZLjWbKTuKhKQF14ZIQSQq4fZ9lDxzur1q-4-CsW0AK1bl36zCLD40NCMXhA-CyO2eBUWuJvAmV-jcOfnkKK5JArBDhH8~OYfRgGiso2n8YzIFsSv1qwVuCiiBQclfIUr0ZwpV~NDKs1Wo7vgeJSF46UZyCoAok~cS7P7C2dySlylTFELBGWV6Eh4xM~TG5UfHcn0VW1N1Ww5dt5KHm4RJsUonlKI19ZyngFslCc5Psg6CZpXoEKQpeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="background-signup"
                        className="background-signup"
                     />
                  </header>
               </aside>
               <section className="main-container-sign">
                  <header className="main-header">
                     <div className="main-header-name">
                        <a href="../home/index.html">
                           <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" />
                        </a>
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
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={(e) => {
                           this.setState({
                              password: e.target.value,
                           });
                        }}
                     />
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
                        onClick={(e) => {
                           e.preventDefault();
                           const { email, password, phone_number } = this.state;
                           const body = {
                              email,
                              password,
                              phone_number,
                           };
                           axios
                              .post('http://localhost:8080/auth/register', body)
                              .then((result) => {
                                 alert(result.data.data.msg);
                                 this.setState({
                                    isSuccess: true,
                                 });
                              })
                              .catch((error) => {
                                 alert(error.response.data.msg);
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
                        />
                        Sign up with Google
                     </button>
                     <section className="has-account">
                        <div className="underline"></div>
                        <p className="has-account-text">Already have an account?</p>
                        <div className="underline"></div>
                     </section>
                     <button className="login" type="submit">
                        Login Here
                     </button>
                  </form>
                  <footer className="footer-signup" id="footer-bg">
                     <div className="footer-content-signup">
                        <div className="footer-info-signup">
                           <div className="main-header-name">
                              <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" />
                              <p className="name-logo">el-CoffeeShop</p>
                           </div>
                           <p className="description">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                           <div className="sosmed-img">
                              <img src={require('../../assets/sosmed/fb-img.png')} alt="fb-img" />
                              <img src={require('../../assets/sosmed/twitter-img.png')} alt="twitter-img" />
                              <img src={require('../../assets/sosmed/ig-img.png')} alt="ig-img" />
                           </div>
                           <p className="copy-right">@2020el-CoffeeShop</p>
                        </div>
                        <div className="product-info">
                           <p className="product-title">Product</p>
                           <div className="product-detail-info">
                              <div className="footer-info-sign">
                                 <p className="product-detail">Download</p>
                                 <p className="product-detail">Location</p>
                                 <p className="product-detail">Blog</p>
                              </div>
                              <div className="footer-info-sign">
                                 <p className="product-detail">Pricing</p>
                                 <p className="product-detail">Countries</p>
                              </div>
                           </div>
                           <p className="title-info">Engage</p>
                           <div className="engage-title">
                              <div className="footer-info-sign">
                                 <p className="engage-detail">Coffe Shop ?</p>
                                 <p className="engage-detail">FAQ</p>
                                 <p className="engage-detail">Terms of Service</p>
                              </div>
                              <div className="footer-info-sign">
                                 <p className="engage-detail">About Us</p>
                                 <p className="engage-detail">Privacy Police</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </footer>
               </section>
            </section>
         </>
      );
   }
}
