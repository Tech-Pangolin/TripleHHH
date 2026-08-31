'use client';

import { address, email, phone, siteName } from '@/lib/site';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch(() => {});
  }, []);

  function handleNewsletter(event) {
    event.preventDefault();
  }

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <figure>
                <figcaption>Reckoning:</figcaption>
                <audio id="myAudio" ref={audioRef} controls>
                  <source src="/assets/media/Podington Bear - Reckoning.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <a href="https://freemusicarchive.org/music/Podington_Bear/Soul/Reckoning_1345/">source</a>
              </figure>

              <div className="footer-info">
                <h3>{siteName}</h3>
                <p>
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.cityStateZip}
                  <br />
                  <br />
                  <strong>Phone:</strong> {phone}
                  <br />
                  <strong>Email:</strong> {email}
                  <br />
                </p>
                <br />
                <p id="donate">We are a 501(c)(3) Non-Profit Charitable Organization. Donations accepted.</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter" aria-label="Twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#" className="facebook" aria-label="Facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#" className="instagram" aria-label="Instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#" className="google-plus" aria-label="Skype">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#" className="linkedin" aria-label="LinkedIn">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/our-story">Our Story</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/#about">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/#contact">Contact</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <Link href="/#donate">Donate</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Please subscribe to our newsletter</p>
              <form onSubmit={handleNewsletter}>
                <input type="email" name="email" placeholder="Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>TripleH</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
