/**
 * components/ui/PingDot.jsx
 * --------------------------
 * Animated status indicator dot with a pulsing ping/ripple ring.
 * Used in the navbar logo and section labels throughout the page.
 *
 * Props:
 *   size   {number}  Diameter of the dot in px (default: 8)
 *   color  {string}  CSS color value (default: '#4FD1C5')
 *
 * @example
 * <PingDot size={12} color="#4FD1C5" />
 */

export default function PingDot({ size = 8, color = '#4FD1C5' }) {
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* Ripple ring */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: color,
          opacity: 0.75,
          animation: 'ping 2s cubic-bezier(0,0,.2,1) infinite',
        }}
      />
      {/* Solid core */}
      <span
        style={{
          position: 'relative',
          borderRadius: '50%',
          width: size,
          height: size,
          background: color,
          boxShadow: `0 0 12px ${color}`,
          display: 'inline-flex',
        }}
      />
    </span>
  );
}
