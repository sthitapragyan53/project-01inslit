import React from 'react';
import './Testimonial.css'; // Import the corresponding CSS
import { testimonials } from './TestimonialData'; // Import the mock data

// Helper component for star rating
const StarRating = ({ count }) => {
    return (
        <div className="testimonial-rating">
            {Array(count)
                .fill()
                .map((_, i) => (
                    <span key={i} className="star">⭐</span>
                ))}
        </div>
    );
};

const TestimonialPage = () => {
    return (
        <div className="testimonial-page" data-aos="fade-in">

            {/* Animation for the Header Section */}
            <div className="testimonial-header" data-aos="fade-down">
                <p className="subtitle">CUSTOMER FEEDBACK</p>
                <h2>What Our Clients Say</h2>
                <p className="description">
                    Don't just take our word for it—read real reviews from our satisfied customers.
                </p>
            </div>

            <div className="testimonial-grid">
                {/* Animation for the Testimonial Cards (Staggered) */}
                {testimonials.map((t, index) => (
                    <div 
                        key={t.id} 
                        className="testimonial-card"
                        data-aos="fade-up" // Animation effect
                        data-aos-delay={index * 150} // Staggered delay for smooth sequential entry
                    >
                        
                        <StarRating count={t.rating} />

                        <p className="testimonial-quote">"{t.quote}"</p>
                        
                        <div className="client-info">
                            <img src={t.image} alt={`Photo of ${t.name}`} className="client-avatar" />
                            <div className="client-details">
                                <p className="client-name">{t.name}</p>
                                <p className="client-title">{t.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialPage;
