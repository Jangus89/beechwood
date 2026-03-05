'use client'

import Button from '@/components/Button'
import { CERTIFICATIONS, ENVIRONMENTAL_INITIATIVES, COMPANY_INFO } from '@/lib/services'

export default function WhyPage() {
  return (
    <>
      <style jsx>{`
        .why-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          margin-top: var(--nav-h);
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, rgba(197, 225, 53, 0.02) 100%);
          border-bottom: 1px solid var(--border);
          padding: 80px 0;
        }

        .why-hero h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: 1;
          letter-spacing: -0.005em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .why-hero p {
          font-size: 16px;
          color: var(--off);
          line-height: 1.6;
          max-width: 600px;
        }

        .why-content {
          padding: 80px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 80px 0;
        }

        .stat-box {
          padding: 32px;
          background: rgba(197, 225, 53, 0.06);
          border: 1px solid rgba(197, 225, 53, 0.15);
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-italiana), serif;
          font-size: 42px;
          color: var(--lime);
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 12px;
          letter-spacing: 0.15em;
          color: var(--faint);
          text-transform: uppercase;
        }

        .certifications-section {
          padding: 80px 0;
          background: var(--void);
          border-top: 1px solid var(--border);
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .cert-box {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
          text-align: center;
        }

        .cert-name {
          font-family: var(--font-syne), sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: var(--white);
        }

        .environment-section {
          padding: 80px 0;
        }

        .environment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
          background: var(--border);
          padding: 1px;
        }

        .env-box {
          padding: 40px;
          background: var(--black);
        }

        .env-icon {
          font-size: 36px;
          margin-bottom: 16px;
          line-height: 1;
        }

        .env-title {
          font-family: var(--font-italiana), serif;
          font-size: 20px;
          color: var(--white);
          margin-bottom: 12px;
        }

        .env-desc {
          font-size: 14px;
          color: var(--off);
          line-height: 1.6;
        }

        .values-section {
          padding: 80px 0;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.05) 0%, transparent 100%);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 40px;
        }

        .value-item {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
        }

        .value-title {
          font-family: var(--font-italiana), serif;
          font-size: 24px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .value-desc {
          font-size: 14px;
          color: var(--off);
          line-height: 1.6;
        }

        .cta-final {
          padding: 48px;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.1) 0%, transparent 100%);
          border: 1px solid var(--border);
          text-align: center;
          margin: 80px 0;
        }

        .cta-final h3 {
          font-family: var(--font-italiana), serif;
          font-size: 32px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .cta-final p {
          color: var(--off);
          margin-bottom: 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin: 48px 0;
          }

          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .environment-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="why-hero">
        <div className="wrap">
          <h1>Why Choose Beechwood</h1>
          <p>
            Decades of excellence, industry certifications, and a genuine commitment to environmental stewardship set us apart.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="why-content">
        <div className="wrap">
          {/* Stats */}
          <div>
            <div className="s-label">By The Numbers</div>
            <h2 className="display">Our Track Record</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-num">25+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">50+</div>
                <div className="stat-label">Qualified Arborists</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">4.7★</div>
                <div className="stat-label">Client Rating</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">24/7</div>
                <div className="stat-label">Emergency Service</div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div style={{ marginTop: '80px' }}>
            <h2 className="display sm">What Makes Us Different</h2>
            <div className="values-grid" style={{ marginTop: '40px' }}>
              <div className="value-item">
                <div className="value-title">NPTC Qualified</div>
                <div className="value-desc">
                  All our arborists are NPTC (National Proficiency Tests Council) qualified, ensuring professional standards across every project.
                </div>
              </div>
              <div className="value-item">
                <div className="value-title">ISO Certified</div>
                <div className="value-desc">
                  ISO 9001, 14001 & 45001 certifications demonstrate our commitment to quality, environment, and workplace safety.
                </div>
              </div>
              <div className="value-item">
                <div className="value-title">24/7 Availability</div>
                <div className="value-desc">
                  Storm damage? Emergency tree removal needed? Our round-the-clock emergency response keeps your property safe.
                </div>
              </div>
              <div className="value-item">
                <div className="value-title">Environmental Focus</div>
                <div className="value-desc">
                  Carbon tracking, sustainable practices, and biodiversity initiatives guide every decision we make.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="wrap">
          <div className="s-label">Certifications & Accreditations</div>
          <h2 className="display sm">Trusted by Industry Standards</h2>
          <div className="cert-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert} className="cert-box">
                <div className="cert-name">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="environment-section">
        <div className="wrap">
          <div className="s-label">Environment</div>
          <h2 className="display sm">Caring for the environment we work in</h2>
          <div className="environment-grid">
            {ENVIRONMENTAL_INITIATIVES.map((initiative) => (
              <div key={initiative.title} className="env-box">
                <div className="env-icon">{initiative.icon}</div>
                <h3 className="env-title">{initiative.title}</h3>
                <p className="env-desc">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="why-content">
        <div className="wrap">
          <div className="cta-final">
            <h3>Ready to Experience the Beechwood Difference?</h3>
            <p>
              Contact our team today for a free consultation and personalized quote. Let's discuss how we can help transform your landscape.
            </p>
            <div className="cta-buttons">
              <Button href="tel:08003287988" variant="fill">
                Call: 0800 328 7988
              </Button>
              <Button href={COMPANY_INFO.whatsapp} variant="wa">
                WhatsApp
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
