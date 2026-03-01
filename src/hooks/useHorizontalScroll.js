/**
 * hooks/useHorizontalScroll.js
 * ----------------------------
 * Custom React hook that converts vertical scroll into horizontal
 * translation for a "pinned" section (like the Projects carousel).
 *
 * How it works:
 *   - Attaches a passive scroll listener to window
 *   - When the section's top edge reaches the viewport top, it starts tracking
 *   - Progress is computed as: -rect.top / (rect.height - viewport.height)
 *   - The track div is translated leftward by progress × maxScroll
 *
 * Usage:
 *   const { sectionRef, trackRef } = useHorizontalScroll();
 *
 *   <section ref={sectionRef} style={{ height: '300vh' }}>
 *     <div ref={trackRef}> ...cards... </div>
 *   </section>
 *
 * Note: Only activates on screens wider than 1024px (desktop).
 */

import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop || !sectionRef.current || !trackRef.current) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;
          const track   = trackRef.current;
          if (!section || !track) return;

          const rect      = section.getBoundingClientRect();
          const maxScroll = track.scrollWidth - window.innerWidth + 100;

          // Only translate while section is "pinned"
          if (rect.top <= 0 && rect.bottom > window.innerHeight) {
            const progress = Math.min(1, -rect.top / (rect.height - window.innerHeight));
            track.style.transform = `translateX(${-progress * maxScroll}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { sectionRef, trackRef };
}
