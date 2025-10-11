import React, { useEffect } from 'react'; // 1. Import useEffect
import AOS from 'aos'; // 2. Import AOS library
import 'aos/dist/aos.css'; // 3. Import AOS CSS styles
import './App.css';
import Header from './components/Headers/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Testimonial from './components/Testimonials/Testimonial';
import DeliverySection from './components/DeliverySection/DeliverySection';

const App = () => {
    // Initialize AOS when the application component mounts
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set a default animation duration of 1 second
            once: true,     // Ensure animation only happens once per element
        });
        AOS.refresh(); // Manually refresh if dynamic content might be loading
    }, []); // Empty dependency array ensures it runs only once

    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <Menu/>
                <DeliverySection/>
                <Testimonial/>
                <About/>
            </main>
        </>
    )
}

export default App