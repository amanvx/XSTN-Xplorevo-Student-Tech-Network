/**
 * components/sections/CTASections.jsx
 * -------------------------------------
 * Two CTA sections near the bottom of the page:
 *
 * 1. CommunityCTA — "Join the Network"
 *    Invites developers / designers to collaborate with XSTN.
 *    Displayed inside a large SpotlightCard with accent glow.
 *
 * 2. FinalCTA — "Let's Build Your Next Digital Product"
 *    The primary conversion CTA at the bottom of the page.
 *    Large heading with a gradient fade, prominent button with hover fill effect.
 */

import SpotlightCard from '@components/ui/SpotlightCard';
import { useNavigate } from 'react-router-dom';

export function CommunityCTA() {
  const navigate = useNavigate();
  return (
    <section style={{ padding: '96px 24px' }}>
      <SpotlightCard
        style={{
          maxWidth: 900,
          margin: '0 auto',
          borderRadius: 32,
          padding: '80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05), transparent)',
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at top, rgba(79,209,197,0.1), transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: 24,
              fontFamily: 'var(--font-display)',
            }}
          >
            Join the Network
          </h2>
          <p
            style={{
              color: 'var(--color-dim)',
              fontSize: '1.1rem',
              maxWidth: '32rem',
              margin: '0 auto 40px',
              fontWeight: 300,
            }}
          >
            We collaborate with developers, designers, and innovators who want to build
            real-world technology solutions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <button
              style={{
                padding: '14px 32px',
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                transition: 'background 0.2s',
              }}
              onClick={() => navigate('/join')}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              Join as Developer
            </button>
            <button
              style={{
                padding: '14px 32px',
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                transition: 'all 0.2s',
              }}
              onClick={() => navigate('/join')}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }}
            >
              Explore Internship Program
            </button>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}

export function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section
      id="contact"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent glow from bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(79,209,197,0.05), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 800 }}>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 500,
            letterSpacing: '-0.05em',
            color: '#fff',
            marginBottom: 40,
            lineHeight: 1,
            fontFamily: 'var(--font-display)',
          }}
        >
          Let's Build Your Next
          <br />
          {/* Fading gradient + italic serif for "Digital Product" */}
          <span
            style={{
              background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.25))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
            }}
          >
            Digital Product
          </span>
        </h2>

        <button
          className="btn-wrap"
          style={{
            padding: '20px 48px',
            background: '#fff',
            color: 'var(--color-bg)',
            borderRadius: 9999,
            border: 'none',
            fontWeight: 600,
            fontSize: '1.125rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-display)',
            boxShadow: '0 0 60px -15px rgba(255,255,255,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onClick={() => navigate('/contact')}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 80px -15px rgba(79,209,197,0.5)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 60px -15px rgba(255,255,255,0.4)';
          }}
        >
          <div className="btn-fill" />
          <span style={{ position: 'relative', zIndex: 1 }}>Request Consultation →</span>
        </button>
      </div>
    </section>
  );
}
