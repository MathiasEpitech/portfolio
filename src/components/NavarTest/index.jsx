import './index.scss';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,faHome, faUser, faEnvelope ,faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { NavLink , Link } from 'react-router-dom';
import './index.scss';
import LogoM from '../../assets/images/logo-black.png';


const NavbarTest= ()  => {
        const navRef = useRef();
    
        const showNavbar = () => {
            navRef.current.classList.toggle(
                "responsive_nav"
            );
        };
    
        return (
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={LogoM} alt="logo" className="img-fluid" />
                    </Link>
                </div>
                <nav ref={navRef}>
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/"
                        data-text="HOME"
                        >
                        <FontAwesomeIcon icon={faHome} color="#000000" />
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/about"
                        data-text="ABOUT"
                        >
                        <FontAwesomeIcon icon={faUser} color="#000000" />
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/project"
                        data-text="PROJECT"
                        >
                        <FontAwesomeIcon icon={faRectangleList} color="#000000" />
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        to="/contact"
                        data-text="CONTACT"
                        >
                        <FontAwesomeIcon icon={faEnvelope} color="#000000" />
                    </NavLink>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FontAwesomeIcon icon={faTimes} color="#000000" />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FontAwesomeIcon icon={faBars} color="#000" />
                </button>
            </header>
        );
    }
    

export default NavbarTest;
