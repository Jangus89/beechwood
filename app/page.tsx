'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import { SERVICES, COMPANY_INFO, TESTIMONIALS } from '@/lib/services'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        .home-hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-rows: 1fr auto;
          overflow: hidden;
          margin-top: var(--nav-h);
        }

        .hh-media {
          position: absolute;
          inset: 0;
          background: url('https://images.squarespace-cdn.com/content/v1/6022ace5a0e25e13bab54c8e/7f055729-57ee-450c-9c93-ec4570cb0d97/Image_20240912_104912_623+%281%29.jpeg?format=2500w') center/cover no-repeat;
          filter: brightness(0.26) saturate(0.6);
          transform: scale(1.04);
          animation: slow-zoom 18s ease-in-out infinite alternate;
        }

        .hh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 9, 6, 0.35) 0%, transparent 40%, rgba(6, 9, 6, 0.88) 100%);
        }

        .hh-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
          padding: 0 72px 28px;
          padding-top: 16px;
          max-width: 1440px;
          margin: 0 auto;
        }

        .hh-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .hh-eyebrow {
          font-family: var(--font-syne-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--lime);
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          opacity: 0;
          animation: fl 1s ease 0.1s forwards;
        }

        .hh-eyebrow::before {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--lime);
          flex-shrink: 0;
        }

        .hh-h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(62px, 9vw, 142px);
          line-height: 0.92;
          letter-spacing: -0.01em;
          color: var(--white);
          margin-bottom: 0;
        }

        .hh-line {
          display: block;
          overflow: hidden;
        }

        .hh-line span {
          display: block;
          transform: translateY(105%);
          animation: slideup 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hh-line:nth-child(1) span {
          animation-delay: 0.28s;
        }

        .hh-line:nth-child(2) span {
          animation-delay: 0.42s;
        }

        .hh-line:nth-child(3) span {
          animation-delay: 0.56s;
        }

        .hh-h1 em {
          color: var(--lime);
          font-style: italic;
        }

        .hh-sub {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--border2);
          opacity: 0;
          animation: fl 1s ease 0.85s forwards;
        }

        .hh-p {
          font-size: 14.5px;
          font-weight: 400;
          color: var(--off);
          line-height: 1.72;
          max-width: 400px;
        }

        .hh-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .hh-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          opacity: 0;
          animation: fl 1s ease 1.1s forwards;
        }

        .hh-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 24px;
          background: rgba(197, 225, 53, 0.06);
          border: 1px solid rgba(197, 225, 53, 0.15);
        }

        .hh-stat-num {
          font-family: var(--font-italiana), serif;
          font-size: 32px;
          color: var(--lime);
          line-height: 1;
        }

        .hh-stat-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--faint);
          text-transform: uppercase;
        }

        .services-section {
          padding: 80px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .testimonials-section {
          padding: 80px 0;
          background: var(--void);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .testimonial-card {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
          border-radius: 0;
        }

        .testimonial-text {
          font-size: 15px;
          color: var(--off);
          line-height: 1.8;
          margin-bottom: 20px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .testimonial-name {
          font-family: var(--font-syne), sans-serif;
          font-weight: 600;
          color: var(--white);
          font-size: 14px;
        }

        .testimonial-company {
          font-size: 12px;
          color: var(--faint);
        }

        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.05) 0%, transparent 100%);
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-italiana), serif;
          font-size: 48px;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .cta-subtitle {
          font-size: 16px;
          color: var(--off);
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hh-content {
            grid-template-columns: 1fr;
            padding: 0 28px 28px;
          }

          .hh-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .cta-title {
            font-size: 32px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hh-media"></div>
        <div className="hh-overlay"></div>
        <div className="hh-content">
          <div className="hh-left">
            <div className="hh-eyebrow">Award-Winning Arboricultural Services</div>
            <h1 className="hh-h1">
              <span className="hh-line"><span>Professional</span></span>
              <span className="hh-line"><span>Tree</span></span>
              <span className="hh-line"><span><em>Solutions</em></span></span>
            </h1>
            <div className="hh-sub">
              <p className="hh-p">
                UK's trusted arboricultural contractors since 1998. 50+ NPTC-qualified arborists serving the nation with certified expertise.
              </p>
              <div className="hh-btns">
                <Button href="tel:08003287988" variant="fill">
                  Get a Quote
                </Button>
                <Button href={COMPANY_INFO.whatsapp} variant="wa">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="hh-right">
            <div className="hh-stat">
              <div className="hh-stat-num">1998</div>
              <div className="hh-stat-label">Founded</div>
            </div>
            <div className="hh-stat">
              <div className="hh-stat-num">50+</div>
              <div className="hh-stat-label">Qualified Team</div>
            </div>
            <div className="hh-stat">
              <div className="hh-stat-num">🏆</div>
              <div className="hh-stat-label">Award 2022</div>
            </div>
            <div className="hh-stat">
              <div className="hh-stat-num">4.7★</div>
              <div className="hh-stat-label">Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="wrap">
          <div className="s-label">Services</div>
          <h2 className="display">What We Offer</h2>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="wrap">
          <div className="s-label">Testimonials</div>
          <h2 className="display">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-company">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="wrap">
          <h2 className="cta-title">Ready to Transform Your Landscape?</h2>
          <p className="cta-subtitle">
            Contact our team today for a free survey and personalized quote. Available 24/7 for emergency services.
          </p>
          <div className="cta-buttons">
            <Button href="tel:08003287988" variant="fill">
              Call: 0800 328 7988
            </Button>
            <Button href={COMPANY_INFO.whatsapp} variant="wa">
              Chat on WhatsApp
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Form
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
