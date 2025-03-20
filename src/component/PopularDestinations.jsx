import React from 'react';
import './Style/PopularDestinations.css';
import Paris from '../assets/paris.jpg';
import Greece from '../assets/greece.jpg';
import Norway from '../assets/norway.jpg';
import Tuscany from '../assets/tuscany.jpg';

const PopularDestinations = () => {
  return (
    <div className="popular-destinations">
      <div className="title-container">
        <div>
          <h2 className="main-title">Plan your next trip</h2>
          <p className="sub-title">Most Popular Destinations</p>
        </div>
        <a href="#all-destinations" className="view-all">View all destinations →</a>
      </div>

      <div className="destinations-gallery">
        <div className="destination-card">
          <div className="destination-info">
            <p className="destination-title">Paris</p>
            <div>
              <p className="form">From</p>
              <p className="destination-price"> $699</p>
            </div>
          </div>
          <img src={Paris} alt="Paris" className="destination-img" />
        </div>

        <div className="destination-card">
          <div className="destination-info">
            <p className="destination-title">Greece</p>
            <div>
              <p className="form">From</p>
              <p className="destination-price"> $1079</p>
            </div>
          </div>
          <img src={Greece} alt="Greece" className="destination-img" />
        </div>

        <div className="destination-card">
          <div className="destination-info">
            <p className="destination-title">Norway</p>
            <div>
              <p className="form">From</p>
              <p className="destination-price"> $895</p>
            </div>
          </div>
          <img src={Norway} alt="Norway" className="destination-img" />
        </div>

        <div className="destination-card">
          <div className="destination-info">
            <p className="destination-title">Tuscany</p>
            <div>
              <p className="form">From</p>
              <p className="destination-price"> $1245</p>
            </div>
          </div>
          <img src={Tuscany} alt="Tuscany" className="destination-img" />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
