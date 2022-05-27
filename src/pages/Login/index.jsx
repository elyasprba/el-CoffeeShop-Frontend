import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
   render() {
      return (
         <>
            <div className="container-login">
               <aside className="side-content-login">
                  <header className="side-header-login">
                     <img
                        src="https://s3-alpha-sig.figma.com/img/94cf/d4df/dd22d129a5bbab44da4da62471dafa2a?Expires=1653868800&Signature=JNrt7OkAJeXRlGW2SiJF9xambBFW4NyERnvxOioWUEFKwHRUut9MiHG0yUe6wV8pPUbmd5fbxLkaUSAvqPRU4Q7rr1WuLFWZLjWbKTuKhKQF14ZIQSQq4fZ9lDxzur1q-4-CsW0AK1bl36zCLD40NCMXhA-CyO2eBUWuJvAmV-jcOfnkKK5JArBDhH8~OYfRgGiso2n8YzIFsSv1qwVuCiiBQclfIUr0ZwpV~NDKs1Wo7vgeJSF46UZyCoAok~cS7P7C2dySlylTFELBGWV6Eh4xM~TG5UfHcn0VW1N1Ww5dt5KHm4RJsUonlKI19ZyngFslCc5Psg6CZpXoEKQpeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt="background-login"
                        className="background-login"
                     />
                  </header>
               </aside>
               <div className="main-containerlogin">
                  <header className="main-header-login">
                     <div className="main-header-name-login">
                        <a href="../home/index.html">
                           <img src="../assets/coffee-1.png" alt="coffee-logo" />
                        </a>
                        <p className="name-logo-login">el-CoffeeShop</p>
                     </div>
                     <div>
                        <p className="main-header-title-login">Login</p>
                     </div>
                  </header>
                  <form className="register-form-login">
                     <label for="email">Email Address :</label>
                     <input type="text" id="email" placeholder="Enter your email address" />
                     <label for="password">Password :</label>
                     <input type="password" id="password" placeholder="Enter your password" />
                     <p className="forgot-password">Forget password?</p>
                     <button className="sign-up" type="submit">
                        Login
                     </button>
                     <button className="sign-up-google" type="submit">
                        <img
                           src="https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1653868800&Signature=Vg4eVgXJlLpzHb~l-hmau-AYqNsNjLgu6zHcNh2aKvADQqJOjAgBZy-jdvhP8FYt-8iZp7k2YbFNpo9mWd-e4HA~fKtfLAm5PAxAp1s-tEdZ~KnNWUHawtISfzXvkxdwIb-f-nPxZ8ggwfFrx2qB1LU1EXpyCnOgfOh~Z~pbkdgsz-8kszhk8DNcvZcFr88UGJI0Xxh6z2m0wdq1EcYrw~WIqxCCOjO~Hg4uAVt2jjjWIKZ0wGFIJUBKQFWOq1xLVYY1V0vrmRU5l3KQTuSQsd654NL5qR1kmV4rdl0YXBaEsNlTxfhnG1HZup~BwHyZt28PxSGBobSNMNxp6QeVGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                           alt=""
                           className="img-google"
                        />
                        Login with Google
                     </button>
                     <section className="has-account-login">
                        <div className="underline"></div>
                        <p className="has-account-text-login">Done have an account?</p>
                        <div className="underline"></div>
                     </section>
                     <button className="login" type="submit">
                        Sign up here
                     </button>
                  </form>
                  <footer className="footer-login">
                     <div className="footer-content-login">
                        <div className="footer-info-login">
                           <div className="main-header-name-login">
                              <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" />
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
                           <p className="title-info-login">Engage</p>
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
               </div>
            </div>
         </>
      );
   }
}
