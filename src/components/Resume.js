import React from 'react';
import '../css/Resume.css';

function Resume() {
  // Define the file path to your resume.pdf
  const resumeFilePath = 'https://drive.google.com/file/d/1Qxw-E3q8tHR4YMPQ-zFPdVq1KMSc38NA/view?usp=sharing';

  return (
    <div className="white-card">
      <p className="description">
        I'm a passionate problem solver and technology enthusiast on a journey to make a meaningful impact in the world of software development. With a keen eye for detail and a love for elegant code, I thrive on transforming ideas into practical solutions. Let's connect and explore the possibilities of what we can create together.
      </p>
      <a href={resumeFilePath} download="resume.pdf">
        <button className="download-button">DOWNLOAD CV</button>
      </a>
    </div>
  );
}

export default Resume;
