import React, { useState, useEffect } from "react";
import "./Carousel.css"; // import CSS
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Carousel = () => {
  const images = [banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt="banner" className="carousel-image" />
      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
