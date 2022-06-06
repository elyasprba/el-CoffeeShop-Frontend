import React, { Component } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import './Profile.css';

export default class Profile extends Component {
   constructor() {
      super();
      this.state = {
         token: localStorage.getItem('token'),
         profile: [],
         email: '',
         frist_name: '',
         last_name: '',
         phone_number: '',
         address: '',
         gender: '',
         date: '',
         isLogin: true,
      };
   }

   componentDidMount() {
      if (!this.state.token) {
         this.setState({ isLogin: false });
      }
      const config = { headers: { Authorization: `Bearer ${this.state.token}` } };
      axios
         .get(`${process.env.REACT_APP_HOST}/users/profile-detail`, config)
         .then((result) => {
            this.setState({
               profile: result.data.data[0],
            });
         })
         .catch((error) => console.log(error));
   }

   render() {
      if (!this.state.isLogin) {
         return <Navigate to="/login" />;
      }
      return (
         <>
            <Header />
            <main className="profile-main-container">
               <h2 className="profile-user">User Profile</h2>
               <div className="profile-container">
                  <div className="profile-info">
                     <div className="profile">
                        <img
                           src="https://s3-alpha-sig.figma.com/img/0ccd/b210/685819c7ff9c7e2cbb23e6190ab4ef92?Expires=1653868800&Signature=LSpxevzW2psoSS2ywTNfHZh2LXnXbF1yKT7E~eT3ScYCQjGPICL-VP8wEN7ixpkAdTTHH3V~szzSNwjZH0oI31K4iPMt~nvL4fhLPF5x3BIj8j0brWq324SbMOhb7p2tlR742WH6mEHwAMIFgQXmpC3f-8Mqkjtkt8xCW~4ZiVRaVEffS8CYE9Wr1lckaLeDjXXII2kVxvEHgsjrBpVUrsoBpxcAPGCRp-IHTXdAluMexu6NL2qBWbz9WG84r4uy5YBF-1GMgajTxBX-l9mFEdswTVQ9dOgU-5xC4tg8JZFm6KASPiEEBl1qndiLQM~8JI1WYUvwJgXDMyH9JHiKVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                           alt="profile-user"
                        />
                        <div className="profile-username">
                           <h3>{this.state.profile.display_name}</h3>
                           <p>{this.state.profile.email}</p>
                        </div>
                     </div>
                     <form>
                        <div className="profile-button">
                           <button className="choose-photo" type="submit">
                              Choose photo
                           </button>
                           <button className="remove-photo" type="submit">
                              Remove photo
                           </button>
                           <button className="edit-password" type="submit">
                              Edit Password
                           </button>
                           <p>Do you want to save the change?</p>
                           <div
                              className="save-change"
                              type="submit"
                              onClick={(e) => {
                                 e.preventDefault();
                                 const { email, frist_name, last_name, phone_number, address, date } = this.state;
                                 const token = localStorage.getItem('token');
                                 const config = { headers: { Authorization: `Bearer ${token}` } };
                                 const body = {
                                    email,
                                    frist_name,
                                    last_name,
                                    phone_number,
                                    address,
                                    date,
                                 };
                                 axios
                                    .patch('http://localhost:8080/users', body, config)
                                    .then((result) => {
                                       console.log(result);
                                       alert(result.data.msg);
                                    })
                                    .catch((error) => {
                                       console.log(error);
                                    });
                              }}
                           >
                              Save Change
                           </div>
                           <button className="cancel" type="#">
                              Cencel
                           </button>
                           <div className="logout" type="submit">
                              <Link
                                 to="/"
                                 onClick={() => {
                                    localStorage.removeItem('token');
                                 }}
                              >
                                 Log Out
                              </Link>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="profile-detail">
                     <div className="contacts">
                        <h3>Contacts</h3>
                        <form className="form-contacts-profile">
                           <div className="from-email-adress-profile">
                              <label htmlFor="email">Email adress :</label>
                              <input
                                 type="email"
                                 id="email"
                                 placeholder={this.state.profile.email}
                                 value={this.state.email}
                                 onChange={(e) => {
                                    this.setState({
                                       email: e.target.value,
                                    });
                                 }}
                              />
                              <label for="adres">Delivery adress :</label>
                              <input
                                 type="text"
                                 id="adress"
                                 placeholder={this.state.profile.address}
                                 value={this.state.address}
                                 onChange={(e) => {
                                    this.setState({
                                       address: e.target.value,
                                    });
                                 }}
                              />
                           </div>
                           <div className="form-phone-profile">
                              <label for="phone">Mobile number :</label>
                              <input
                                 type="text"
                                 id="phone"
                                 placeholder={this.state.profile.phone_number}
                                 value={this.state.phone_number}
                                 onChange={(e) => {
                                    this.setState({
                                       phone_number: e.target.value,
                                    });
                                 }}
                              />
                           </div>
                        </form>
                     </div>
                     <div className="details-profile">
                        <h3>Details</h3>
                        <form className="form-details">
                           <div className="form-display-first-last">
                              <label for="name">Display name :</label>
                              <input
                                 type="text"
                                 id="name"
                                 placeholder={this.state.profile.display_name}
                                 value={this.state.display_name}
                                 onChange={(e) => {
                                    this.setState({
                                       display_name: e.target.value,
                                    });
                                 }}
                              />
                              <label for="first">First name :</label>
                              <input
                                 type="text"
                                 id="first"
                                 placeholder={this.state.profile.first_name}
                                 value={this.state.first_name}
                                 onChange={(e) => {
                                    this.setState({
                                       first_name: e.target.value,
                                    });
                                 }}
                              />
                              <label for="last">Last name :</label>
                              <input
                                 type="text"
                                 id="last"
                                 placeholder={this.state.profile.last_name}
                                 value={this.state.last_name}
                                 onChange={(e) => {
                                    this.setState({
                                       last_name: e.target.value,
                                    });
                                 }}
                              />
                           </div>
                           <div className="form-date-profile">
                              <label for="date">DD/MM/YY</label>
                              <input
                                 type="date"
                                 id="last"
                                 placeholder={this.state.profile.birthday_date}
                                 value={this.state.date}
                                 onChange={(e) => {
                                    this.setState({
                                       date: e.target.value,
                                    });
                                 }}
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </main>
            <Footer />
         </>
      );
   }
}
