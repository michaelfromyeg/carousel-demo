import React from 'react';
import './App.css';

const App = () => {
  const carouselRef = React.useRef(null);

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    const visibleWidth = carousel.offsetWidth;
    carousel.scrollBy({ left: -visibleWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    const visibleWidth = carousel.offsetWidth;
    carousel.scrollBy({ left: visibleWidth, behavior: 'smooth' });
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={scrollLeft}>‹</button>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-content">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="carousel-item">Item {index + 1}</div>
          ))}
        </div>
      </div>
      <button className="carousel-button right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default App;
