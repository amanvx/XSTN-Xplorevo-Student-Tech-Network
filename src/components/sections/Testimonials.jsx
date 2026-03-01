/**
 * components/sections/Testimonials.jsx
 * --------------------------------------
 * Client testimonials / social proof section.
 * Renders a 3-column responsive grid of SpotlightCards.
 * Data is imported from constants.js — edit TESTIMONIALS to update.
 */

import SpotlightCard from '@components/ui/SpotlightCard';
import { TESTIMONIALS } from '@data/constants';

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '128px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">[ Validation ]</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        {/* Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <SpotlightCard
              key={i}
              style={{
                borderRadius: 24,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: 'rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {/* Stars */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    gap: 4,
                    marginBottom: 24,
                    color: 'var(--color-accent)',
                    fontSize: 16,
                  }}
                >
                  {'★★★★★'}
                </div>

                {/* Quote */}
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.75,
                    marginBottom: 32,
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  paddingTop: 24,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#fff',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-dim)' }}>
                    {t.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginTop: 4,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {t.area}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
