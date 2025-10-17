import React from "react";
import "./Home.css";
import SplitText from "../SplitText/SplitText";
import foodBowl from "../../assets/foodbowl.png";
import User from "../../assets/User.png"; // Reusing the User image for all reviews
import User1 from "../../assets/User1.png"; // Reusing the User image for all reviews
import User2 from "../../assets/User2.png"; // Reusing the User image for all reviews



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
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            Join with <strong>4600+ Customers</strong> and start your order right now.
          </p>

          {/* Buttons: Use AOS to slide in from the bottom */}
          <div 
            className="hero-buttons"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <button className="order-btn">Order Now</button>
            <button className="download-btn">Download App</button>
          </div>
        </div>
        
        {/* Hero Image Section: Use AOS to zoom or slide in the entire image block */}
        <div 
          className="hero-image"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <div className="food-image">
            <img src={foodBowl} alt="food bowl" class="rotating-image" /> 
          </div>

          {/* Corrected Class Names! */}
          
          {/* Review Card 1: Must use the exact class name from CSS */}
          <div 
            className="review-card-1" 
            data-aos="fade-left"
            data-aos-delay="1600"
          >
            <img src={User} alt="user" className="user-avatar" />
            <div className="review-details">
              <p className="user-name">Sthita</p>
              <p className="user-review">Healthy Food 🌟🌟🌟</p>
            </div>
          </div>

          {/* Review Card 2: Must use the exact class name from CSS */}
          <div 
            className="review-card-2" 
            data-aos="fade-right"
            data-aos-delay="1800"
          >
            <img src={User1} alt="user" className="user-avatar" />
            <div className="review-details">
              <p className="user-name">Subhashree</p>
              <p className="user-review">Great Taste! 😘😋</p>
            </div>
          </div>
            
          {/* Review Card 3: Must use the exact class name from CSS */}
          <div 
            className="review-card-3" 
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            <img src={User2} alt="user" className="user-avatar" />
            <div className="review-details">
              <p className="user-name">Radha.k</p>
              <p className="user-review">Fast Delivery! 😍🚀</p>
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