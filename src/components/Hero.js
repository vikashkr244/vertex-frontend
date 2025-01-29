// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import HeroAdder from './HeroAdder';

const features = [
  { id: 1, image: 'https://via.placeholder.com/200', name: 'Feature 1' },
  { id: 2, image: 'https://via.placeholder.com/200', name: 'Feature 2' },
  { id: 3, image: 'https://via.placeholder.com/200', name: 'Feature 3' },
  { id: 4, image: 'https://via.placeholder.com/200', name: 'Feature 4' },
  { id: 5, image: 'https://via.placeholder.com/200', name: 'Feature 5' },
  { id: 6, image: 'https://via.placeholder.com/200', name: 'Feature 6' },
];


const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setTranslateX((prev) => (prev >= 100 ? 0 : prev + 1)); // Loop back to the start
      }, 30); // Adjust speed by changing interval time
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Handle click to pause/resume
  const handleImageClick = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section className="hero">
      <h2>Welcome to Vertex Papers</h2>
      <HeroAdder/>
      <div className="feature-slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${translateX}%)`,
            transition: 'transform 0.1s linear', // Smooth movement
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-slide"
              onClick={handleImageClick}
            >
              <img
                src={feature.image}
                alt={feature.name}
                className="feature-image-slide"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
