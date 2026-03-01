/**
 * components/sections/Projects.jsx
 * ----------------------------------
 * "Selected Work" — featured project showcase.
 *
 * Desktop (≥1024px):
 *   Pinned horizontal scroll section. The section is given a large height (300vh)
 *   so the user scrolls through it vertically, but the content moves horizontally.
 *   This is achieved by the `useHorizontalScroll` hook which maps vertical scroll
 *   progress to a translateX on the cards track.
 *
 * Mobile (<1024px):
 *   Falls back to a simple vertically stacked list of cards.
 *
 * Project graphics are inline JSX for each card — replace with real screenshots
 * or images by swapping the graphic div with an <img /> tag.
 */

import SpotlightCard from '@components/ui/SpotlightCard';
import { useHorizontalScroll } from '@hooks/useHorizontalScroll';
import { PROJECTS } from '@data/constants';

/** Project-specific graphic placeholder components */
function FintechGraphic() {
  return (
    <div
      style={{
        width: 320, height: 420, borderRadius: 16,
        background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)',
        transform: 'rotate(6deg) translateX(48px)',
        padding: 16, display: 'flex', flexDirection: 'column', gap: 12,
        backdropFilter: 'blur(20px)',
      }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 2, height: 96, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.04)' }} />
        <div style={{ flex: 1, height: 96, borderRadius: 12, background: 'rgba(79,209,197,0.08)', border: '1px solid rgba(79,209,197,0.15)' }} />
      </div>
      <div style={{ height: 120, borderRadius: 12, background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ flex: 1, borderRadius: 12, background: 'rgba(255,255,255,0.04)' }} />
    </div>
  );
}

function AIGraphic() {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', width: 288, height: 288, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="spin-fast" style={{ width: 192, height: 192, borderRadius: '50%', border: '1px solid rgba(79,209,197,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>✨</div>
      </div>
    </div>
  );
}

function EcommerceGraphic() {
  return (
    <div style={{ width: 256, height: 320, borderRadius: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: 24, display: 'flex', flexDirection: 'column', backdropFilter: 'blur(20px)' }}>
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <div style={{ flex: 1, height: 96, borderRadius: 12, background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ flex: 1, height: 96, borderRadius: 12, background: 'rgba(255,255,255,0.08)' }} />
      </div>
      <div style={{ marginTop: 'auto', height: 48, borderRadius: 12, background: 'rgba(79,209,197,0.08)', border: '1px solid rgba(79,209,197,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', gap: 8 }}>
        🛒 CHECKOUT API
      </div>
    </div>
  );
}

const GRAPHICS = { fintech: FintechGraphic, ai: AIGraphic, ecommerce: EcommerceGraphic };

export default function Projects() {
  const { sectionRef, trackRef } = useHorizontalScroll();

  return (
    <>
      {/* ── Desktop horizontal scroll ── */}
      <div id="work" style={{ background: 'var(--color-bg)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <section
          ref={sectionRef}
          className="h-scroll-section"
          style={{ background: 'var(--color-bg)', height: '300vh' }}
        >
          {/* Sticky inner wrapper */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Section label header */}
            <div
              style={{
                position: 'absolute',
                top: 48,
                left: 0,
                width: '100%',
                padding: '0 48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                zIndex: 20,
              }}
            >
              <div>
                <span className="section-label">[ 06 — Featured Projects ]</span>
                <h2 className="section-title">Selected Work</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.3)' }}>
                <div
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: 'float 2s ease-in-out infinite', fontSize: 16,
                  }}
                >
                  🖱
                </div>
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Scroll to Explore
                </span>
              </div>
            </div>

            {/* Scrolling track */}
            <div
              ref={trackRef}
              className="h-scroll-track"
              style={{ transition: 'transform 0.05s linear' }}
            >
              {PROJECTS.map((project, i) => {
                const Graphic = GRAPHICS[project.graphic] || (() => null);
                return (
                  <SpotlightCard
                    key={i}
                    className="project-card"
                    style={{
                      borderRadius: 40,
                      padding: 64,
                      position: 'relative',
                      display: 'flex',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: '#050507',
                    }}
                  >
                    {/* Content left */}
                    <div
                      style={{
                        width: '45%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        zIndex: 10,
                        height: '100%',
                      }}
                    >
                      <div>
                        {/* Tag */}
                        <div
                          style={{
                            display: 'inline-flex',
                            padding: '6px 12px',
                            borderRadius: 9999,
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginBottom: 32,
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.7)',
                            fontFamily: 'var(--font-mono)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {project.tag}
                        </div>

                        <h3
                          style={{
                            fontSize: '2.25rem',
                            color: '#fff',
                            fontWeight: 500,
                            marginBottom: 16,
                            letterSpacing: '-0.03em',
                            fontFamily: 'var(--font-display)',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-dim)', lineHeight: 1.75, marginBottom: 24 }}>
                          {project.desc}
                        </p>

                        {/* Meta */}
                        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 16 }}>
                          {[
                            ['Stack',   project.stack,   true],
                            ['Feature', project.feature, false],
                            ['Impact',  project.impact,  false],
                          ].map(([label, val, isAccent]) => (
                            <div key={label} style={{ fontSize: '0.75rem', marginBottom: 12 }}>
                              <span style={{ color: 'rgba(255,255,255,0.45)', display: 'inline-block', width: 64 }}>
                                {label}:
                              </span>
                              <span
                                style={{
                                  color: isAccent ? 'var(--color-accent)' : '#fff',
                                  fontFamily: isAccent ? 'var(--font-mono)' : 'var(--font-display)',
                                }}
                              >
                                {val}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA link */}
                      <a
                        href="/projects"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 12,
                          color: '#fff',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          textDecoration: 'none',
                          fontFamily: 'var(--font-display)',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                      >
                        View Case Study ↗
                      </a>
                    </div>

                    {/* Visual right */}
                    <div
                      style={{
                        position: 'absolute',
                        right: 0, top: 0, bottom: 0,
                        width: '55%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(to left, rgba(255,255,255,0.015), transparent)',
                        overflow: 'hidden',
                      }}
                    >
                      <Graphic />
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ── Mobile fallback ── */}
      <section
        className="mobile-projects"
        style={{ padding: '80px 24px', background: 'var(--color-bg)', display: 'none' }}
      >
        <span className="section-label">[ Featured Projects ]</span>
        {PROJECTS.map((project, i) => (
          <SpotlightCard
            key={i}
            style={{
              borderRadius: 24,
              padding: 32,
              marginBottom: 24,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div
              style={{
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              {project.tag}
            </div>
            <h3
              style={{
                fontSize: '1.5rem',
                color: '#fff',
                fontWeight: 500,
                marginBottom: 8,
                fontFamily: 'var(--font-display)',
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-dim)' }}>
              {project.desc}
            </p>
          </SpotlightCard>
        ))}
      </section>
    </>
  );
}
