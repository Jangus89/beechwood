'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const services = [
    { name: 'Tree Surgery', slug: 'tree-surgery' },
    { name: 'Site Clearance', slug: 'site-clearance' },
    { name: 'Emergency Response', slug: 'emergency-response' },
    { name: 'Machinery Hire', slug: 'machinery-hire' },
    { name: 'Arboricultural Consultancy', slug: 'consultancy' },
    { name: 'Commercial Tree Surgery', slug: 'commercial' },
    { name: 'Planting Services', slug: 'planting' },
    { name: 'Stump Grinding', slug: 'stump-grinding' },
    { name: 'Landscape Operations', slug: 'landscape' },
  ]

  return (
    <>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 500;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          transition: background 0.35s, border-color 0.35s;
          border-bottom: 1px solid transparent;
        }

        nav.scrolled {
          background: rgba(6, 9, 6, 0.94);
          backdrop-filter: blur(20px);
          border-color: var(--border);
        }

        nav.solid {
          background: var(--dim);
          border-color: var(--border);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }

        .nav-logo img {
          height: 38px;
          width: auto;
        }

        .nav-name {
          font-family: var(--font-italiana), serif;
          font-size: 18px;
          color: var(--white);
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .nav-sub {
          font-family: var(--font-syne-mono), monospace;
          font-size: 7px;
          letter-spacing: 0.2em;
          color: var(--faint);
          text-transform: uppercase;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
        }

        .nav-a {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--faint);
          padding: 8px 12px;
          cursor: pointer;
          transition: color 0.2s;
          position: relative;
          text-decoration: none;
          border: none;
          background: none;
        }

        .nav-a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 12px;
          right: 12px;
          height: 1px;
          background: var(--lime);
          transform: scaleX(0);
          transition: transform 0.22s;
          transform-origin: left;
        }

        .nav-a:hover,
        .nav-a.cur {
          color: var(--white);
        }

        .nav-a:hover::after,
        .nav-a.cur::after {
          transform: scaleX(1);
        }

        .nav-item {
          position: relative;
        }

        .drop {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 196px;
          background: var(--surface);
          border: 1px solid var(--border2);
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: all 0.2s;
        }

        .nav-item:hover .drop {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .drop a {
          display: block;
          padding: 9px 18px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--faint);
          cursor: pointer;
          transition: all 0.16s;
          border-left: 2px solid transparent;
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }

        .drop a:hover {
          color: var(--lime);
          background: rgba(197, 225, 53, 0.04);
          border-left-color: var(--lime);
          padding-left: 24px;
        }

        .nav-cta {
          background: var(--lime);
          color: var(--black);
          font-family: var(--font-dm-sans), sans-serif;
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: 0;
          padding: 10px 20px;
          margin-left: 10px;
          transition: background 0.2s, transform 0.2s;
          border: none;
          cursor: pointer;
        }

        .nav-cta::after {
          display: none;
        }

        .nav-cta:hover {
          background: var(--lime2);
          transform: translateY(-1px);
        }

        .mob-btn {
          display: none;
          flex-direction: column;
          gap: 4.5px;
          padding: 8px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .mob-btn span {
          width: 22px;
          height: 1.5px;
          background: var(--white);
          border-radius: 1px;
          transition: all 0.24s;
          display: block;
        }

        .mob-btn.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .mob-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .mob-btn.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .mob-menu {
          display: none;
          position: fixed;
          inset: 0;
          top: var(--nav-h);
          background: var(--void);
          z-index: 490;
          padding: 28px;
          overflow-y: auto;
          transform: translateY(-100%);
          transition: transform 0.34s cubic-bezier(0.77, 0, 0.18, 1);
        }

        .mob-menu.open {
          transform: translateY(0);
        }

        .mob-menu .ml {
          display: block;
          font-size: 22px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.45);
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: color 0.18s;
          background: none;
          border: none;
          text-align: left;
          width: 100%;
        }

        .mob-menu .ml:hover {
          color: var(--lime);
        }

        .mob-cta {
          background: var(--lime);
          color: var(--black);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px;
          text-align: center;
          display: block;
          margin-top: 20px;
          border: none;
          cursor: pointer;
          width: 100%;
          font-family: var(--font-dm-sans), sans-serif;
        }

        .mob-wa {
          background: var(--wa);
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px;
          text-align: center;
          display: block;
          margin-top: 10px;
          border: none;
          cursor: pointer;
          width: 100%;
          font-family: var(--font-dm-sans), sans-serif;
        }

        @media (max-width: 768px) {
          nav {
            padding: 0 28px;
          }

          .nav-links {
            display: none;
          }

          .mob-btn {
            display: flex;
          }

          .mob-menu {
            display: block;
          }
        }
      `}</style>

      <nav className={isScrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          <div>
            <div className="nav-name">Beechwood</div>
            <div className="nav-sub">Trees & Landscapes</div>
          </div>
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className={`nav-a ${isActive('/') ? 'cur' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-a">Services</button>
            <div className="drop">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  {service.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/why" className={`nav-a ${isActive('/why') ? 'cur' : ''}`}>
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link href="/about" className={`nav-a ${isActive('/about') ? 'cur' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/careers" className={`nav-a ${isActive('/careers') ? 'cur' : ''}`}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`nav-a ${isActive('/contact') ? 'cur' : ''}`}>
              Contact
            </Link>
          </li>
          <li>
            <a href="tel:08003287988" className="nav-a nav-cta">
              Get a Quote
            </a>
          </li>
        </ul>

        <button
          className={`mob-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mob-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="ml" onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
        <button
          className="ml"
          onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
        >
          Services
        </button>
        {isServiceDropdownOpen && (
          <div style={{ paddingLeft: '16px', marginBottom: '16px' }}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="ml"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsServiceDropdownOpen(false)
                }}
              >
                {service.name}
              </Link>
            ))}
          </div>
        )}
        <Link href="/why" className="ml" onClick={() => setIsMobileMenuOpen(false)}>
          Why Choose Us
        </Link>
        <Link href="/about" className="ml" onClick={() => setIsMobileMenuOpen(false)}>
          About
        </Link>
        <Link href="/careers" className="ml" onClick={() => setIsMobileMenuOpen(false)}>
          Careers
        </Link>
        <Link href="/contact" className="ml" onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </Link>
        <a href="tel:08003287988" className="mob-cta">
          Get a Quote
        </a>
        <a
          href="https://wa.me/447856427988"
          target="_blank"
          rel="noopener noreferrer"
          className="mob-wa"
        >
          WhatsApp
        </a>
      </div>
    </>
  )
}
