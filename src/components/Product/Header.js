import React, { Component } from 'react';

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
                  <li>Home</li>
                  <li>Product</li>
                  <li>Your Chart</li>
                  <li>History</li>
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
                     <a href="../profile/profile.html">
                        <img src={require('../../assets/profile-user.png')} alt="user-img" />
                     </a>
                  </div>
               </div>
            </aside>
         </>
      );
   }
}
