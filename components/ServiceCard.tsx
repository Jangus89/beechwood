'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  name: string
  slug: string
  shortDescription: string
  icon?: string
}

export default function ServiceCard({
  name,
  slug,
  shortDescription,
  icon,
}: ServiceCardProps) {
  return (
    <style jsx>{`
      .service-card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 32px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border2);
        cursor: pointer;
        transition: all 0.3s;
        text-decoration: none;
        color: inherit;
      }

      .service-card:hover {
        background: rgba(197, 225, 53, 0.08);
        border-color: var(--lime);
        transform: translateY(-4px);
      }

      .service-icon {
        font-size: 32px;
        line-height: 1;
      }

      .service-name {
        font-family: var(--font-italiana), serif;
        font-size: 24px;
        color: var(--white);
        line-height: 1.2;
        letter-spacing: -0.005em;
      }

      .service-desc {
        font-size: 14px;
        color: var(--off);
        line-height: 1.6;
      }

      .service-arrow {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        color: var(--lime);
        font-size: 14px;
        font-weight: 600;
        margin-top: auto;
        transition: gap 0.2s;
      }

      .service-card:hover .service-arrow {
        gap: 12px;
      }
    `}</style>

    <Link href={`/services/${slug}`} className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3 className="service-name">{name}</h3>
      <p className="service-desc">{shortDescription}</p>
      <div className="service-arrow">
        Learn More <span>→</span>
      </div>
    </Link>
  )
}
