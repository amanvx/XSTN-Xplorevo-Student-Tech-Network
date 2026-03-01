/**
 * components/sections/Trust.jsx
 * ------------------------------
 * "Why Businesses Choose XSTN" section.
 *
 * Two-column layout:
 *   Left  — heading + trust point checklist
 *   Right — animated visual with orbiting rings and floating info cards
 *
 * The visual uses pure CSS animations (spin-cw, spin-ccw, float-1, float-2)
 * defined in globals.css. No JS animation library required.
 */

import { TRUST_POINTS } from '@data/constants';

export default function Trust() {
  return (
    <section id="trust" style={{ padding: '128px 24px', position: 'relative', zIndex: 10 }}>
      {/* Radial accent tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at top right, rgba(79,209,197,0.05), transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="trust-grid">

          {/* ── Left: copy ── */}
          <div>
            <span className="section-label">[ Reliability ]</span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 40,
                fontFamily: 'var(--font-display)',
              }}
            >
              Why Businesses<br />
              <span
                style={{
                  background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.35))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Choose XSTN
              </span>
            </h2>

            {/* Checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem 1rem',
                marginBottom: 40,
              }}
            >
              {TRUST_POINTS.map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div
                    style={{
                      marginTop: 2,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: 'var(--color-accent-10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 11,
                      color: 'var(--color-accent)',
                    }}
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
              <p
                style={{
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                We combine execution discipline with innovation speed.
              </p>
            </div>
          </div>

          {/* ── Right: animated visual ── */}
          <div
            style={{
              position: 'relative',
              borderRadius: 32,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.01)',
              backdropFilter: 'blur(8px)',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 120%, rgba(79,209,197,0.1), transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Core shield */}
            <div
              style={{
                position: 'relative',
                zIndex: 20,
                width: 128,
                height: 128,
                borderRadius: '50%',
                background: '#0A0A0C',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                fontSize: 48,
              }}
            >
              🛡
            </div>

            {/* Clockwise dashed ring */}
            <div
              className="spin-cw"
              style={{
                position: 'absolute',
                zIndex: 10,
                width: 256,
                height: 256,
                borderRadius: '50%',
                border: '1px dashed rgba(255,255,255,0.1)',
              }}
            />

            {/* Counter-clockwise solid ring with glowing dot */}
            <div
              className="spin-ccw"
              style={{
                position: 'absolute',
                zIndex: 10,
                width: 384,
                height: 384,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: -12,
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: '#0A0A0C',
                  border: '1px solid var(--color-accent)',
                  boxShadow: '0 0 15px var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{ width: 8, height: 8, background: 'var(--color-accent)', borderRadius: '50%' }}
                />
              </div>
            </div>

            {/* Floating card — Delivery */}
            <div
              className="float-1"
              style={{
                position: 'absolute',
                top: '22%',
                right: '8%',
                padding: 16,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'var(--color-accent-20)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  🚀
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      color: 'var(--color-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Delivery
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#fff',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Milestone Based
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — Architecture */}
            <div
              className="float-2"
              style={{
                position: 'absolute',
                bottom: '22%',
                left: '8%',
                padding: 16,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  ⚙
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.6rem',
                      color: 'var(--color-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Architecture
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#fff',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Scalable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
