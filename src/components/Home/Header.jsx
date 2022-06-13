import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       token: this.props.userInfo.token,
   //       is
   //    };
   // }
   render() {
      return (
         <>
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
         </>
      );
   }
}

export default Header;
