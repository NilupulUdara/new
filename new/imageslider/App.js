import React from 'react';
import ImageSlider from './ImageSlider';
import './slider.css';

const App = () => {
  const images = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3'
  ];

  return (
    <div className="App">
      <h1>Simple Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
