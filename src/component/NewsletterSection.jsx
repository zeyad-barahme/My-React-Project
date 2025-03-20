import React from 'react';
import './Style/NewsletterSection.css';
import footerBackground from '../assets/footerBackground.jpg';
import Footer from './Footer';

const NewsletterSection = () => {
  return (
    <div>
      <div className="image-container">
        <img src={footerBackground} alt="صورة رائعة" />
        <div className="content">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <h2>Get weekly updates</h2>
          <div className="subscribe-box">
            <div className="box-title">Fill in your details to join the party!</div>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <div className="clearfix">
              <button className="submit-btn">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsletterSection;
