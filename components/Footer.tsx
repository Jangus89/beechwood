'use client'

import Link from 'next/link'
import { SERVICES, COMPANY_INFO } from '@/lib/services'

export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          background: var(--void);
          border-top: 1px solid var(--border);
          padding: 48px 0;
          margin-top: 80px;
        }

        .footer-content {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 64px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .footer-col h3 {
          font-family: var(--font-italiana), serif;
          font-size: 18px;
          color: var(--white);
          margin-bottom: 20px;
          letter-spacing: 0.04em;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col a,
        .footer-col p {
          font-size: 14px;
          color: var(--off);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: var(--lime);
        }

        .footer-bottom {
          max-width: 1440px;
          margin: 0 auto;
          padding: 32px 64px 0;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
          font-size: 13px;
          color: var(--faint);
        }

        .footer-socials {
          display: flex;
          gap: 20px;
        }

        .footer-ctas {
          display: flex;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 0 28px;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .footer-bottom {
            padding: 32px 28px 0;
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .footer-socials {
            width: 100%;
            justify-content: center;
          }

          .footer-ctas {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <h3>About</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/why">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <p>
                  Est. {COMPANY_INFO.founded} • {COMPANY_INFO.team} team members
                </p>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">View All Services</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>More Services</h3>
            <ul>
              {SERVICES.slice(4).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </li>
              <li>
                <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contact">Contact Form</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Beechwood Trees & Landscapes. All rights reserved.</p>
          <div className="footer-socials">
            <a
              href="https://www.google.com/search?q=Beechwood+Trees+Landscapes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Reviews
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
