'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import { SERVICES, COMPANY_INFO } from '@/lib/services'
import { use } from 'react'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = use(params)
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center', marginTop: 'var(--nav-h)' }}>
        <h1>Service Not Found</h1>
        <p style={{ marginTop: '16px', color: 'var(--off)' }}>
          The service you are looking for does not exist.
        </p>
        <Link href="/services" style={{ marginTop: '24px', color: 'var(--lime)' }}>
          Back to Services
        </Link>
      </div>
    )
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== params.slug).slice(0, 3)

  return (
    <>
      <style jsx>{`
        .service-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          margin-top: var(--nav-h);
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, rgba(197, 225, 53, 0.02) 100%);
          border-bottom: 1px solid var(--border);
          padding: 80px 0;
        }

        .service-hero .wrap {
          width: 100%;
        }

        .service-hero h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: 1;
          letter-spacing: -0.005em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .service-hero p {
          font-size: 16px;
          color: var(--off);
          line-height: 1.6;
          max-width: 600px;
        }

        .service-content {
          padding: 80px 0;
        }

        .service-body {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          margin-bottom: 80px;
        }

        .service-main h2 {
          font-family: var(--font-italiana), serif;
          font-size: 36px;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .service-main p {
          font-size: 15px;
          color: var(--off);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .service-features {
          margin: 48px 0;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          color: var(--lime);
          font-size: 20px;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .feature-text {
          flex: 1;
        }

        .feature-text h3 {
          color: var(--white);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .feature-text p {
          font-size: 13px;
          color: var(--off);
          line-height: 1.6;
          margin: 0;
        }

        .service-image {
          width: 100%;
          height: 400px;
          background: rgba(197, 225, 53, 0.06);
          border: 1px solid rgba(197, 225, 53, 0.15);
          margin: 48px 0;
          object-fit: cover;
        }

        .service-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-card {
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
        }

        .sidebar-title {
          font-family: var(--font-italiana), serif;
          font-size: 18px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .sidebar-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
        }

        .sidebar-list li {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          font-size: 13px;
          color: var(--off);
        }

        .sidebar-list li::before {
          content: '✓';
          color: var(--lime);
          font-weight: bold;
          flex-shrink: 0;
        }

        .related-services {
          padding: 80px 0;
          background: var(--void);
          border-top: 1px solid var(--border);
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .cta-banner {
          padding: 48px;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.1) 0%, transparent 100%);
          border: 1px solid var(--border);
          margin: 48px 0;
          text-align: center;
        }

        .cta-banner h3 {
          font-family: var(--font-italiana), serif;
          font-size: 28px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .cta-banner p {
          color: var(--off);
          margin-bottom: 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .service-hero {
            padding: 48px 0;
          }

          .service-body {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .related-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .cta-banner {
            padding: 32px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="service-hero">
        <div className="wrap">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="service-content">
        <div className="wrap">
          <div className="service-body">
            <div className="service-main">
              <h2>Overview</h2>
              <p>{service.details}</p>

              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />

              <div className="service-features">
                <h3 style={{ color: 'var(--white)', marginBottom: '24px', fontSize: '18px' }}>
                  What's Included
                </h3>
                <div className="feature-list">
                  {[
                    {
                      title: 'Professional Assessment',
                      desc: 'Thorough evaluation of your specific needs',
                    },
                    {
                      title: 'Expert Execution',
                      desc: 'Certified arborists using best practices',
                    },
                    {
                      title: 'Safety First',
                      desc: 'Comprehensive safety protocols and insurance',
                    },
                    {
                      title: 'Environmental Care',
                      desc: 'Sustainable practices and waste management',
                    },
                    {
                      title: 'Follow-Up Support',
                      desc: 'After-care guidance and recommendations',
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-icon">✓</div>
                      <div className="feature-text">
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cta-banner">
                <h3>Ready to Get Started?</h3>
                <p>Contact our team for a free quote and professional consultation.</p>
                <div className="cta-buttons">
                  <Button href="tel:08003287988" variant="fill">
                    Call Us: 0800 328 7988
                  </Button>
                  <Button href={COMPANY_INFO.whatsapp} variant="wa">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="service-sidebar">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Quick Facts</h3>
                <ul className="sidebar-list">
                  <li>50+ NPTC Qualified Arborists</li>
                  <li>ISO 9001, 14001 & 45001 Certified</li>
                  <li>24/7 Emergency Response</li>
                  <li>4.7★ Client Rating</li>
                  <li>Free Site Surveys</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3 className="sidebar-title">Contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="tel:08003287988" style={{ color: 'var(--lime)', textDecoration: 'none' }}>
                    0800 328 7988
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--lime)', textDecoration: 'none' }}>
                    {COMPANY_INFO.email}
                  </a>
                  <a
                    href={COMPANY_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--lime)', textDecoration: 'none' }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="related-services">
          <div className="wrap">
            <div className="s-label">Related Services</div>
            <h2 className="display">You Might Also Need</h2>
            <div className="related-grid">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '32px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(197, 225, 53, 0.08)';
                    e.currentTarget.style.borderColor = 'var(--lime)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'var(--border2)';
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '12px' }}>{s.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-italiana), serif', fontSize: '18px', color: 'var(--white)', marginBottom: '8px' }}>
                      {s.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--off)', lineHeight: '1.6' }}>
                      {s.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
