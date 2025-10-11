import React from "react";
import "./Home.css";
import SplitText from "../SplitText/SplitText";
import foodBowl from "../../assets/foodbowl.png";
import User from "../../assets/User.png";

// Configuration object for animation properties
const splitTextProps = {
  delay: 100,
  duration: 0.6,
  ease: "power3.out",
  splitType: "chars",
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0 },
};

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="main-text">
            <h1>
              {/* Headline Text: Uses SplitText (on-load animation, not scroll) */}
              <SplitText
                text="Enjoy Delicious"
                className="split-text-line-1"
                {...splitTextProps}
              />
              <br />
              <span className="highlight">
                <SplitText
                  text="Healthy food"
                  className="split-text-line-2"
                  delay={splitTextProps.delay + 300}
                  {...splitTextProps}
                />
              </span>
              <br />
              <SplitText
                text="Near you"
                className="split-text-line-3"
                delay={splitTextProps.delay + 600}
                {...splitTextProps}
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </h1>
          </div>
          
          {/* Subtext: Use AOS to fade in after the text is done */}
          <p 
            className="subtext"
            data-aos="fade-up" // <-- Added AOS
            data-aos-delay="1200" // Delayed to start after text animation finishes
          >
            Join with <strong>4600+ Customers</strong> and start your order right now.
          </p>

          {/* Buttons: Use AOS to slide in from the bottom */}
          <div 
            className="hero-buttons"
            data-aos="fade-up" // <-- Added AOS
            data-aos-delay="1400" // Slightly delayed after subtext
          >
            <button className="order-btn">Order Now</button>
            <button className="download-btn">Download App</button>
          </div>
        </div>
        
        {/* Hero Image Section: Use AOS to zoom or slide in the entire image block */}
        <div 
          className="hero-image"
          data-aos="zoom-in" // <-- Added AOS
          data-aos-delay="1000" // Starts around when the text animation is winding down
        >
          <div className="food-image">
            {/* The rotating-image class likely has its own CSS animation */}
            <img src={foodBowl} alt="food bowl" class="rotating-image" /> 
          </div>

          {/* Review Card: Use AOS to fly in from the right */}
          <div 
            className="review-card"
            data-aos="fade-left" // <-- Added AOS
            data-aos-delay="1600"
          >
            <img src={User} alt="user" className="user-avatar" />
            <div className="review-details">
              <p className="user-name">Sthita pragyan</p>
              <p className="user-review">Healthy Food 🌟🌟🌟🌟🌟</p>
            </div>
          </div>

          <div class="container">
            <div class="field">
              <div class="mouse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
