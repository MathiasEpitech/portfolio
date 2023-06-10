import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoM from '../../assets/images/logo-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="nav-bar navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo">
        <Link to="/">
          <img src={LogoM} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/"
              data-text="HOME"
            >
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/about"
              data-text="ABOUT"
            >
              <FontAwesomeIcon icon={faUser} color="#000000" />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/contact"
              data-text="CONTACT"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
