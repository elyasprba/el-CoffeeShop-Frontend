import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SecondFooter from '../../components/SecondFooter';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, resetLogin } from '../../Redux/actionCreator/login';
import { Eye, EyeSlashFill } from 'react-bootstrap-icons';
import { Button, Modal } from 'react-bootstrap';

import 'bootstrap';
import './Login.css';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPass, setShowPass] = useState(false);
   const [show, setShow] = useState(false);
   const { isLoading, err, isSuccess } = useSelector((state) => state.userLogin);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const login = (event) => {
      event.preventDefault();
      const body = {
         email,
         password,
      };
      dispatch(loginAction(body));
   };

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   if (isSuccess) {
      navigate('/');
      dispatch(resetLogin());
   }

   document.title = 'Login';
   return (
      <>
         <div className="container-login">
            <aside className="side-content-login">
               <header className="side-header-login">
                  <img src={require('../../assets/bg-login.png')} alt="background-login" className="background-login" />
               </header>
            </aside>
            <div className="main-containerlogin">
               <header className="main-header-login">
                  <div className="main-header-name-login">
                     <Link to="/">
                        <img src={require('../../assets/coffee-1.png')} alt="coffee-logo" />
                     </Link>
                     <p className="name-logo-login">el-CoffeeShop</p>
                  </div>
                  <div>
                     <p className="main-header-title-login">Login</p>
                  </div>
               </header>
               <form className="register-form-login">
                  <label for="email">Email Address :</label>
                  <input
                     type="text"
                     id="email"
                     placeholder="Enter your email address"
                     value={email}
                     onChange={(even) => {
                        setEmail(even.target.value);
                     }}
                  />
                  <label for="password">Password :</label>
                  <div className="icon-password">
                     <input
                        type={`${showPass ? 'text' : 'password'}`}
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(even) => {
                           setPassword(even.target.value);
                        }}
                     />
                     <div
                        className="icons-eye"
                        value={showPass}
                        onClick={() => {
                           setShowPass(!showPass);
                        }}
                     >
                        {showPass ? <Eye size={30} /> : <EyeSlashFill size={30} />}
                     </div>
                  </div>
                  <p className="forgot-password-login">
                     <Link to={'/forgot'} className="forgot-password-login">
                        Forgot password?
                     </Link>
                  </p>
                  {/* <Button variant="primary" onClick={handleShow}>
                     Launch demo modal
                  </Button>
                   */}
                  <div className="sign-up-button" onClick={handleShow}>
                     <button className="sign-up-login" type="submit" onClick={login}>
                        Login
                     </button>
                  </div>

                  <button className="sign-up-google-login" type="submit">
                     <img src={require('../../assets/icon/google.png')} alt="icon-google" className="img-google-login" /> Login with Google
                  </button>
                  <section className="has-account-login">
                     <div className="underline"></div>
                     <p className="has-account-text-login">Done have an account?</p>
                     <div className="underline"></div>
                  </section>
                  <Link to={'/signup'}>
                     <button className="login" type="submit">
                        Sign up here
                     </button>
                  </Link>
               </form>
               <SecondFooter />
            </div>
         </div>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header>
               <Modal.Title>
                  {isLoading ? <p>Login Success, Loading...</p> : <></>}
                  {err ? <div className="text-danger">{err}</div> : <></>}
               </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Oke
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default Login;
