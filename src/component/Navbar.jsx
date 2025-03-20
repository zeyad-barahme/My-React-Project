import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import './Style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>FickleFlight</h1>
      </div>
      <div className="menu">
        <a href="#" className="link explore" >Explore</a>
        <a href="#" className="link">Search</a>
        <a href="#" className="link">Hotels</a>
        <a href="#" className="link">Offers</a>
      </div>
      <div className="icons">
        <FaBell className="icon" />
        <FaUserCircle className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
