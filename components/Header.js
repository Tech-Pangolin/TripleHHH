'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/#about', label: 'Services' },
  { href: '/#donate', label: 'Donate' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.querySelector(window.location.hash);
    const header = document.querySelector('#header');
    if (!el || !header) return;
    window.scrollTo({
      top: el.offsetTop - header.offsetHeight,
      behavior: 'smooth',
    });
  }, [pathname]);

  function handleHashClick(event, href) {
    if (!href.includes('#')) return;
    const hash = href.slice(href.indexOf('#'));
    if (pathname !== '/' && href.startsWith('/#')) return;
    const el = document.querySelector(hash);
    if (!el) return;
    event.preventDefault();
    const header = document.querySelector('#header');
    window.scrollTo({
      top: el.offsetTop - (header ? header.offsetHeight : 0),
      behavior: 'smooth',
    });
    setMobileOpen(false);
  }

  function isActive(href) {
    if (href === '/') return pathname === '/';
    if (href === '/our-story') return pathname === '/our-story';
    return false;
  }

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="logo">
          <img src="/assets/img/logo-trans.png" alt="Triple H Health Services" className="img-fluid" />
        </Link>

        <nav id="navbar" className={`navbar${mobileOpen ? ' navbar-mobile' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`nav-link scrollto${isActive(item.href) ? ' active' : ''}`}
                  href={item.href}
                  onClick={(event) => handleHashClick(event, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="#" className="nav-sn" style={{ marginLeft: 20 }} aria-label="Twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="nav-sn" aria-label="Facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="nav-sn" aria-label="Instagram">
            <i className="bi bi-instagram" />
          </a>
          <i
            className={`bi mobile-nav-toggle ${mobileOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMobileOpen((open) => !open)}
            role="button"
            aria-label="Toggle navigation"
          />
        </nav>
      </div>
    </header>
  );
}
