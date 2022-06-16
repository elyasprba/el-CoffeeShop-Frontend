import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import Default from '../../assets/icon/default-profile.jpg';
import './Profile.css';
import { connect } from 'react-redux';
import mapStateWithProps from '../../helper/mapStateWithProps';
import { logoutAction } from '../../Redux/actionCreator/login';

class Profile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         token: this.props.userInfo.token,
         profile: {},
         email: '',
         display_name: '',
         first_name: '',
         last_name: '',
         phone_number: '',
         address: '',
         gender: '',
         birthday_date: '',
         pict: '',
         image_src: Default,
         use_src: true,
         isLogin: true,
         isUpdate: false,
         isEdit: false,
      };
      this.inputFile = React.createRef();
   }

   logoutHandler() {
      const { logoutAction } = this.props;
      logoutAction();
   }

   setData = () => {
      let body = new FormData();
      if (this.state.email !== '') {
         body.append('email', this.state.email);
      }
      if (this.state.pict !== '') {
         body.append('pict', this.state.pict);
      }
      if (this.state.address !== '') {
         body.append('address', this.state.address);
      }
      if (this.state.display_name !== '') {
         body.append('display_name', this.state.display_name);
      }
      if (this.state.first_name !== '') {
         body.append('first_name', this.state.first_name);
      }
      if (this.state.last_name !== '') {
         body.append('last_name', this.state.last_name);
      }
      if (this.state.phone_number !== '') {
         body.append('phone_number', this.state.phone_number);
      }
      if (this.state.birthday_date !== '') {
         body.append('birthday_date', this.state.birthday_date);
      }
      // if (this.state.gender !== "") {
      //     body.append("gender", this.state.gender);
      // }
      return body;
   };

   fileChange = (event) => {
      event.preventDefault();
      const file = event.target.files[0];
      const profile = { ...this.state };
      if (file) {
         profile.pict = file;
         this.setState(profile);
         const reader = new FileReader();
         reader.onload = () => {
            this.setState({ image_src: reader.result, use_src: false, pict: file }, () => {
               //console.log(this.state.image_src);
            });
         };
         reader.readAsDataURL(file);
      }
   };

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
            this.setState({
               getBirthday: this.state.profile.birthday_date,
            });
         })
         .catch((error) => console.log(error));
   }

   componentDidUpdate() {
      if (this.state.isUpdate) {
         const config = { headers: { Authorization: `Bearer ${this.state.token}` } };
         axios
            .get(`${process.env.REACT_APP_HOST}/users/profile-detail`, config)
            .then((result) => {
               this.setState({
                  profile: result.data.data[0],
               });
               this.setState({
                  getBirthday: this.state.profile.birthday_date,
               });
            })
            .catch((error) => console.log(error));
      }
   }

   handleFile = (event) => {
      this.inputFile.current.click();
      event.preventDefault();
   };

   render() {
      document.title = 'Profile';
      return (
         <>
            <Header />
            <main className="profile-main-container">
               <h2 className="profile-user">User Profile</h2>
               <div className="profile-container">
                  <div className="profile-info">
                     <div className="profile">
                        <img src={this.state.image_src ? this.state.image_src : `http://localhost:8000${this.state.profile.pict}`} className="img-profile" alt="img-profile" />
                        <div className="profile-username">
                           <h3>{this.state.profile.display_name ? this.state.profile.display_name : 'Display Name'}</h3>
                           <p>{this.state.profile.email}</p>
                        </div>
                     </div>
                     <form>
                        <div className="profile-button">
                           <input type="file" hidden name="image" ref={this.inputFile} onChange={this.fileChange} />
                           <button type="button" className="choose-photo" onClick={this.handleFile}>
                              Choose Photo
                           </button>
                           {/* <button className="choose-photo" type="submit">
                              Choose photo
                           </button> */}
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
                                 const body = this.setData();
                                 const config = { headers: { Authorization: `Bearer ${this.state.token}`, 'content-type': 'multipart/form-data' } };
                                 axios
                                    .patch(`${process.env.REACT_APP_HOST}/users`, body, config)
                                    .then((result) => {
                                       console.log(result);
                                       this.setState({
                                          isUpdate: true,
                                       });
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
                                    this.logoutHandler();
                                 }}
                              >
                                 Log Out
                              </Link>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="profile-detail">
                     <div
                        className="edit-bullet"
                        onClick={() => {
                           this.state.isEdit
                              ? this.setState({
                                   isEdit: false,
                                })
                              : this.setState({
                                   isEdit: true,
                                });
                        }}
                     >
                        <img src={require('../../assets/icon/edit.png')} alt="edit" className="edit-bullet-img" />
                     </div>
                     <div className="contacts">
                        <h3>Contacts</h3>

                        <form className="form-contacts-profile">
                           <div className="from-email-adress-profile">
                              <label htmlFor="email">Email adress :</label>
                              <input
                                 type="email"
                                 id="email"
                                 placeholder="Enter your email"
                                 value={this.state.isEdit ? null : this.state.profile.email}
                                 disabled={this.state.isEdit ? false : true}
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
                                 placeholder="Enter email address"
                                 value={this.state.isEdit ? null : this.state.profile.address}
                                 disabled={this.state.isEdit ? false : true}
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
                                 placeholder="Enter mobile number"
                                 value={this.state.isEdit ? null : this.state.profile.phone_number}
                                 disabled={this.state.isEdit ? false : true}
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
                                 placeholder="name"
                                 value={this.state.isEdit ? null : this.state.profile.display_name}
                                 disabled={this.state.isEdit ? false : true}
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
                                 placeholder="first name"
                                 value={this.state.isEdit ? null : this.state.profile.first_name}
                                 disabled={this.state.isEdit ? false : true}
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
                                 placeholder="last"
                                 value={this.state.isEdit ? null : this.state.profile.last_name}
                                 disabled={this.state.isEdit ? false : true}
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
                                 placeholder="birthday-date"
                                 value={this.state.isEdit ? null : this.state.profile.birthday_date}
                                 disabled={this.state.isEdit ? false : true}
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

export default connect(mapStateWithProps, { logoutAction })(Profile);
