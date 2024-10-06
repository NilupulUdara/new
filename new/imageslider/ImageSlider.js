import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="left-arrow">
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="slide" className="slider-image" />
      <button onClick={nextSlide} className="right-arrow">
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
