/**
 * components/sections/Hero.jsx
 * -----------------------------
 * Full-viewport hero section. The first thing users see after the preloader.
 *
 * Visual layers (bottom → top):
 *   1. Perspective grid (CSS transform)
 *   2. Radial glow orb (blurred div)
 *   3. Centered text content
 *   4. Scroll hint at the bottom
 *
 * Entrance animation:
 *   All elements start opacity:0 / translateY(20px).
 *   The `visible` prop (set after preloader) triggers CSS transitions
 *   with staggered delays on each element.
 *
 * Props:
 *   visible  {boolean}  True after preloader completes
 */

import { useNavigate } from 'react-router-dom';

/** Inline style helper — applies fade+slide-up with a stagger delay */
const reveal = (visible, delayMs = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(20px)',
  transition: `all 0.9s cubic-bezier(0.19,1,0.22,1) ${delayMs}ms`,
});

export default function Hero({ visible }) {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div className="perspective-grid" style={{ opacity: 0.3 }} />

      {/* Center glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600,
          height: 600,
          background: 'rgba(79,209,197,0.08)',
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: 1100,
          padding: '0 24px',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '6px 16px',
            borderRadius: 9999,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            marginBottom: 40,
            ...reveal(visible, 0),
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: 'var(--color-accent)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--color-accent)',
            }}
          />
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
            }}
          >
            Xplorevo Student Tech Network
          </span>
        </div>

        {/* Heading — 3 lines */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            fontWeight: 500,
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
            marginBottom: 40,
            fontFamily: 'var(--font-display)',
          }}
        >
          <div style={{ overflow: 'hidden', paddingBottom: 6, ...reveal(visible, 100) }}>
            <span style={{ display: 'block', color: '#fff' }}>Engineering Scalable</span>
          </div>
          <div style={{ overflow: 'hidden', paddingBottom: 6, ...reveal(visible, 200) }}>
            <span className="shimmer-text" style={{ display: 'block' }}>
              Digital Solutions
            </span>
          </div>
          <div style={{ overflow: 'hidden', paddingBottom: 6, ...reveal(visible, 300) }}>
            <span
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 'clamp(1.5rem,4vw,3.5rem)',
                fontWeight: 400,
              }}
            >
              for the Next Generation
            </span>
          </div>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--color-dim)',
            maxWidth: 680,
            margin: '0 auto 56px',
            lineHeight: 1.7,
            fontWeight: 300,
            ...reveal(visible, 400),
          }}
        >
          XSTN delivers high-performance web platforms, AI-powered systems, and scalable
          digital products with execution precision and structured project management.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 24,
            ...reveal(visible, 600),
          }}
        >
          <button
            className="btn-wrap"
            onClick={() => navigate('/contact')}
            style={{
              padding: '16px 36px',
              background: '#fff',
              color: 'var(--color-bg)',
              borderRadius: 9999,
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              boxShadow: '0 0 40px -10px rgba(255,255,255,0.4)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div className="btn-fill" />
            <span style={{ position: 'relative', zIndex: 1 }}>Get a Proposal →</span>
          </button>

          <a
            href="#work"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 36px',
              borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: 'var(--font-display)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>▶</span> View Our Work
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          ...reveal(visible, 900),
        }}
      >
        <span
          style={{
            fontSize: '0.55rem',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)',
          }}
        />
      </div>
    </section>
  );
}
