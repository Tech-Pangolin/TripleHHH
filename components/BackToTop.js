'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#header"
      className={`back-to-top d-flex align-items-center justify-content-center${visible ? ' active' : ''}`}
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  );
}
