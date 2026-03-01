/**
 * hooks/usePreloader.js
 * ---------------------
 * Manages the preloader animation state.
 * Counts from 0 → 100 at ~60fps using setInterval,
 * then fires an onDone callback after a brief pause.
 *
 * Usage:
 *   const { count, hiding, done } = usePreloader({ onDone: () => {} });
 *
 * @param {Object}   options
 * @param {Function} options.onDone   - Callback fired when preloader finishes
 * @param {number}   options.duration - Total duration in ms (default: 1600)
 * @param {number}   options.pauseMs  - Pause before slide-out in ms (default: 300)
 */

import { useState, useEffect } from 'react';

export function usePreloader({ onDone, duration = 1600, pauseMs = 300 } = {}) {
  const [count, setCount] = useState(0);  // 0–100 counter value
  const [hiding, setHiding] = useState(false); // triggers CSS slide-up
  const [done, setDone] = useState(false);     // removes from DOM

  useEffect(() => {
    const intervalMs = duration / 100; // ms per tick
    let n = 0;

    const iv = setInterval(() => {
      n += 1;
      setCount(n);

      if (n >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          setHiding(true);           // trigger CSS translateY(-100%)
          setTimeout(() => {
            setDone(true);           // remove preloader from DOM
            onDone?.();              // notify parent
          }, 950);                   // match CSS transition duration
        }, pauseMs);
      }
    }, intervalMs);

    return () => clearInterval(iv);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { count, hiding, done };
}
