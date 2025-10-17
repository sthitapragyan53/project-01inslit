import React from 'react';
import './About.css';
// Assume you have an image for your profile or brand
import cook from '../../assets/cook.jpg'; 

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
            Established in 2018, our mission remains simple: to deliver exceptional, authentic flavors inspired by cherished family tradition. What began as a small, passionate venture has grown, but our focus on culinary craftsmanship and client satisfaction is still our core 🍽️✨.
          </p>
          
          <h3>What We Do</h3>
          <p>
             We meticulously source local, high-quality ingredients to craft a menu that balances classic comfort with modern, healthy innovations. Our chefs apply time-honored techniques to every dish, ensuring consistent quality and unforgettable taste. We aim to create more than just a meal; we provide a complete, warm dining experience for our community.
          </p>
          
          {/* Stats Block - Fades up separately after the text */}
          <div className="about-stats" data-aos="fade-up" data-aos-delay="300">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <p className="stat-label">Years Experience Serving</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">350+</span>
              <p className="stat-label"> Online orderd today</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <p className="stat-label">Client satisfaction</p>
            </div>
          </div>
          
        </div>
        
        {/* Right Column: Image - Slides in from the right */}
        <div className="about-image-column" data-aos="fade-left">
          <img src={cook} alt="Our Team / Profile" className="profile-img" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutMePage;