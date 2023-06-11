import React, { useState } from 'react';
import './index.scss';
import {Link}  from 'react-router-dom';
import LogoM from '../../assets/images/logo-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope ,faRectangleList } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="navbar-brand logo">
        <Link to="/">
            <img src={LogoM} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              exact 
              activeClassName="active" 
              className="nav-link" 
              href="#home-page" 
              data-text="HOME"
              >
                <FontAwesomeIcon icon={faHome} color="#000000" />
            </a>
          </li>
          <li className="nav-item">
            <a
              exact 
              activeClassName="active" 
              className="nav-link" 
              href="#about-page" 
              data-text="ABOUT"
              >
                <FontAwesomeIcon icon={faUser} color="#000000" />
            </a>
          </li>
          <li className="nav-item">
            <a
              exact 
              activeClassName="active" 
              className="nav-link" 
              href="#project" 
              data-text="PROJET"
              >
                <FontAwesomeIcon icon={faRectangleList} color="#000000" />
            </a>
          </li>
          <li className="nav-item">
            <a
              exact 
              activeClassName="active" 
              className="nav-link" 
              href="#contact-page" 
              data-text="CONTACT"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#000000" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
