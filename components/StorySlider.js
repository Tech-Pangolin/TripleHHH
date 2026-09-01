'use client';

import { storyCarouselImages } from '@/lib/story-images';
import { useCallback, useEffect, useState } from 'react';

const images = storyCarouselImages;
const INTERVAL_MS = 4000;

export default function StorySlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setActive((index + images.length) % images.length);
  }, []);

  const goNext = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  useEffect(() => {
    if (paused) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="story-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="story-slider__viewport">
        <button
          type="button"
          className="story-slider__arrow story-slider__arrow--prev"
          onClick={goPrev}
          aria-label="Previous image"
        >
          <i className="bi bi-chevron-left" aria-hidden="true" />
        </button>

        <div className="story-slider__slides">
          {images.map((src, index) => (
            <div
              key={src}
              className={`story-slider__slide${index === active ? ' story-slider__slide--active' : ''}`}
            >
              <img src={src} alt={`Chenell Hickey recovery story ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="story-slider__arrow story-slider__arrow--next"
          onClick={goNext}
          aria-label="Next image"
        >
          <i className="bi bi-chevron-right" aria-hidden="true" />
        </button>
      </div>

      <div className="story-slider__dots">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={`story-slider__dot${index === active ? ' story-slider__dot--active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
