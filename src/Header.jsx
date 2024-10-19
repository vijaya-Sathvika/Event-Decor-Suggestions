import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKSgDrXGCXUJB2i7WUSaG4gH6vcOruJVEtGDCE6tKmoM9T_pFketlLuYasSQMb27t-c0&usqp=CAU" 
            alt="Logo" 
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search flowers, cakes, gifts, etc." />
          <button className="search-button">Search</button>
        </div>

      {/* Icon Section */}
      <div className="icons">
          <div className="pin">
            <img
              src="https://illustoon.com/photo/12199.png"
              alt="Pin Icon"
            />
            <span>Pin</span>
          </div>
          <div className="login">
            <img
              src="https://t3.ftcdn.net/jpg/02/61/90/28/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg"
              alt="Login Icon"
            />
            <span>Login</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;