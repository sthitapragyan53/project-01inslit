import React from "react";
import "./DeliverySection.css";
import salad from "../../assets/salad.jpg";
import fries from "../../assets/fries.jpg";

const DeliverySection = () => {
  return (
    <section className="delivery">
      {/* Left images area */}
      <div className="delivery-images">
        <div className="food-card card1">
          <img src={salad} alt="salad" />
        </div>
        <div className="food-card card2">
          <img src={fries} alt="fries" />
        </div>
        <div className="arrow-path">🛵</div>
      </div>

      {/* Right text area */}
      <div className="delivery-text">
        <h2>
          We deliver food within <br />
          <span>30 min</span>
        </h2>
        <p>
          Need a fast, reliable dinner solution? Look no further. Foodii 🥗 is built
          around the ultimate convenience: food delivery in 30 minutes. From the
          moment you click 'order' to the minute your doorbell rings, we handle
          the rush. This isn't just a goal; it's our guarantee, backed by a
          sophisticated logistics system that ensures your meal is prepared
          quickly and takes the fastest route to you. When the craving hits, you
          can trust us to deliver speed, quality, and peace of mind.
        </p>

        <div className="delivery-buttons">
          <button className="order-btn">Order Now</button>
          <button className="download-btn">Download App</button>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
