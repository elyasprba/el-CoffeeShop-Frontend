import React, { Component } from 'react';

class Header extends Component {
   render() {
      return (
         <>
            <div class="container">
               <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 py-4">
                  <div class="container-fluid">
                     <img src={require('../../assets/coffee-1.png')} alt="img-icon" width="30" height="30" />
                     <a class="navbar-brand fw-bold px-3" href="./index.html">
                        el-Coffee Shop
                     </a>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="offset-2 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                              <a class="nav-link" href="./index.html">
                                 Home
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="../products/products.html">
                                 Product
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">
                                 Your Cart
                              </a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">
                                 History
                              </a>
                           </li>
                        </ul>
                        <form class="d-flex">
                           <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold px-3">
                              <li class="nav-item">
                                 <a class="nav-link" href="../login/login.html">
                                    Login
                                 </a>
                              </li>
                           </ul>
                           <button class="btn-signup" type="submit">
                              <a href="../register/sign.html">Sign Up</a>
                           </button>
                        </form>
                     </div>
                  </div>
               </nav>
            </div>
         </>
      );
   }
}

export default Header;
