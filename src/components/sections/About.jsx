/**
 * components/sections/About.jsx
 * ------------------------------
 * About / company snapshot section.
 *
 * Contains two parts:
 *   1. Intro text — static company description
 *   2. Scrollytelling — "We don't just build websites. We build systems that scale."
 *      Words are revealed progressively as the section scrolls into view.
 *
 * Uses the `useScrollytelling` hook with IntersectionObserver.
 * Each word gets the `.word` class, and gains `.lit` when its index
 * is below `litCount`. Accent/italic words get extra CSS classes.
 */

import PingDot from '@components/ui/PingDot';
import { useScrollytelling } from '@hooks/useScrollytelling';
import { NARRATIVE_WORDS } from '@data/constants';

export default function About() {
  const { containerRef, litCount } = useScrollytelling({
    wordCount: NARRATIVE_WORDS.length,
    threshold: 0.3,
    staggerMs: 90,
  });

  return (
    <section
      id="network"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 20,
      }}
    >
      {/* Background radial tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(79,209,197,0.05), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '120px 24px 64px',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* ── Intro block ── */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <PingDot size={8} />
            <span
              style={{
                fontSize: '0.65rem',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              About Snapshot
            </span>
          </div>

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
            A Structured Tech Execution Network
          </h2>

          <p
            style={{
              color: 'var(--color-dim)',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              maxWidth: '48rem',
              margin: '0 auto',
              fontWeight: 300,
            }}
          >
            XSTN (Xplorevo Student Tech Network) is a structured technology execution company
            focused on delivering scalable digital solutions. We operate through a
            performance-driven model combining modern tech stacks, project governance, and
            agile workflows to ensure consistent delivery quality.
          </p>
        </div>

        {/* ── Scrollytelling narrative ── */}
        <div ref={containerRef} style={{ textAlign: 'center', marginTop: 80 }}>
          <p
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem 1rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            {NARRATIVE_WORDS.map((word, i) => (
              <span
                key={i}
                className={[
                  'word',
                  i < litCount ? 'lit' : '',
                  word.accent ? 'accent' : '',
                  word.italic ? 'italic' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {word.text}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
