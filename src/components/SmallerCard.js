import React from 'react';
import '../css/SmallCard.css';
import musicImage from '../images/music.jpeg';
import codeImage from '../images/code.jpeg';

function SmallerCard() {
  return (
    <div className="about-card" style={{ overflowX: 'hidden', overflowY: 'auto', scrollbarWidth: 'thin' }}>
      <div className="about-me-header">
        <h2>About Me</h2>
      </div>
      <div className="about-me-content">
        <p>
        I'm a passionate technology enthusiast on a journey to make a meaningful impact in the world of software development. With a keen eye for detail for elegant code. Let's connect and explore the possibilities of what we can create together.
        </p>
      </div>
      <div className="right-boxes">
        <div className="green-box">
          <p style={{ position: 'relative', top: '5px', right: '0px' }}>Age:</p>
        </div>
        <div className="green-box1">
          <p style={{ position: 'relative', right: '5px', top: '5px' }}>Residence:</p>
        </div>
        <div className="green-box1">
          <p style={{ position: 'relative', right: '5px', top: '5px' }}>Freelance:</p>
        </div>
        <div className="green-box">
          <p style={{ position: 'relative', top: '5px' }}>Address:</p>
        </div>
      </div>
      <div className="right-text">
        <p style={{ position: 'relative', left: '40px' }}>22</p>
        <p style={{ position: 'relative', left: '28px' }}>India</p>
        <p style={{ position: 'relative', left: '5px' }}>Available</p>
        <p>Bangalore</p>
      </div>
      <div className="about-me-header">
        <h2 style={{ position: 'relative', bottom: '330px' }}>My Services</h2>
      </div>
      <div className="service-icons">
        <div className="service-icon">
          <img src={codeImage} alt="Code" />
          <div className="code-header">
            <h3>Web Development</h3>
            <p>Modern | Mobile ready</p>
          </div>
        </div>
        <div className="service-icon1">
          <img src={musicImage} alt="Music" style={{ position: 'relative', left: '150px', bottom: '700px' }} />
          <div className="music-header">
          <h4 style={{color: 'black', position: 'relative', bottom:'200px'}}>Technical Writing</h4>
          <p>Content Research | Development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallerCard;
