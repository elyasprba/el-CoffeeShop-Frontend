import React, { Component } from 'react';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';

import './Home.css';

class Home extends Component {
   render() {
      document.title = 'Home';
      return (
         <>
            <Header />
            <main>
               <div className="bg-image">
                  <div className="container">
                     <div className="px-4 py-4">
                        <div className="col-lg-12">
                           <div className="p-5 p-md-5 mb-5 text-white rounded">
                              <div className="col-md-6 px-0">
                                 <h4 className="start-your">Start Your Day with Coffee and Good Meals</h4>
                                 <p className="pt-3 pb-4">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                                 <button className="btn-start" type="submit">
                                    Get Started
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="info row">
                  <div className="staf col">
                     <img src={require('../../assets/icon/Rectangle 270.png')} width="50px" height="50px" alt="icon-1" />
                     <div className="mx-5">
                        <p className="info-number">90+</p>
                        <p className="info-detail">Staff</p>
                     </div>
                  </div>
                  <div className="store col">
                     <img src={require('../../assets/icon/Rectangle 271.png')} width="50px" height="50px" alt="icon-2" />
                     <div className="mx-5">
                        <p className="info-number">30+</p>
                        <p className="info-detail">Store</p>
                     </div>
                  </div>
                  <div className="customers col">
                     <img src={require('../../assets/icon/Rectangle 271.png')} width="50px" height="50px" alt="icon-3" />
                     <div className="mx-5">
                        <p className="info-number">80+</p>
                        <p className="info-detail">Customers</p>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <div className="main-teamwork p-5">
                     <div className="left-team">
                        <img src={require('../../assets/team-work.png')} alt="img-team-work" />
                     </div>
                     <div className="right-team m-5">
                        <h1>We Provide Good Coffee and Healthy Meals</h1>
                        <p className="mt-4 mb-4">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <div className="list-right-team">
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-img" />
                              High quality beans
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-img" />
                              Healthy meals, you can request the ingredients
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-img" />
                              Chat with our staff to get better experience for ordering
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-img" />
                              Free member card with a minimum purchase of IDR 200.000.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="favorite">
                  <h1 className="custom-favorite-title">Here is People's Favorite</h1>
                  <p className="fav-description">Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
                  <div className="custom-favorite-menu row">
                     <div className="card-fav col">
                        <div className="fav-picture">
                           <img src={require('../../assets/products/hazelnut.png')} alt="hazelnut-latte" className="hazelnut-latte-img" />
                        </div>
                        <h1 className="title-fav">Hazelnut Latte</h1>
                        <div className="fav-list">
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Hazelnut Syrup
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Vanilla Whipped Cream
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Ice / Hot
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Sliced Banana on Top
                           </p>
                        </div>
                        <p className="fav-price">IDR 25.000</p>
                        <button className="btn-favorite">Order Now</button>
                     </div>
                     <div className="card-fav col">
                        <div className="fav-picture">
                           <img src={require('../../assets/products/drum.png')} alt="img-products" className="pinky-promise-pict" />
                        </div>
                        <h1 className="title-fav">Pinky Promise</h1>
                        <div className="fav-list">
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />1 Shot of Coffee
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Vanilla Whipped Cream
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Chocolate Biscuits
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Strawberry Syrup
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Sliced strawberry on Top
                           </p>
                        </div>
                        <p className="fav-price">IDR 30.000</p>
                        <button className="btn-favorite">Select</button>
                     </div>
                     <div className="card-fav col">
                        <div className="fav-picture">
                           <img src={require('../../assets/products/veggie.png')} alt="chicken-wings" className="chicken-wings-pict" />
                        </div>
                        <h1 className="title-fav">Chicken Wings</h1>
                        <div className="fav-list">
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Wings
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Drum Sticks
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Mayonaise and Lemon
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Hot Fried
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Secret Recipe
                           </p>
                           <p>
                              <img src={require('../../assets/icon/ceklis.png')} alt="ceklis-icon-fav" />
                              Buy 1 Get 1 only for Dine in
                           </p>
                        </div>
                        <p className="fav-price">IDR 40.000</p>
                        <button className="fav-button">Select</button>
                     </div>
                  </div>
               </div>
               <div className="maps-container">
                  <div className="maps-title">
                     <h2>Visit Our Store in the Spot on the Map Below</h2>
                     <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
                  </div>
                  <div className="maps-img">
                     <img src={require('../../assets/hugeGlobal.png')} alt="maps-img" />
                  </div>
               </div>
               <div className="partner">
                  <h2>Our Partner</h2>
                  <img src={require('../../assets/Sponsored.png')} alt="sponsor-img" />
               </div>
               <div className="review-container">
                  <div className="title-review">
                     <h2>Loved by Thousands of Happy Customer</h2>
                     <p>These are the stories of our customers who have visited us with great pleasure.</p>
                  </div>
                  <div className="review-list row">
                     <div className="review-list-item col">
                        <div className="review-name row">
                           <div className="col">
                              <img src={require('../../assets/review-1.png')} alt="review-img" className="review-img" />
                           </div>
                           <div className="rating col">
                              <p>
                                 4.5 <img src={require('../../assets/icon/bintang.png')} alt="start-img" />
                              </p>
                           </div>
                        </div>
                        <div className="review-desc">
                           <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                        </div>
                     </div>
                     <div className="review-list-item col">
                        <div className="review-name row">
                           <div className="col">
                              <img src={require('../../assets/review-1.png')} alt="review-img" className="review-img" />
                           </div>
                           <div className="rating col">
                              <p>
                                 4.5 <img src={require('../../assets/icon/bintang.png')} alt="start-img" />
                              </p>
                           </div>
                        </div>
                        <div className="review-desc">
                           <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                        </div>
                     </div>
                     <div className="review-list-item col">
                        <div className="review-name row">
                           <div className="col">
                              <img src={require('../../assets/review-1.png')} alt="review-img" className="review-img" />
                           </div>
                           <div className="rating col">
                              <p>
                                 4.5 <img src={require('../../assets/icon/bintang.png')} alt="start-img" />
                              </p>
                           </div>
                        </div>
                        <div className="review-desc">
                           <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="paginasi">
                  <div className="slide">
                     <img src="" alt="" />
                  </div>
                  <div className="button">
                     <img className="btn-img" src="" alt="" />
                     <img className="btn-right" src="" alt="" />
                  </div>
               </div>
               <div className="custom-promo row">
                  <div className="col custom-promo-title">
                     <h3 className="custom-promo-title-head">Check our promo today!</h3>
                     <p className="custom-promo-title-paragraph">Let's see the deals and pick yours!</p>
                  </div>
                  <div className="col custom-see-promo-button-container">
                     <div className="custom-see-promo-button">See Promo</div>
                  </div>
               </div>
            </main>
            <Footer />
         </>
      );
   }
}

export default Home;
