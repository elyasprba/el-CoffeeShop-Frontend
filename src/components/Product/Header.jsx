import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
   render() {
      return (
         <>
            <aside class="row header">
               <div class="col-sm-3 logo">
                  <img src={require('../../assets/coffee-1.png')} alt="logo-img" />
                  <h2>el-Coffee Shop</h2>
               </div>
               <div class="col-sm-6 navigasi">
                  <li className="nav-item">
                     <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/product">Product</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/payment">Your Chart</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/history">History</Link>
                  </li>
               </div>
               <div class="col-sm-3 auth">
                  <div class="searchIcon">
                     <img src={require('../../assets/icon/search.png')} alt="search-img" />
                  </div>
                  <div class="message">
                     <div class="messageCount">1</div>
                     <img src={require('../../assets/icon/chat.png')} alt="chat-img" />
                  </div>
                  <div class="profil">
                     <Link to="/profile">
                        <img src={require('../../assets/profile-user.png')} alt="user-img" />
                     </Link>
                  </div>
               </div>
            </aside>
         </>
      );
   }
}
