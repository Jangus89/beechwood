'use client'

import Button from '@/components/Button'
import { COMPANY_INFO } from '@/lib/services'

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Arborist',
      type: 'Full-time',
      location: 'Various UK Locations',
      description:
        'We are seeking experienced arborists with NPTC qualifications and leadership experience to lead our field teams.',
    },
    {
      title: 'Tree Surgeon',
      type: 'Full-time',
      location: 'Various UK Locations',
      description:
        'Skilled tree surgeons needed to carry out specialized work including crown reduction, felling, and climbing operations.',
    },
    {
      title: 'Ground Team Member',
      type: 'Full-time',
      location: 'Various UK Locations',
      description:
        'Support our arborists with ground operations, safety procedures, and site management. Training provided.',
    },
    {
      title: 'Operations Coordinator',
      type: 'Full-time',
      location: 'Head Office',
      description:
        'Join our office team to coordinate projects, manage schedules, and support our field operations team.',
    },
  ]

  return (
    <>
      <style jsx>{`
        .careers-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          margin-top: var(--nav-h);
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, rgba(197, 225, 53, 0.02) 100%);
          border-bottom: 1px solid var(--border);
          padding: 80px 0;
        }

        .careers-hero h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: 1;
          letter-spacing: -0.005em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .careers-hero p {
          font-size: 16px;
          color: var(--off);
          line-height: 1.6;
          max-width: 600px;
        }

        .careers-content {
          padding: 80px 0;
        }

        .careers-intro {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 80px;
          padding: 48px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
        }

        .careers-intro h2 {
          font-family: var(--font-italiana), serif;
          font-size: 36px;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .careers-intro p {
          font-size: 15px;
          color: var(--off);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .culture-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .culture-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .culture-icon {
          color: var(--lime);
          font-size: 20px;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .culture-text {
          flex: 1;
        }

        .culture-text strong {
          color: var(--white);
          display: block;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .culture-text span {
          font-size: 13px;
          color: var(--faint);
        }

        .benefits-section {
          padding: 80px 0;
          background: var(--void);
          border-top: 1px solid var(--border);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .benefit-card {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
          text-align: center;
        }

        .benefit-icon {
          font-size: 32px;
          margin-bottom: 12px;
          line-height: 1;
        }

        .benefit-title {
          font-family: var(--font-italiana), serif;
          font-size: 18px;
          color: var(--white);
          margin-bottom: 8px;
        }

        .benefit-desc {
          font-size: 12px;
          color: var(--off);
          line-height: 1.6;
        }

        .jobs-section {
          padding: 80px 0;
        }

        .job-listings {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .job-card {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
        }

        .job-title {
          font-family: var(--font-italiana), serif;
          font-size: 22px;
          color: var(--white);
          margin-bottom: 8px;
        }

        .job-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .job-badge {
          font-size: 11px;
          padding: 4px 10px;
          background: rgba(197, 225, 53, 0.1);
          border: 1px solid rgba(197, 225, 53, 0.2);
          color: var(--lime);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .job-desc {
          font-size: 14px;
          color: var(--off);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .job-link {
          display: inline-block;
          color: var(--lime);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: gap 0.2s;
          cursor: pointer;
        }

        .job-link:hover {
          text-decoration: underline;
        }

        .hiring-banner {
          padding: 48px;
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.1) 0%, transparent 100%);
          border: 1px solid var(--border);
          text-align: center;
          margin-top: 80px;
        }

        .hiring-banner h3 {
          font-family: var(--font-italiana), serif;
          font-size: 32px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .hiring-banner p {
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
          .careers-intro {
            grid-template-columns: 1fr;
            padding: 32px;
            gap: 32px;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .job-listings {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="careers-hero">
        <div className="wrap">
          <h1>Join Our Team</h1>
          <p>
            Be part of a growing company dedicated to arboricultural excellence, environmental stewardship, and professional growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="careers-content">
        <div className="wrap">
          <div className="careers-intro">
            <div>
              <h2>Why Work With Beechwood?</h2>
              <p>
                At Beechwood, we're building more than a business—we're building a team united by passion for trees, safety, and quality. When you join us, you're joining professionals who care about their craft.
              </p>
              <p>
                We invest in our team through ongoing training, competitive compensation, and a supportive work environment where safety and excellence are non-negotiable.
              </p>
            </div>
            <div className="culture-points">
              <div className="culture-item">
                <div className="culture-icon">✓</div>
                <div className="culture-text">
                  <strong>Professional Growth</strong>
                  <span>Continuous training and NPTC support</span>
                </div>
              </div>
              <div className="culture-item">
                <div className="culture-icon">✓</div>
                <div className="culture-text">
                  <strong>Safety First</strong>
                  <span>Industry-leading safety protocols</span>
                </div>
              </div>
              <div className="culture-item">
                <div className="culture-icon">✓</div>
                <div className="culture-text">
                  <strong>Competitive Pay</strong>
                  <span>Fair compensation and benefits</span>
                </div>
              </div>
              <div className="culture-item">
                <div className="culture-icon">✓</div>
                <div className="culture-text">
                  <strong>Team Environment</strong>
                  <span>Supportive, collaborative culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="wrap">
          <div className="s-label">Benefits & Perks</div>
          <h2 className="display sm">What We Offer</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Competitive Salary</h3>
              <p className="benefit-desc">
                Industry-competitive compensation based on experience and qualifications.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏥</div>
              <h3 className="benefit-title">Health Benefits</h3>
              <p className="benefit-desc">
                Comprehensive health and wellness support for you and your family.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3 className="benefit-title">Training & Development</h3>
              <p className="benefit-desc">
                Ongoing professional development and qualification support.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3 className="benefit-title">Career Growth</h3>
              <p className="benefit-desc">
                Clear pathways for advancement and leadership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="jobs-section">
        <div className="wrap">
          <div className="s-label">Current Openings</div>
          <h2 className="display sm">Join Our Growing Team</h2>
          <div className="job-listings">
            {jobs.map((job, idx) => (
              <div key={idx} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <span className="job-badge">{job.type}</span>
                  <span className="job-badge" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                    {job.location}
                  </span>
                </div>
                <p className="job-desc">{job.description}</p>
                <a href={`mailto:${COMPANY_INFO.email}?subject=Application for ${job.title}`} className="job-link">
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-content">
        <div className="wrap">
          <div className="hiring-banner">
            <h3>Don't See Your Role?</h3>
            <p>
              We're always looking for talented individuals who share our passion for excellence. Send us your CV and let's talk about opportunities.
            </p>
            <div className="cta-buttons">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Career Inquiry`}
                className="btn-fill"
              >
                Send Your CV
              </a>
              <Button href="tel:08003287988" variant="ghost">
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
