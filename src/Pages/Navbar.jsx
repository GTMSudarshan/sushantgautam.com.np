import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaHome, FaUser, FaFileAlt, FaTools, FaBrain } from 'react-icons/fa';
import './Navbar.css';
import profile from '../profile.jpg';
function Navbar() {
  const [year] = useState(new Date().getFullYear());
  
  return (
    <div className='mainnavdiv'>
    <header className="header">
     <div className='main-div'>
      <img src={profile} alt="profile" className="profile-picture" />
      <h1 className='heading'>Sudarshan Gautam</h1>
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
          <a href="#">
            <FaHome className="navbar-icon" /> Home
            </a>
          </li>
          <li className="navbar-item">
          <a href="#">           
          <FaUser className="navbar-icon" /> About
            </a>
          </li>
          <li className="navbar-item">
          <a href="#">
              <FaFileAlt className="navbar-icon" /> Resume
            </a>
          </li>
          <li className="navbar-item">
          <a href="#">
              <FaTools className="navbar-icon" /> Services
            </a>
          </li>
          <li className="navbar-item">
          <a href="#">
              <FaBrain className="navbar-icon" /> Skills
            </a>
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
