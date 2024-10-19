import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#Home">Home</a></li>
        <li className="navbar-item"><a href="#birthday">Birthday</a></li>
        <li className="navbar-item"><a href="#anniversary">Anniversary</a></li>
        <li className="navbar-item"><a href="#wedding">Wedding</a></li>
        <li className="navbar-item"><a href="#babyshower">Babyshower</a></li>
        <li className="navbar-item"><a href="#house warming">House warming</a></li>
        <li className="navbar-item"><a href="#festivals">Festivals</a></li>
       
      </ul>
    </nav>
  );
};

export default NavBar;