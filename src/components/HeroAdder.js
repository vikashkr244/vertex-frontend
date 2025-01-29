// src/components/HeroAdder.js
import React, { useState, useEffect } from 'react';
import '../styles/HeroAdder.css';

const allLines = [
  "Precision Printing, Every Time. Your trusted partner for all your copying needs.",
  "Where Quality Meets Speed – Your One-Stop Copy Solution.",
  "Crafting Perfection, One Copy at a Time.",
  "Innovating Your Printing Experience – Smarter, Faster, Better.",
  "From Ideas to Impressions – High-Quality Copies Made Effortless.",
  "Revolutionizing Copy Services for Your Modern Needs.",
  "Your Vision, Our Precision – Personalized Copying Solutions.",
  "We Copy, You Succeed – Excellence in Every Print.",
  "Bringing Your Documents to Life – Fast and Reliable Copy Services.",
  "Eco-Friendly Copies for a Greener Tomorrow.",
  "Printing Responsibly – Quality You Can Feel Good About.",
  "Sustainable Solutions, Perfect Impressions.",
];

const HeroAdder = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLineIndex((prevIndex) =>
        prevIndex === allLines.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change line every 3 seconds

    return () => clearInterval(lineInterval);
  }, []);

  return (
    <div className="hero-adder">
      <p>{allLines[currentLineIndex]}</p>
    </div>
  );
};

export default HeroAdder;
