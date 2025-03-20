import React from "react";
import "./Style/HeroSearch.css";
import HeroImage from "../assets/hero-image.jpg";
import RecentSearch from './RecentSearch';
import PrepareForTrip from './PrepareForTrip';
import PopularDestinations from './PopularDestinations';
import RecommendedHolidays from './RecommendedHolidays';
import PopularStays from './PopularStays';
import NewsletterSection from './NewsletterSection';

const HeroSearch = () => {
  return (
    <div>
      <div className="hero-search-section">
        <img src={HeroImage} alt="Travel Banner" className="hero-background-img" />
        <div className="hero-overlay">
          <h1 className="hero-main-title">Let's explore & travel the world</h1>
          <p className="hero-subtitle">
            Find the best destinations and the most popular stays!
          </p>
          <div className="hero-search-box">
            <div className="hero-search-header">
              <div className="hero-search-label">SEARCH FLIGHTS</div>
              <div className="hero-trip-options">
                <label>
                  <input type="radio" name="trip" value="return" /> Return
                </label>
                <label>
                  <input type="radio" name="trip" value="one-way" /> One Way
                </label>
              </div>
            </div>
            <div className="hero-search-fields">
              <input type="text" placeholder="Departure" />
              <input type="text" placeholder="Arrival" />
              <input type="date" />
              <button>SEARCH FLIGHTS</button>
            </div>
          </div>
        </div>
      </div>
      <RecentSearch />
      <PrepareForTrip />
      <PopularDestinations />
      <RecommendedHolidays />
      <PopularStays />
      <NewsletterSection />
    </div>
  );
};

export default HeroSearch;
