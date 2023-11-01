import React, { useState } from 'react';
import '../css/About.css';
import SmallerCard from '../components/SmallerCard';
import profileImage from '../images/profile.jpeg';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
  const githubProfile = 'https://github.com/Amrutha5081';
  const linkedinProfile = 'https://www.linkedin.com/in/amrutha-harshan-149aa2183/';

  const [contactHovered, setContactHovered] = useState(false);

  const openContactModal = () => {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
    setContactHovered(true);
  };

  const closeContactModal = () => {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    setContactHovered(false);
  };

  return (
    <div className="about-container">
      <div className="about-card bigger-card">
        <div className="bigger-card-image">
          <img src={profileImage} alt="About" />
        </div>
        <div className="bigger-card-info" style={{ color: 'black', position: 'relative', top: '225px' }}>
          <h1>Amrutha KH</h1>
          <p>Software Dev | Relentless Nerd</p>
        </div>
        <div className="bigger-card-icons" style={{ position: 'relative', color: 'black', top: '237px' }}>
          <a href={linkedinProfile} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
          </a>
          <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />
          </a>
          <FontAwesomeIcon icon={faFutbol} style={{ marginRight: '10px' }} />
          <FontAwesomeIcon icon={faSpotify} style={{ marginRight: '10px' }} />
          <FontAwesomeIcon icon={faStackOverflow} />
        </div>

        <div className="bigger-card-footer">
          <div className="footer-left">DOWNLOAD CV</div>
          <div className="footer-right">
            <span
              className={`contact-button ${contactHovered ? 'hovered' : ''}`}
              onClick={openContactModal}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
            >
              CONTACT ME
            </span>
          </div>
        </div>
      </div>
      <div id="contactModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeContactModal}>
            &times;
          </span>
          <p style={{ color: 'black', textAlign: 'center', border: '1px solid black', padding: '20px', borderRadius: '5px' }}>
            Hi, don't Be a Stranger, let's catch up. You can reach me at{' '}
            <a href="mailto:amruthaharshan.work@gmail.com">amruthaharshan.work@gmail.com</a> /{' '}
            <a href="tel:+9900581765">9900581765</a>
          </p>
        </div>
      </div>

      <SmallerCard />
    </div>
  );
}

export default About;
