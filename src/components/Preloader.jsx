/**
 * components/Preloader.jsx
 * ------------------------
 * Full-screen loading screen shown on initial page load.
 * Displays an animated counter (0 → 100%) with a progress bar,
 * then slides upward off-screen using a CSS transition.
 *
 * Animation sequence:
 *   1. Counter increments 0 → 100 over ~1.6s via setInterval
 *   2. Progress bar width mirrors the counter via inline transform
 *   3. After 100%, a 300ms pause then CSS class 'hide' triggers slide-up
 *   4. After transition completes (~950ms), component unmounts & onDone fires
 *
 * Props:
 *   onDone  {function}  Called when the preloader fully disappears
 *
 * @example
 * <Preloader onDone={() => setAppReady(true)} />
 */

import { usePreloader } from '@hooks/usePreloader';

export default function Preloader({ onDone }) {
  const { count, hiding, done } = usePreloader({ onDone });

  if (done) return null;

  return (
    <div className={`preloader ${hiding ? 'hide' : ''}`}>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* Large counter number */}
        <div
          style={{
            fontSize: 'clamp(5rem, 14vw, 12rem)',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.06)',
            fontFamily: 'var(--font-display)',
            lineHeight: 1,
          }}
        >
          {count}%
        </div>

        {/* Label + progress bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: '0.65rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            {/* Spinning refresh icon (CSS-only) */}
            <span className="spin-icon" style={{ fontSize: '1.1rem' }}>↻</span>
            System Initialization
          </div>

          {/* Progress track */}
          <div
            style={{
              width: 192,
              height: 1,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 9999,
              overflow: 'hidden',
              marginTop: 8,
            }}
          >
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, var(--color-accent), #fff)',
                transformOrigin: 'left',
                transform: `scaleX(${count / 100})`,
                transition: 'transform 0.05s linear',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
