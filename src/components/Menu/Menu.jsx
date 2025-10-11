import React, { useState } from "react";
import "./Menu.css";
// Assuming these paths are correct
import food1 from "../../assets/food1.jpeg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import food5 from "../../assets/food5.jpg";
import food6 from "../../assets/food6.jpg";

const MenuPage = () => {
  const categories = [
    { id: 1, name: "Vegetarian", icon: "🥗" },
    { id: 2, name: "Fast Food", icon: "🍔" },
    { id: 3, name: "Italian", icon: "🍝" },
    { id: 4, name: "American", icon: "🍟" },
    { id: 5, name: "Dessert", icon: "🍰" },
  ];

  const foodItems = [
    {
      id: 1,
      title: "Sausage salad with tomatoe",
      price: 14,
      rating: 4.9,
      image: food1,
      category: "Vegetarian",
    },
    {
      id: 2,
      title: "Vegetarian Plate",
      price: 6,
      rating: 4.8,
      image: food2,
      category: "Vegetarian",
    },
    {
      id: 3,
      title: "Veg Biryani & Veg Pulau",
      price: 29,
      rating: 4.7,
      image: food3,
      category: "Italian",
    },
    {
      id: 4,
      title: "Chicken Burger",
      price: 29,
      rating: 4.7,
      image: food4,
      category: "Fast Food",
    },
    {
      id: 5,
      title: "Pizza Slice",
      price: 29,
      rating: 4.7,
      image: food5,
      category: "Italian",
    },
    {
      id: 6,
      title: "Chocolate Cake",
      price: 29,
      rating: 4.7,
      image: food6,
      category: "Dessert",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Vegetarian");

  const filteredFoodItems = foodItems.filter(
    (food) => food.category === activeCategory
  );

  return (
    // 1. Animation for the main container
    <div className="menu-page" data-aos="fade-in">
      <div className="menu-header" data-aos="fade-down">
        <p className="category-title">CATEGORIES</p>
        <h2>We care your Choice</h2>
      </div>

      <div className="menu-content">
        {/* 2. Animation for the Categories list */}
        <div className="category-list" data-aos="fade-right" data-aos-delay="200">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-item ${
                activeCategory === cat.name ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
              // Simple fade-up for each category item
              data-aos="fade-up" 
              data-aos-delay={cat.id * 100}
            >
              <span className="icon">{cat.icon}</span>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>

        {/* Food Cards */}
        <div className="food-section">
          <div className="food-cards">
            {/* 3. Animation for the Food Cards (Staggered) */}
            {filteredFoodItems.map((food, index) => (
              <div 
                key={food.id} 
                className="food-card"
                data-aos="fade-up" // Slide up animation
                data-aos-delay={index * 150} // Staggered delay for smooth flow
              >
                <div className="food-card__content">
                  <div className="food-img">
                    <img src={food.image} alt={food.title} />
                    <button className="fav-btn">♡</button>
                  </div>
                  <h3>{food.title}</h3>
                  <div className="food-info">
                    <span className="rating">⭐ {food.rating}</span>
                    <span className="price">${food.price}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Optional: Message if category is empty */}
            {filteredFoodItems.length === 0 && (
              <p 
                className="no-items-message"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                No items found in the {activeCategory} category.
              </p>
            )}
          </div>

          <div className="arrow-buttons" data-aos="fade-left" data-aos-delay="300">
            <button className="arrow left">←</button>
            <button className="arrow right">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
