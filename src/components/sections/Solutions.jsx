/**
 * components/sections/Solutions.jsx
 * -----------------------------------
 * "Engineering at Core" — showcases all service offerings in a responsive grid.
 *
 * Layout:
 *   - 4-column grid on desktop (lg+)
 *   - 2-column on tablet
 *   - 1-column stacked on mobile
 *   - "Wide" cards span 2 columns via gridColumn: 'span 2'
 *
 * Each card uses SpotlightCard for the mouse-tracking glow border effect.
 * Data is imported from constants.js — add/edit/remove entries there.
 */

import SpotlightCard from '@components/ui/SpotlightCard';
import { SOLUTIONS } from '@data/constants';

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Section header */}
        <div
          style={{
            marginBottom: 64,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
          }}
        >
          <div>
            <span className="section-label">[ Solutions We Deliver ]</span>
            <h2 className="section-title">Engineering at Core</h2>
          </div>
          <p
            style={{
              color: 'var(--color-dim)',
              fontSize: '0.875rem',
              maxWidth: 380,
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              paddingLeft: 24,
            }}
          >
            Every solution is engineered with scalability, security, and performance at its core.
          </p>
        </div>

        {/* Card grid */}
        <div className="solutions-grid">
          {SOLUTIONS.map((service, i) => (
            <SpotlightCard
              key={i}
              style={{
                gridColumn: service.wide ? 'span 2' : 'span 1',
                padding: 32,
                minHeight: service.wide ? 280 : 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 24,
                borderColor: 'rgba(255,255,255,0.05)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03), transparent)',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: service.wide ? 48 : 40,
                  height: service.wide ? 48 : 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: service.wide ? 22 : 18,
                }}
              >
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: service.wide ? '1.5rem' : '1.25rem',
                    fontWeight: 500,
                    color: '#fff',
                    marginBottom: 8,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {service.title}
                </h3>
                {service.desc && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-dim)' }}>
                    {service.desc}
                  </p>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
