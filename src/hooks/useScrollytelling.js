/**
 * hooks/useScrollytelling.js
 * --------------------------
 * Custom React hook that uses IntersectionObserver to progressively
 * reveal "word" elements as a section scrolls into the viewport.
 *
 * Usage:
 *   const { containerRef, litCount } = useScrollytelling({ wordCount: 10 });
 *
 *   In JSX:
 *   <div ref={containerRef}>
 *     {words.map((w, i) => (
 *       <span className={`word ${i < litCount ? 'lit' : ''}`}>{w}</span>
 *     ))}
 *   </div>
 *
 * @param {Object} options
 * @param {number} options.wordCount   - Total number of words to reveal
 * @param {number} options.threshold   - IntersectionObserver threshold (0–1)
 * @param {number} options.staggerMs   - Milliseconds between each word reveal
 */

import { useRef, useState, useEffect } from 'react';

export function useScrollytelling({
  wordCount = 10,
  threshold = 0.3,
  staggerMs = 90,
} = {}) {
  const containerRef = useRef(null);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger-reveal each word
          Array.from({ length: wordCount }).forEach((_, i) => {
            setTimeout(() => {
              setLitCount(n => Math.max(n, i + 1));
            }, i * staggerMs);
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [wordCount, threshold, staggerMs]);

  return { containerRef, litCount };
}
