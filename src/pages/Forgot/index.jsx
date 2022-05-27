import React, { Component } from 'react';
import './forgot.css';

export default class Forgot extends Component {
   render() {
      return (
         <div className="container-forgot">
            <img
               src="https://s3-alpha-sig.figma.com/img/245d/3c2d/d9b99b0f8bb8ff1c5992ab8bd7684491?Expires=1654473600&Signature=eisO3DYa2TxLCA7KetEpnA4MUFMhCfqHXZ2jVwUd6Eyt59rhPl6vgGE~is09dzsk7OYx~XyLWmqJ-mEGddWp3RDTUnMybtXeh6-P0cOHBFYEcRAt-bZni-HIE74YWMVvBt7S8e0CuHiwi6LMbVfK4RbcaPWOgdqE3Vz4WqTlkiIoGTAnE~zM37woSDgyqXexaWyALKBzszIaryoQV2OEpZVsrLyWZ83dKPMu9BKqcrKdHYMuj1YbS~3Mjs8g~ALuLJHA41~WKBjfii6axepcNVWg9HyKD4FI-rcvrg0DhYDtYq1djX5TQXovLDtFLrKmv0tiOQ8oQpqIRF9PytCP-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               alt=""
               width={'30px'}
            />
            <section className="main-container-forgot">
               <section className="main-forgot">
                  <header className="title-forgot">
                     <p className="info-title">Forgot your password?</p>
                     <p className="desc-title">Don’t worry, we got your back!</p>
                  </header>
                  <form action="">
                     <input type="text" id="email" placeholder="Enter your email adress to get link" />
                     <button className="send">Send</button>
                     <p>Click here if you didn’t receive any link in 2 minutes</p>
                     <p>01:52</p>
                     <button className="resend">Resend Link</button>
                  </form>
               </section>
            </section>
         </div>
      );
   }
}
