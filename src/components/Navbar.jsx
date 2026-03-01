/**
 * components/Navbar.jsx
 * ----------------------
 * Fixed top navigation. Uses React Router <Link> for SPA routing.
 * 7 nav links from constants.js + "Start Project" CTA.
 * On mobile collapses to a hamburger menu.
 */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PingDot from '@components/ui/PingDot';
import { NAV_LINKS } from '@data/constants';

const C = { accent: 'var(--color-accent)', mono: "'DM Mono',monospace", display: "'Syne',sans-serif" };

export default function Navbar({ visible }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const baseStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.8s cubic-bezier(0.19,1,0.22,1)',
    pointerEvents: visible ? 'auto' : 'none',
  };

  return (
    <>
      {/* Logo */}
      <div style={{ position:'fixed', top:28, left:28, zIndex:100, ...baseStyle }}>
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', color:'#fff' }}>
          <PingDot size={10} />
          <span style={{ fontFamily:C.mono, fontSize:'0.7rem', letterSpacing:'0.2em' }}>XSTN</span>
        </Link>
      </div>

      {/* Desktop nav pill — center */}
      <nav style={{ position:'fixed', top:24, left:0, right:0, zIndex:100,
        display:'flex', justifyContent:'center', ...baseStyle }}>
        <div style={{
          display:'flex', alignItems:'center', gap:2, padding:'6px',
          borderRadius:9999, border:'1px solid rgba(255,255,255,0.1)',
          background:'rgba(255,255,255,0.03)', backdropFilter:'blur(20px)',
          boxShadow:'0 25px 50px rgba(0,0,0,0.4)',
        }}>
          {NAV_LINKS.slice(0, 5).map(({ label, href }) => {
            const active = location.pathname === href;
            return (
              <Link key={label} to={href} style={{
                padding:'8px 16px', fontSize:'0.7rem', fontWeight:500,
                color: active ? '#fff' : 'rgba(255,255,255,0.6)',
                borderRadius:9999, textDecoration:'none', fontFamily:C.display,
                background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                transition:'all 0.2s', whiteSpace:'nowrap',
              }}
                onMouseEnter={e => { if (!active) { e.target.style.color='#fff'; e.target.style.background='rgba(255,255,255,0.05)'; }}}
                onMouseLeave={e => { if (!active) { e.target.style.color='rgba(255,255,255,0.6)'; e.target.style.background='transparent'; }}}
              >
                {label}
              </Link>
            );
          })}
          <div style={{ width:1, height:14, background:'rgba(255,255,255,0.1)', margin:'0 4px' }} />
          <Link to="/contact" style={{
            padding:'8px 20px', fontSize:'0.72rem', fontWeight:600,
            color:'var(--color-bg)', background:'#fff', borderRadius:9999,
            textDecoration:'none', fontFamily:C.display, transition:'background 0.2s',
            boxShadow:'0 0 20px rgba(255,255,255,0.15)',
          }}
            onMouseEnter={e => e.target.style.background = C.accent}
            onMouseLeave={e => e.target.style.background = '#fff'}
          >
            Start Project
          </Link>
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        style={{
          position:'fixed', top:22, right:24, zIndex:101, ...baseStyle,
          background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
          borderRadius:10, width:40, height:40, cursor:'pointer',
          display:'none', alignItems:'center', justifyContent:'center',
          color:'#fff', fontSize:20,
          // Show on mobile via media query workaround — use CSS class below
        }}
        className="hamburger-btn"
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position:'fixed', inset:0, zIndex:99, background:'rgba(2,2,3,0.97)',
          backdropFilter:'blur(20px)', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', gap:8,
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} to={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize:'1.5rem', fontWeight:500, color:'rgba(255,255,255,0.85)',
                textDecoration:'none', fontFamily:C.display, padding:'12px 0',
                transition:'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = C.accent}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
