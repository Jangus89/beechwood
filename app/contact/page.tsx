'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import { COMPANY_INFO } from '@/lib/services'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <style jsx>{`
        .contact-hero {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          margin-top: var(--nav-h);
          background: linear-gradient(135deg, rgba(197, 225, 53, 0.08) 0%, rgba(197, 225, 53, 0.02) 100%);
          border-bottom: 1px solid var(--border);
          padding: 80px 0;
        }

        .contact-hero h1 {
          font-family: var(--font-italiana), serif;
          font-size: clamp(44px, 5.5vw, 82px);
          line-height: 1;
          letter-spacing: -0.005em;
          color: var(--white);
          margin-bottom: 24px;
        }

        .contact-hero p {
          font-size: 16px;
          color: var(--off);
          line-height: 1.6;
          max-width: 600px;
        }

        .contact-content {
          padding: 80px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .contact-form-section h2 {
          font-family: var(--font-italiana), serif;
          font-size: 32px;
          color: var(--white);
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: var(--lime);
          text-transform: uppercase;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
          color: var(--white);
          font-family: var(--font-syne), sans-serif;
          font-size: 14px;
          transition: border-color 0.2s;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--faint);
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--lime);
          box-shadow: 0 0 0 3px rgba(197, 225, 53, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .success-message {
          padding: 16px;
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.3);
          color: #20b858;
          border-radius: 0;
          margin-top: 16px;
          font-size: 13px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .info-section h3 {
          font-family: var(--font-italiana), serif;
          font-size: 20px;
          color: var(--white);
          margin-bottom: 16px;
        }

        .info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .info-icon {
          font-size: 24px;
          line-height: 1;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .info-text {
          flex: 1;
        }

        .info-text p {
          font-size: 14px;
          color: var(--off);
          line-height: 1.6;
          margin-bottom: 4px;
        }

        .info-text a {
          color: var(--lime);
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .info-text a:hover {
          opacity: 0.8;
        }

        .service-card {
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
          cursor: pointer;
          transition: all 0.2s;
        }

        .service-card:hover {
          background: rgba(197, 225, 53, 0.08);
          border-color: var(--lime);
        }

        .service-card input {
          margin-right: 8px;
        }

        .service-card label {
          cursor: pointer;
          color: var(--white);
          font-weight: 500;
        }

        .faq-section {
          padding: 80px 0;
          background: var(--void);
          border-top: 1px solid var(--border);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .faq-item {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border2);
        }

        .faq-q {
          font-family: var(--font-italiana), serif;
          font-size: 16px;
          color: var(--lime);
          margin-bottom: 12px;
        }

        .faq-a {
          font-size: 13px;
          color: var(--off);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero">
        <div className="wrap">
          <h1>Get in Touch</h1>
          <p>
            Have questions or ready to get started? Our team is here to help. Contact us today for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="contact-content">
        <div className="wrap">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="tree-surgery">Tree Surgery</option>
                    <option value="site-clearance">Site Clearance</option>
                    <option value="emergency-response">Emergency Response</option>
                    <option value="machinery-hire">Machinery Hire</option>
                    <option value="consultancy">Arboricultural Consultancy</option>
                    <option value="commercial">Commercial Tree Surgery</option>
                    <option value="planting">Planting Services</option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="landscape">Landscape Operations</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-fill">
                    Send Message
                  </button>
                  <a href={COMPANY_INFO.whatsapp} className="btn-wa">
                    WhatsApp Instead
                  </a>
                </div>

                {submitted && (
                  <div className="success-message">
                    Thank you! We've received your message. We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="contact-info">
              <div className="info-section">
                <h3>Direct Contact</h3>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-text">
                    <p>Call us</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-text">
                    <p>Email us</p>
                    <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">💬</div>
                  <div className="info-text">
                    <p>WhatsApp</p>
                    <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Available 24/7</h3>
                <p style={{ fontSize: '13px', color: 'var(--off)', lineHeight: '1.6' }}>
                  For emergencies, our team is available 24 hours a day, 7 days a week. Call us immediately for urgent tree-related issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="wrap">
          <div className="s-label">Common Questions</div>
          <h2 className="display sm">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">How quickly can you respond to emergencies?</div>
              <div className="faq-a">
                Our emergency team is available 24/7 and typically responds within hours. Call us immediately at 0800 328 7988.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do you provide free quotes?</div>
              <div className="faq-a">
                Yes! We offer free site surveys and consultations for all projects. Contact us to schedule yours.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Are you insured?</div>
              <div className="faq-a">
                Yes, we carry comprehensive insurance covering all our services. We're also ISO 9001, 14001 & 45001 certified.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What areas do you serve?</div>
              <div className="faq-a">
                We serve all of the United Kingdom with our team of over 50 qualified arborists across multiple locations.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Can you help with planning permission?</div>
              <div className="faq-a">
                Our consultancy team can provide expert advice on planning matters and help navigate requirements.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do you recycle waste?</div>
              <div className="faq-a">
                Yes! We have an active environmental program and recycle or repurpose materials whenever possible.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
