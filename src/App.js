import React from 'react';
import './App.css';

const App = () => {
  const scrollLeft = () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={scrollLeft}>‹</button>
      <div className="carousel">
        <div className="carousel-content">
          <div className="carousel-item">Item 1</div>
          <div className="carousel-item">Item 2</div>
          <div className="carousel-item">Item 3</div>
          <div className="carousel-item">Item 4</div>
          <div className="carousel-item">Item 5</div>
          <div className="carousel-item">Item 6</div>
          <div className="carousel-item">Item 7</div>
          <div className="carousel-item">Item 8</div>
          <div className="carousel-item">Item 9</div>
          <div className="carousel-item">Item 10</div>
        </div>
      </div>
      <button className="carousel-button right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default App;
