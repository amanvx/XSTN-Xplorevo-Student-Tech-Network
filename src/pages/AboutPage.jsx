/**
 * pages/AboutPage.jsx
 * --------------------
 * Full About page: Who We Are, Vision, Mission, Founder Message, Stats.
 * Content from constants.js → ABOUT
 */
import PageHero    from '@components/ui/PageHero';
import SpotlightCard from '@components/ui/SpotlightCard';
import { ABOUT } from '@data/constants';

const C = { accent:'var(--color-accent)', dim:'var(--color-dim)', display:"'Syne',sans-serif", mono:"'DM Mono',monospace" };

export default function AboutPage() {
  return (
    <div style={{ background:'var(--color-bg)' }}>
      <PageHero
        label="About XSTN"
        title="Who We Are"
        subtitle="XSTN is a performance-driven technology execution network structured to deliver scalable digital products across industries."
      />

      {/* Vision + Mission */}
      <section style={{ padding:'96px 24px', maxWidth:1100, margin:'0 auto' }}>
        <div className="vision-mission-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
          {[
            { label:'Our Vision', icon:'🎯', text: ABOUT.vision },
            { label:'Our Mission', icon:'🚀', text: ABOUT.mission },
          ].map((item, i) => (
            <SpotlightCard key={i} style={{ borderRadius:24, padding:40,
              background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize:36, marginBottom:20 }}>{item.icon}</div>
              <div style={{ fontSize:'0.65rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.15em',
                textTransform:'uppercase', marginBottom:12 }}>{item.label}</div>
              <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.85)', lineHeight:1.75,
                fontFamily:C.display, fontWeight:300 }}>{item.text}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding:'0 24px 96px', maxWidth:1100, margin:'0 auto' }}>
          <div className="about-stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
          {ABOUT.stats.map((s, i) => (
            <SpotlightCard key={i} style={{ borderRadius:20, padding:'32px 24px', textAlign:'center',
              background:'rgba(79,209,197,0.03)', border:'1px solid rgba(79,209,197,0.15)' }}>
              <div style={{ fontSize:'2.5rem', fontWeight:700, color:C.accent, fontFamily:C.display,
                letterSpacing:'-0.04em', marginBottom:8 }}>{s.value}</div>
              <div style={{ fontSize:'0.8rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                letterSpacing:'0.1em' }}>{s.label}</div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Founder Message */}
      <section style={{ padding:'0 24px 120px', maxWidth:860, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <span style={{ fontSize:'0.65rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.2em',
            textTransform:'uppercase' }}>Founder Message</span>
        </div>
        <SpotlightCard style={{ borderRadius:28, padding:56, position:'relative', overflow:'hidden',
          background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.08)' }}>
          {/* Quote mark */}
          <div style={{ position:'absolute', top:24, left:36, fontSize:'6rem', lineHeight:1,
            color:'rgba(79,209,197,0.08)', fontFamily:'Georgia,serif', pointerEvents:'none' }}>"</div>
          <p style={{ fontSize:'1.15rem', color:'rgba(255,255,255,0.85)', lineHeight:1.85,
            fontFamily:C.display, fontWeight:300, fontStyle:'italic', position:'relative', zIndex:1,
            marginBottom:32 }}>{ABOUT.founderMessage}</p>
          <div style={{ display:'flex', alignItems:'center', gap:16, borderTop:'1px solid rgba(255,255,255,0.08)',
            paddingTop:24 }}>
            <div style={{ width:48, height:48, borderRadius:'50%', background:'rgba(79,209,197,0.1)',
              border:'1px solid rgba(79,209,197,0.3)', display:'flex', alignItems:'center',
              justifyContent:'center', fontSize:20 }}>👤</div>
            <div>
              <div style={{ fontSize:'0.9rem', fontWeight:600, color:'#fff', fontFamily:C.display }}>
                {ABOUT.founderName}
              </div>
              <div style={{ fontSize:'0.75rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.1em' }}>
                XSTN — Xplorevo Student Tech Network
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* What Clients Feel */}
      <section style={{ padding:'0 24px 120px', maxWidth:700, margin:'0 auto', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(1.5rem,3vw,2.25rem)', fontWeight:500, color:'#fff',
          fontFamily:C.display, letterSpacing:'-0.03em', marginBottom:40 }}>
          What Clients Feel When They Open Our Website
        </h2>
        <div style={{ display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap' }}>
          {['This is structured','This is serious','This is scalable'].map((t, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'16px 28px',
              borderRadius:9999, border:'1px solid rgba(79,209,197,0.25)', background:'rgba(79,209,197,0.05)' }}>
              <span style={{ color:C.accent, fontSize:18 }}>✓</span>
              <span style={{ fontSize:'1rem', fontWeight:500, color:'#fff', fontFamily:C.display }}>{t}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
