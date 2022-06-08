import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import SecondFooter from '../../components/SecondFooter';
import 'bootstrap';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const login = (event) => {
      event.preventDefault();
      const body = {
         email,
         password,
      };
      axios
         .post(`${process.env.REACT_APP_HOST}/auth/`, body)
         .then((result) => {
            console.log(result);
            alert(result.data.data.msg);
            localStorage.setItem('token', result.data.data.token);
            navigate('/');
         })
         .catch((error) => {
            console.log(error);
            alert(error.response.data.err.msg);
         });
   };

   document.title = 'Login';
   return (
      <>
         <div className="container-login">
            <aside className="side-content-login">
               <header className="side-header-login">
                  <img
                     src="https://s3-alpha-sig.figma.com/img/94cf/d4df/dd22d129a5bbab44da4da62471dafa2a?Expires=1655683200&Signature=g~uQOPz~NhQcU0zA3WxEQpfJ3hbzifq-A6DDFo2qE4oYvApLtSP5Eh5ElOskIRBvhno4pTi7BkqasaJKS~ZKqQCMK0d5I2tVvEHzI6Ud-lyiJ8ozqBUzDAQp~YJ~~dx5tFSiEVWtCfcOwrbFd5f8uizu8msy6jFZVTvulm20J5DSxZhNiGSCX-paYuRFMgPiXfxQtzjy5PXCHl8B0Qi8BO-9tkuDIggkTs37ErTO9naYzrH2WKMeTVEg3Lls2ZFEtT3JCKNcTnhjcLtGlLuUkcOxkPkEmg8fpNaLjEgwJRac7Cd9oyep01rJ9Baf~C7qcVUr0YLbdci-aGy~ZVJ0dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                     alt="background-login"
                     className="background-login"
                  />
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
                  <input
                     type="password"
                     id="password"
                     placeholder="Enter your password"
                     value={password}
                     onChange={(even) => {
                        setPassword(even.target.value);
                     }}
                  />
                  <p className="forgot-password-login">Forgot password?</p>
                  <button className="sign-up-login" type="submit" onClick={login}>
                     Login
                  </button>
                  <button className="sign-up-google-login" type="submit">
                     <img
                        src="https://s3-alpha-sig.figma.com/img/f881/84c6/8dee88f348660b174d22c163e0848498?Expires=1653868800&Signature=Vg4eVgXJlLpzHb~l-hmau-AYqNsNjLgu6zHcNh2aKvADQqJOjAgBZy-jdvhP8FYt-8iZp7k2YbFNpo9mWd-e4HA~fKtfLAm5PAxAp1s-tEdZ~KnNWUHawtISfzXvkxdwIb-f-nPxZ8ggwfFrx2qB1LU1EXpyCnOgfOh~Z~pbkdgsz-8kszhk8DNcvZcFr88UGJI0Xxh6z2m0wdq1EcYrw~WIqxCCOjO~Hg4uAVt2jjjWIKZ0wGFIJUBKQFWOq1xLVYY1V0vrmRU5l3KQTuSQsd654NL5qR1kmV4rdl0YXBaEsNlTxfhnG1HZup~BwHyZt28PxSGBobSNMNxp6QeVGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                        className="img-google-login"
                     />{' '}
                     Login with Google
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
      </>
   );
};

export default Login;
