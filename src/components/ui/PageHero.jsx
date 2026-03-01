/**
 * components/ui/PageHero.jsx
 * ---------------------------
 * Reusable top hero banner for all inner pages (About, Services, etc.)
 * Shows label + heading + optional subtext with a subtle grid and glow.
 */
export default function PageHero({ label, title, subtitle }) {
  return (
    <section style={{
      position: 'relative', padding: '160px 24px 80px',
      textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Grid */}
      <div className="perspective-grid" style={{ opacity: 0.15 }} />
      {/* Glow */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
        width:500, height:300, background:'rgba(79,209,197,0.07)', borderRadius:'50%', filter:'blur(120px)', pointerEvents:'none' }} />
      <div style={{ position:'relative', zIndex:10, maxWidth:800, margin:'0 auto' }}>
        {label && (
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'5px 14px',
            borderRadius:9999, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.04)',
            marginBottom:24 }}>
            <span style={{ width:6, height:6, background:'var(--color-accent)', borderRadius:'50%',
              boxShadow:'0 0 8px var(--color-accent)' }} />
            <span style={{ fontSize:'0.6rem', letterSpacing:'0.18em', color:'rgba(255,255,255,0.8)',
              fontFamily:'var(--font-mono)', textTransform:'uppercase' }}>{label}</span>
          </div>
        )}
        <h1 style={{ fontSize:'clamp(2.5rem,6vw,4.5rem)', fontWeight:500, letterSpacing:'-0.04em',
          color:'#fff', fontFamily:'var(--font-display)', lineHeight:1.05, marginBottom:20 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize:'1.1rem', color:'var(--color-dim)', lineHeight:1.7,
            fontWeight:300, maxWidth:580, margin:'0 auto' }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
