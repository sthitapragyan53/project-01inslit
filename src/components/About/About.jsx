import React from 'react';
import './About.css';
// Assume you have an image for your profile or brand
import User from '../../assets/User.png'; 

const AboutMePage = () => {
  return (
    <div className="about-page" data-aos="fade-in">
      
      {/* Header Section - Fades down quickly */}
      <div className="about-header" data-aos="fade-down">
        <p className="subtitle">GET TO KNOW US</p>
        <h2>Driven by Passion, Focused on Quality.</h2>
      </div>

      {/* Content Section - The main two-column animation */}
      <div className="about-content">
        
        {/* Left Column: Text - Slides in from the left */}
        <div className="about-text-column" data-aos="fade-right">
          <h3>Our Journey</h3>
          <p>
            Established in 2015, our mission has always been simple: to deliver exceptional digital experiences tailored to our clients' unique goals. What started as a small, passionate team has grown into a full-service agency, but our dedication to **craftsmanship and client satisfaction** remains our core focus.
          </p>
          
          <h3>What We Do</h3>
          <p>
            We specialize in developing high-performance web applications using modern stacks like **React, Node.js, and MongoDB**. From conceptual design and robust API development to scalable deployment, we handle the entire process. We believe technology should be an asset, not a hurdle.
          </p>
          
          {/* Stats Block - Fades up separately after the text */}
          <div className="about-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <p className="stat-label">Client Retention</p>
            </div>
          </div>
          
        </div>
        
        {/* Right Column: Image - Slides in from the right */}
        <div className="about-image-column" data-aos="fade-left">
          <img src={User} alt="Our Team / Profile" className="profile-img" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutMePage;