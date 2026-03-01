/**
 * components/sections/Advantage.jsx
 * -----------------------------------
 * "Our Execution Advantage" — side-by-side comparison between
 * Market Agencies and XSTN's approach.
 *
 * Layout: Two SpotlightCards side by side in a 2-column grid.
 * The XSTN card has accent border/glow to visually distinguish it.
 * Data is imported from constants.js (MARKET_CONS, XSTN_PROS).
 */

import SpotlightCard from '@components/ui/SpotlightCard';
import { MARKET_CONS, XSTN_PROS } from '@data/constants';

export default function Advantage() {
  return (
    <section
      id="advantage"
      style={{
        padding: '128px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="section-label">[ Comparison ]</span>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Our Execution Advantage
          </h2>
          <p
            style={{
              color: 'var(--color-dim)',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              maxWidth: '40rem',
              margin: '0 auto',
            }}
          >
            Our operational efficiency allows us to deliver enterprise-level quality
            with optimized cost structures — without compromising performance or scalability.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="compare-grid">

          {/* Market Agencies — muted */}
          <SpotlightCard
            style={{
              borderRadius: 32,
              padding: 40,
              borderColor: 'rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.01)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                }}
              >
                🏢
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Market Agencies
              </h3>
            </div>

            {MARKET_CONS.map((text, i) => (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}
              >
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 20, flexShrink: 0 }}>✕</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-display)' }}>
                  {text}
                </span>
              </div>
            ))}
          </SpotlightCard>

          {/* XSTN — highlighted */}
          <SpotlightCard
            style={{
              borderRadius: 32,
              padding: 40,
              border: 'var(--border-accent)',
              background: 'rgba(79,209,197,0.02)',
              boxShadow: '0 0 40px rgba(79,209,197,0.05)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent glow blob */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 128,
                height: 128,
                background: 'var(--color-accent-10)',
                filter: 'blur(48px)',
                borderRadius: '50%',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 32,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--color-accent-10)',
                  border: 'var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                }}
              >
                ⚡
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                }}
              >
                XSTN
              </h3>
            </div>

            {XSTN_PROS.map((text, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  marginBottom: 24,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <span style={{ color: 'var(--color-accent)', fontSize: 20, flexShrink: 0 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-display)' }}>
                  {text}
                </span>
              </div>
            ))}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
