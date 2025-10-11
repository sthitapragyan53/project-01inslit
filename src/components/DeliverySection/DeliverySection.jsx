import React from "react";
import "./DeliverySection.css";
import salad from '../../assets/salad.jpg';
import fries from '../../assets/fries.jpg';

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
        <div className="arrow-path">✈</div>
      </div>

      {/* Right text area */}
      <div className="delivery-text">
        <h2>
          We deliver food within <br />
          <span>30 min</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet, ac
          turpis vestibulum, posuere cursus pulvinar mauris. Mattis condimentum
          semper id sodales morbi iaculis. Porttitor in dui arcu euismod sed
          semper scelerisque.
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