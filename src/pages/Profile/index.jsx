import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Product/Header';
import './Profile.css';

export default class Profile extends Component {
   render() {
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
                           <h3>Raisa Ashalina NF</h3>
                           <p>raisaanf@gmail.com</p>
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
                           <button className="save-change" type="submit">
                              Save Change
                           </button>
                           <button className="cancel" type="submit">
                              Cencel
                           </button>
                           <button className="logout" type="submit">
                              Log out
                           </button>
                        </div>
                     </form>
                  </div>
                  <div className="profile-detail">
                     <div className="contacts">
                        <h3>Contacts</h3>
                        <form className="form-contacts-profile">
                           <div className="from-email-adress-profile">
                              <label htmlFor="email">Email adress :</label>
                              <input type="email" id="email" placeholder="Enter your email adress" />
                              <label for="adres">Delivery adress :</label>
                              <input type="text" id="adress" placeholder="Enter your delivery adress" />
                           </div>
                           <div className="form-phone-profile">
                              <label for="phone">Mobile number :</label>
                              <input type="text" id="phone" placeholder="Enter your mobile number" />
                           </div>
                        </form>
                     </div>
                     <div className="details-profile">
                        <h3>Details</h3>
                        <form className="form-details">
                           <div className="form-display-first-last">
                              <label for="name">Display name :</label>
                              <input type="text" id="name" placeholder="Enter your display name" />
                              <label for="first">First name :</label>
                              <input type="text" id="first" placeholder="Enter your first name" />
                              <label for="last">Last name :</label>
                              <input type="text" id="last" placeholder="Enter your last name" />
                           </div>
                           <div className="form-date-profile">
                              <label for="date">DD/MM/YY</label>
                              <input type="date" id="last" placeholder="Enter your birthday date" />
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
