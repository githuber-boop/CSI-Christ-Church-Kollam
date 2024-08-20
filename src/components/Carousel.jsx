// src/Carousel.js
import React, { useState } from 'react';
import '../styles/Carousel.css'; // You'll create this file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="carousel__images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel__image ${
              index === currentIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>

      <button className="carousel__button carousel__button--right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
