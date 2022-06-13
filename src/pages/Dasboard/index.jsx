import React, { Component } from 'react';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';
import BarChart from '../../components/Dashboard/Dashboard';
import './Dashboard.css';

export default class Profile extends Component {
   render() {
      return (
         <div>
            <Header />
            <div className="container-fluid">
               <div className="row">
                  <h1 className="title-dashboard">See how your store progress so far</h1>
                  <div className="col-sm-8">
                     <div className="report-wrapper">
                        <h2>Weekly</h2>
                        <p>Last 6 days</p>
                        <BarChart />
                     </div>
                     <div className="download-report-btn">Download Report</div>
                  </div>
                  <div className="col-sm-4">
                     <div className="card user-wrapper">
                        <div className="card-header" style={{ background: 'white' }}>
                           <div className="row g-0">
                              <div className="col-sm-4">
                                 <img src={require('../../assets/image-dashboard.png')} style={{ width: '70px', marginLeft: '-30px', borderRadius: '50%' }} alt="dashboard-card"></img>
                              </div>
                              <div className="col-sm-8">
                                 <h6>Cheryn Laurent</h6>
                                 <p>Keep up the good work and spread love!</p>
                              </div>
                           </div>
                        </div>
                        <div className="card-body">
                           <h5 className="card-title">Best Staff of the Month</h5>
                           <img src={require('../../assets/dashboard-chart.png')} style={{ marginLeft: '15%', width: '75%', marginBottom: '10px', borderRadius: '50%' }} alt="dashboard-card"></img>
                           <p className="card-text" style={{ textAlign: 'center', color: 'rgba(124, 130, 138, 1)' }}>
                              Achieved 3.5M of total 5M 478 Customer
                           </p>
                        </div>
                     </div>
                     <div className="card gols-wrapper">
                        <div className="card-body">
                           <h2 className="" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                              Goals
                           </h2>
                           <p className="card-text" style={{ textAlign: 'center', color: 'rgba(124, 130, 138, 1)', marginBottom: '1rem' }}>
                              Your goals is still on 76%. Keep up the good work!
                           </p>
                           <img src={require('../../assets/dashboard-chart2.png')} style={{ marginLeft: '15%', width: '75%', marginBottom: '10px', borderRadius: '50%' }} alt="dashboard-card"></img>
                        </div>
                     </div>
                     <div className="share-report-btn">Share Report</div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      );
   }
}
