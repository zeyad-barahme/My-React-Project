import React from 'react';
import './style/RecentSearch.css';

const RecentSearch = () => {
  return (
    <div className="recent-search-container ">
      <h3 className="recent-title">RECENT SEARCHES</h3>
      <div className="recent-cards">

        <div className="search-card">
          <div className="route">
            <span className="code">SIN</span>

            <div className="route-line">
              <span className="circle"></span>
              <span className="dashed-line"></span>
              <span className="plane">✈</span>
              <span className="dashed-line"></span>
              <span className="circle"></span>
            </div>

            <span className="code">LAX</span>
          </div>
          <div className="depart">
            <strong>Depart On:</strong> 7 Sep 2021
          </div>
        </div>

        <div className="search-card">
          <div className="route">
            <span className="code">MY</span>

            <div className="route-line">
              <span className="circle"></span>
              <span className="dashed-line"></span>
              <span className="plane">✈</span>
              <span className="dashed-line"></span>
              <span className="circle"></span>
            </div>

            <span className="code">DUB</span>
          </div>
          <div className="depart">
            <strong>Depart On:</strong> 9 Sep 2021
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentSearch;
