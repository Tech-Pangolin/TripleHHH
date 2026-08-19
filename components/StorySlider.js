'use client';

import { useEffect, useState } from 'react';

const images = [
  '/assets/img/about/c1.jpg',
  '/assets/img/about/c2.jpg',
  '/assets/img/about/c3.jpg',
];

export default function StorySlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="portfolio-details-slider swiper" style={{ width: '50%' }}>
      <div className="swiper-wrapper align-items-center">
        {images.map((src, index) => (
          <div
            key={src}
            className="swiper-slide"
            style={{ display: index === active ? 'block' : 'none' }}
          >
            <img src={src} alt="Chenell Hickey recovery story" />
          </div>
        ))}
      </div>
      <div className="swiper-pagination">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={index === active ? 'active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              border: 0,
              margin: '0 4px',
              background: index === active ? '#D7952A' : '#ccc',
            }}
          />
        ))}
      </div>
    </div>
  );
}
