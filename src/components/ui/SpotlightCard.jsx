/**
 * components/ui/SpotlightCard.jsx
 * --------------------------------
 * Reusable card component with a mouse-tracking radial gradient border effect.
 *
 * The CSS ::before pseudo-element renders a glowing border that only
 * illuminates near the cursor position. This is achieved by:
 *   1. Setting CSS custom properties --mx / --my on mousemove
 *   2. Referencing those vars in the radial-gradient in globals.css
 *
 * Props:
 *   children   {ReactNode}  Card content
 *   className  {string}     Additional CSS classes
 *   style      {object}     Inline style overrides
 *   onClick    {function}   Optional click handler
 *
 * @example
 * <SpotlightCard className="rounded-xl p-8">
 *   <h3>Card Title</h3>
 * </SpotlightCard>
 */

import { useRef } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  style = {},
  onClick,
}) {
  const ref = useRef(null);

  /** Update --mx / --my custom properties relative to the card's bounding box */
  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
