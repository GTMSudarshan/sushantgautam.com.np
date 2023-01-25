import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaHome, FaUser, FaFileAlt, FaTools, FaBrain } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
import profile from '../profile.jpg';
function Navbar() {
  const [year] = useState(new Date().getFullYear());
  
  return (
    <div className='mainnavdiv'>
    <header className="header">
     <div className='main-div'>
      <img src={profile} alt="profile" className="profile-picture" />
      <h1 className='heading'><Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={490}
                  onClick={() => scroll.scrollToTop()}>
                    Sudarshan Gautam</Link></h1>
      <div className="social-icons">
        <a href="https://facebook.com" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="social-icon">
          <FaInstagram />
        </a>
      </div>
     </div>
     <div className='navbardiv'>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={490}
              >
              <FaHome className="navbar-icon" /> Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={490}
            >
              <FaUser className="navbar-icon" /> About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={490}
            >
              <FaFileAlt className="navbar-icon" /> Resume
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={490}
            >
              <FaTools className="navbar-icon" /> Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={490}
            >
              <FaBrain className="navbar-icon" /> Skills
            </Link>
          </li>
        </ul>
      </nav>
    </div>
      <div className='footerdiv'>
      <footer className="footer">
      <div className="footer-content">
        <p>Copyright ©{year}</p>
        <h6>Personal Portfolio</h6>
      </div>
    </footer>
      </div>
    </header>
    </div>
  );
}

export default Navbar;
