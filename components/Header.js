'use client';

import { donationUrl } from '@/lib/site';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/#about', label: 'Services' },
  { href: donationUrl, label: 'Donate' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    const el = document.querySelector(window.location.hash);
    const header = document.querySelector('#header');
    if (!el || !header) return undefined;

    function scrollToTarget(behavior) {
      window.scrollTo({ top: el.offsetTop - header.offsetHeight, behavior });
    }

    scrollToTarget('smooth');

    // Images above the target can finish loading after the first scroll and push it down.
    const pendingImages = [...document.images].filter((img) => !img.complete);
    let cancelled = false;
    Promise.all(
      pendingImages.map(
        (img) =>
          new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
          }),
      ),
    ).then(() => {
      if (!cancelled && pendingImages.length) scrollToTarget('auto');
    });

    return () => {
      cancelled = true;
    };
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
          <img src="/assets/img/logo-trans.png" alt="Healing Helping Hands" className="img-fluid" />
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
