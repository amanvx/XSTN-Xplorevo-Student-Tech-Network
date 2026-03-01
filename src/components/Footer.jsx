/**
 * components/Footer.jsx
 * ----------------------
 * Site footer with all nav links, contact info, and copyright.
 */
import { Link } from 'react-router-dom';
import PingDot from '@components/ui/PingDot';
import { NAV_LINKS } from '@data/constants';

const C = { accent:'var(--color-accent)', dim:'var(--color-dim)', display:"'Syne',sans-serif", mono:"'DM Mono',monospace" };

export default function Footer() {
  return (
    <footer style={{ padding:'64px 24px 40px', borderTop:'1px solid rgba(255,255,255,0.05)',
      background:'var(--color-bg)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)',
        width:600, height:400, background:'rgba(79,209,197,0.04)', filter:'blur(120px)',
        borderRadius:'50%', pointerEvents:'none' }} />

      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Top row */}
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:40, marginBottom:56, flexWrap:'wrap' }}>
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <PingDot size={8} />
              <span style={{ fontFamily:C.mono, fontSize:'0.75rem', letterSpacing:'0.2em', color:'#fff' }}>XSTN</span>
            </div>
            <p style={{ fontSize:'0.85rem', color:C.dim, lineHeight:1.75, fontFamily:C.display, maxWidth:280 }}>
              Xplorevo Student Tech Network — Engineering scalable digital solutions with execution precision.
            </p>
            <p style={{ fontSize:'0.75rem', color:'rgba(255,255,255,0.3)', fontFamily:C.mono, marginTop:12 }}>
              📍 India · Remote-first
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize:'0.6rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.15em',
              textTransform:'uppercase', marginBottom:16 }}>Navigation</div>
            {NAV_LINKS.map(({ label, href }) => (
              <div key={label} style={{ marginBottom:10 }}>
                <Link to={href} style={{ fontSize:'0.875rem', color:C.dim, textDecoration:'none',
                  fontFamily:C.display, transition:'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = C.dim}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize:'0.6rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.15em',
              textTransform:'uppercase', marginBottom:16 }}>Contact</div>
            <a href="mailto:hello@xstn.in" style={{ display:'block', fontSize:'0.875rem', color:C.dim,
              textDecoration:'none', fontFamily:C.display, marginBottom:10, transition:'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = C.dim}>
              ✉ hello@xstn.in
            </a>
            <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer"
              style={{ display:'block', fontSize:'0.875rem', color:C.dim,
              textDecoration:'none', fontFamily:C.display, marginBottom:10, transition:'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#25D366'}
              onMouseLeave={e => e.target.style.color = C.dim}>
              💬 WhatsApp Chat
            </a>
            <Link to="/contact" style={{ display:'inline-flex', marginTop:8, padding:'8px 18px',
              borderRadius:9999, background:'rgba(79,209,197,0.08)', border:'1px solid rgba(79,209,197,0.2)',
              color:C.accent, fontSize:'0.75rem', fontFamily:C.display, textDecoration:'none',
              transition:'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(79,209,197,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(79,209,197,0.08)'; }}>
              Start a Project →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:24,
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <span style={{ fontSize:'0.72rem', color:'rgba(156,163,175,0.5)', fontFamily:C.mono, letterSpacing:'0.08em' }}>
            © {new Date().getFullYear()} XSTN — Xplorevo Student Tech Network. All rights reserved.
          </span>
          <span style={{ fontSize:'0.7rem', color:'rgba(156,163,175,0.35)', fontFamily:C.mono }}>
            Powered by Xplorevo Pvt Ltd
          </span>
        </div>
      </div>
    </footer>
  );
}
