'use client'

import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'
import { SERVICES, COMPANY_INFO } from '@/lib/services'

export default function ServicesPage() {
  return (
    <>
      <style jsx>{`
        .services-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          margin-top: var(--nav-h);
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, rgba(197, 225, 53, 0.02) 100%);
          border-bottom: 1px solid var(--border);
          padding: 80px 0;
        }

        .services-hero .wrap {
          width: 100%;
        }

        .services-hero h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: 1;
          letter-spacing: -0.005em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .services-hero p {
          font-size: 16px;
          color: var(--off);
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: 32px;
        }

        .services-content {
          padding: 80px 0;
        }

        .services-intro {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 80px;
          padding: 48px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
        }

        .services-intro h2 {
          font-family: var(--font-italiana), serif;
          font-size: 36px;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .services-intro p {
          font-size: 15px;
          color: var(--off);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .services-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stat-item {
          padding: 20px;
          background: rgba(197, 225, 53, 0.06);
          border: 1px solid rgba(197, 225, 53, 0.15);
        }

        .stat-value {
          font-family: var(--font-italiana), serif;
          font-size: 28px;
          color: var(--lime);
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--faint);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .services-hero {
            padding: 48px 0;
          }

          .services-intro {
            grid-template-columns: 1fr;
            padding: 32px;
            gap: 32px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="services-hero">
        <div className="wrap">
          <h1>Our Services</h1>
          <p>
            Comprehensive arboricultural solutions for residential, commercial, and landscape clients across the UK.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="services-content">
        <div className="wrap">
          <div className="services-intro">
            <div>
              <h2>Why Choose Our Services?</h2>
              <p>
                With over 25 years of expertise, our team delivers professional arboricultural services backed by industry certifications and a commitment to environmental excellence.
              </p>
              <p>
                From emergency response to strategic consultancy, we handle every aspect of tree and landscape management with precision and care.
              </p>
              <Button href="/contact" variant="fill" style={{ marginTop: '16px' }}>
                Get a Free Consultation
              </Button>
            </div>
            <div className="services-stats">
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Qualified Arborists</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">6</div>
                <div className="stat-label">ISO Certifications</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Emergency Service</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4.7★</div>
                <div className="stat-label">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div>
            <div className="s-label">All Services</div>
            <h2 className="display">What We Can Help With</h2>
            <div className="services-grid" style={{ marginTop: '40px' }}>
              {SERVICES.map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
