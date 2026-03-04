'use client'

import Button from '@/components/Button'
import { COMPANY_INFO, CERTIFICATIONS } from '@/lib/services'

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .about-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          margin-top: var(--nav-h);
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, rgba(197, 225, 53, 0.02) 100%);
          border-bottom: 1px solid var(--border);
          padding: 80px 0;
        }

        .about-hero h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: 1;
          letter-spacing: -0.005em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .about-hero p {
          font-size: 16px;
          color: var(--off);
          line-height: 1.6;
          max-width: 600px;
        }

        .about-content {
          padding: 80px 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 80px;
        }

        .about-text h2 {
          font-family: var(--font-italiana), serif;
          font-size: 36px;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .about-text p {
          font-size: 15px;
          color: var(--off);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 32px;
        }

        .stat-item {
          padding: 20px 16px;
          background: rgba(197, 225, 53, 0.06);
          border: 1px solid rgba(197, 225, 53, 0.15);
          text-align: center;
        }

        .stat-value {
          font-family: var(--font-italiana), serif;
          font-size: 36px;
          color: var(--lime);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--faint);
          text-transform: uppercase;
        }

        .certifications {
          border: 1px solid var(--border2);
          padding: 22px;
          margin-top: 24px;
        }

        .cert-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--lime);
          text-transform: uppercase;
          margin-bottom: 10px;
          font-family: var(--font-syne-mono), monospace;
        }

        .cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cert-tag {
          font-size: 11px;
          padding: 4px 10px;
          border: 1px solid var(--border2);
          color: var(--faint);
        }

        .about-img {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, var(--dim) 0%, var(--surface) 100%);
          border: 1px solid var(--border2);
          object-fit: cover;
        }

        .mission-section {
          padding: 80px 0;
          background: var(--void);
          border-top: 1px solid var(--border);
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .mission-item {
          padding: 40px 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
          text-align: center;
        }

        .mission-icon {
          font-size: 40px;
          margin-bottom: 16px;
          line-height: 1;
        }

        .mission-title {
          font-family: var(--font-italiana), serif;
          font-size: 20px;
          color: var(--white);
          margin-bottom: 12px;
        }

        .mission-desc {
          font-size: 13px;
          color: var(--off);
          line-height: 1.6;
        }

        .team-section {
          padding: 80px 0;
        }

        .team-intro {
          margin-bottom: 40px;
        }

        .team-intro p {
          font-size: 15px;
          color: var(--off);
          line-height: 1.8;
          max-width: 700px;
        }

        .team-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .highlight {
          padding: 32px;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, transparent 100%);
          border: 1px solid rgba(197, 225, 53, 0.15);
        }

        .highlight-num {
          font-family: var(--font-italiana), serif;
          font-size: 32px;
          color: var(--lime);
          margin-bottom: 8px;
        }

        .highlight-text {
          font-size: 13px;
          color: var(--off);
          line-height: 1.6;
        }

        .cta-banner {
          padding: 48px;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.1) 0%, transparent 100%);
          border: 1px solid var(--border);
          margin: 80px 0 0;
          text-align: center;
        }

        .cta-banner h3 {
          font-family: var(--font-italiana), serif;
          font-size: 32px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .cta-banner p {
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
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .mission-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .team-highlights {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="about-hero">
        <div className="wrap">
          <h1>About Beechwood</h1>
          <p>
            A quarter-century of excellence in arboricultural services, environmental stewardship, and professional expertise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Since 1998, Beechwood Trees & Landscapes has been a trusted name in professional arboricultural services across the United Kingdom. What started as a small team of passionate arborists has grown into a comprehensive organization serving thousands of clients.
              </p>
              <p>
                Our commitment to excellence, safety, and environmental responsibility has made us the go-to partner for residential, commercial, and landscape clients nationwide. With over 50 NPTC-qualified arborists and multiple industry certifications, we deliver professional solutions backed by genuine expertise.
              </p>
              <p>
                Today, we're recognized as industry leaders, honored with the Arboricultural Company of the Year award, and trusted by clients who know that Beechwood means quality, reliability, and environmental care.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-value">{COMPANY_INFO.founded}</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{COMPANY_INFO.team}</div>
                  <div className="stat-label">Team</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">🏆</div>
                  <div className="stat-label">Award 2022</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{COMPANY_INFO.rating}★</div>
                  <div className="stat-label">Google</div>
                </div>
              </div>

              <div className="certifications">
                <div className="cert-label">Certifications</div>
                <div className="cert-tags">
                  {CERTIFICATIONS.map((cert) => (
                    <span key={cert} className="cert-tag">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/6022ace5a0e25e13bab54c8e/7f055729-57ee-450c-9c93-ec4570cb0d97/Image_20240912_104912_623+%281%29.jpeg?format=750w"
                alt="About Beechwood"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-section">
        <div className="wrap">
          <div className="s-label">Our Foundation</div>
          <h2 className="display sm">Mission, Vision & Values</h2>
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">🎯</div>
              <h3 className="mission-title">Mission</h3>
              <p className="mission-desc">
                To deliver exceptional arboricultural services that enhance landscapes, ensure safety, and protect the environment through professional expertise and innovation.
              </p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">🌲</div>
              <h3 className="mission-title">Vision</h3>
              <p className="mission-desc">
                To be the UK's most trusted arboricultural partner, recognized for quality, safety, environmental responsibility, and genuine client care.
              </p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">✨</div>
              <h3 className="mission-title">Values</h3>
              <p className="mission-desc">
                Excellence, integrity, safety, environmental stewardship, and client-first service guide every decision and action we take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="wrap">
          <div className="team-intro">
            <div className="s-label">Our Team</div>
            <h2 className="display sm">Professional, Qualified & Passionate</h2>
            <p>
              Our team consists of dedicated professionals united by a passion for arboricultural excellence. With NPTC qualifications, specialized training, and years of field experience, our arborists bring expertise to every project.
            </p>
          </div>

          <div className="team-highlights">
            <div className="highlight">
              <div className="highlight-num">50+</div>
              <div className="highlight-text">NPTC Qualified Arborists on staff</div>
            </div>
            <div className="highlight">
              <div className="highlight-num">100%</div>
              <div className="highlight-text">Insurance covered for peace of mind</div>
            </div>
            <div className="highlight">
              <div className="highlight-num">24/7</div>
              <div className="highlight-text">Ready to respond to emergencies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-content">
        <div className="wrap">
          <div className="cta-banner">
            <h3>Interested in Our Services?</h3>
            <p>
              Whether it's routine maintenance or emergency response, our team is ready to help. Contact us today for a free consultation.
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
