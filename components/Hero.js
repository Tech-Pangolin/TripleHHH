'use client';

import { services, siteName, siteTagline } from '@/lib/site';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/assets/img/slide/back-massage.jpg',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    title: siteName,
    text: siteTagline,
    showLogo: true,
  },
  ...services.map((service) => ({
    image: service.slideImage,
    backgroundPosition: service.backgroundPosition,
    title: service.title,
    text: service.description,
  })),
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function scrollToAbout(event) {
    event.preventDefault();
    const el = document.querySelector('#about');
    const header = document.querySelector('#header');
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - (header ? header.offsetHeight : 0),
      behavior: 'smooth',
    });
  }

  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" className="carousel slide carousel-fade">
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            {slides.map((slide, index) => (
              <li
                key={slide.image}
                className={index === active ? 'active' : ''}
                onClick={() => setActive(index)}
              />
            ))}
          </ol>

          <div className="carousel-inner" role="listbox">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={`carousel-item${index === active ? ' active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: slide.backgroundSize,
                  backgroundPosition: slide.backgroundPosition,
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    {slide.showLogo && (
                      <img
                        src="/assets/img/logo-lg.png"
                        alt={siteName}
                        style={{
                          width: 400,
                          zIndex: 9999,
                          backgroundColor: 'rgba(255,255,255,1)',
                          padding: 25,
                          borderRadius: '10%',
                        }}
                      />
                    )}
                    <h2 className="animate__animated animate__fadeInDown">{slide.title}</h2>
                    <p className="animate__animated animate__fadeInUp">{slide.text}</p>
                    <div>
                      <a
                        href="#about"
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                        onClick={scrollToAbout}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="carousel-control-prev"
            onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
          >
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="carousel-control-next"
            onClick={() => setActive((current) => (current + 1) % slides.length)}
            aria-label="Next slide"
          >
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
