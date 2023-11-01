import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Sidebar.css';
import aboutIcon from '../images/about.png';
import resumeIcon from '../images/resume.png';
import worksIcon from '../images/works.png';
import blogIcon from '../images/blog.png';
import contactIcon from '../images/contact.png';
import menuIcon from '../images/menu.png';

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar-box small-box">
      <Link to="/" className="home-link">
      <img src={menuIcon} alt="Menu Icon" style={{ position: 'relative', width: '55px', height: '40px' }} />
      </Link>
    </div>
    <div className="sidebar-box long-box">
      <div className="element">
        <Link to="/about" className="about-link">
          <img src={aboutIcon} alt="About Icon" />
          <p>ABOUT</p>
        </Link>
      </div>
      
        <div className="element">
        <Link to="/resume" className="resume-link">
          <img src={resumeIcon} alt="Resume Icon" />
          <p style={{position:'relative', right:'35px'}}>RESUME</p>
          </Link>
        </div>
        <div className="element">
          <img src={worksIcon} alt="Works Icon" />
          <p>WORKS</p>
        </div>
        <div className="element">
          <img src={blogIcon} alt="Blog Icon" />
          <p>BLOG</p>
        </div>
        <div className="element">
          <img src={contactIcon} alt="Contact Icon" />
          <p1>CONTACT</p1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
