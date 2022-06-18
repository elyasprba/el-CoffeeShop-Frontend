import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapStateWithProps from '../../helper/mapStateWithProps';
import './Header.css';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         token: this.props.userInfo.token,
         isSearch: true,
      };
   }

   render() {
      // console.log(this.state.profile);
      return (
         <>
            {this.state.token ? (
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
                        {this.state.isSearch ? (
                           <img
                              src={require('../../assets/icon/search.png')}
                              alt="search-img"
                              onClick={() => {
                                 this.setState({
                                    isSearch: false,
                                 });
                              }}
                           />
                        ) : (
                           <input type="text" id="header-search" name="search" className="header-search" placeholder="Search" style={{ borderRadius: '30px', width: '50%', height: '15px' }} />
                        )}
                     </div>
                     <div class="message">
                        <div class="messageCount">1</div>
                        <img src={require('../../assets/icon/chat.png')} alt="chat-img" />
                     </div>
                     <div class="profil">
                        <Link to="/profile">
                           <img src={this.props.userInfo.payload.pict} alt="user-img" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
                        </Link>
                     </div>
                  </div>
               </aside>
            ) : (
               <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-4">
                     <div className="container-fluid">
                        <img src={require('../../assets/coffee-1.png')} alt="img-icon" width="30" height="30" />
                        <Link className="navbar-brand fw-bold px-3" to="/">
                           el-Coffee Shop
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offset-2 collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                 <Link className="nav-link" to="/">
                                    Home
                                 </Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/product">
                                    Product
                                 </Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/payment">
                                    Your Cart
                                 </Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to="/history">
                                    History
                                 </Link>
                              </li>
                           </ul>
                           <form className="d-flex">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold px-3">
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                       Login
                                    </Link>
                                 </li>
                              </ul>
                              <button className="btn-signup" type="submit">
                                 <Link to="/signup">Sign Up</Link>
                              </button>
                           </form>
                        </div>
                     </div>
                  </nav>
               </div>
            )}
         </>
      );
   }
}

export default connect(mapStateWithProps)(Header);
