/**
 * pages/ProjectsPage.jsx
 * -----------------------
 * Full portfolio / projects page with case study cards.
 * Each card shows: Name, Tag, Stack, Feature, Impact, Challenge, Solution.
 */
import PageHero    from '@components/ui/PageHero';
import SpotlightCard from '@components/ui/SpotlightCard';
import { PROJECTS_FULL } from '@data/constants';

const C = { accent:'var(--color-accent)', dim:'var(--color-dim)', display:"'Syne',sans-serif", mono:"'DM Mono',monospace" };

export default function ProjectsPage() {
  return (
    <div style={{ background:'var(--color-bg)' }}>
      <PageHero
        label="Our Work"
        title="Selected Work"
        subtitle="Real projects. Real impact. Each case study documents the challenge, our approach, and the measurable result."
      />

      <section style={{ padding:'80px 24px 120px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:40 }}>
          {PROJECTS_FULL.map((p, i) => (
            <SpotlightCard key={i} style={{ borderRadius:28, padding:48, overflow:'hidden',
              border:'1px solid rgba(255,255,255,0.08)', background:'#050507' }}>
<div className="projects-detail-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start' }}>

                {/* Left */}
                <div>
                  {/* Tag + Status */}
                  <div style={{ display:'flex', gap:10, marginBottom:24 }}>
                    <span style={{ padding:'5px 14px', borderRadius:9999,
                      background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
                      fontSize:'0.6rem', color:'rgba(255,255,255,0.6)', fontFamily:C.mono,
                      textTransform:'uppercase', letterSpacing:'0.1em' }}>{p.tag}</span>
                    <span style={{ padding:'5px 14px', borderRadius:9999,
                      background:'rgba(79,209,197,0.08)', border:'1px solid rgba(79,209,197,0.25)',
                      fontSize:'0.6rem', color:C.accent, fontFamily:C.mono,
                      textTransform:'uppercase', letterSpacing:'0.1em' }}>{p.status}</span>
                  </div>

                  <h2 style={{ fontSize:'2rem', fontWeight:500, color:'#fff', fontFamily:C.display,
                    letterSpacing:'-0.03em', marginBottom:16 }}>{p.title}</h2>
                  <p style={{ fontSize:'0.9rem', color:C.dim, lineHeight:1.75, marginBottom:28 }}>{p.desc}</p>

                  {/* Meta */}
                  <div style={{ borderLeft:'2px solid rgba(79,209,197,0.3)', paddingLeft:20, marginBottom:28 }}>
                    {[['Tech Stack', p.stack, true], ['Key Feature', p.feature, false], ['Impact', p.impact, false]].map(([label, val, isAccent]) => (
                      <div key={label} style={{ marginBottom:12 }}>
                        <span style={{ fontSize:'0.6rem', color:C.dim, fontFamily:C.mono,
                          textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:4 }}>{label}</span>
                        <span style={{ fontSize:'0.875rem', color: isAccent ? C.accent : '#fff',
                          fontFamily: isAccent ? C.mono : C.display }}>{val}</span>
                      </div>
                    ))}
                  </div>

                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8,
                    padding:'12px 24px', borderRadius:9999, border:'1px solid rgba(255,255,255,0.15)',
                    color:'#fff', fontSize:'0.8rem', fontFamily:C.display, textDecoration:'none',
                    background:'rgba(255,255,255,0.05)', transition:'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}>
                    Discuss a Similar Project ↗
                  </a>
                </div>

                {/* Right — Challenge + Solution */}
                <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                  <div style={{ padding:28, borderRadius:20, background:'rgba(255,255,255,0.03)',
                    border:'1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ fontSize:'0.6rem', color:C.dim, fontFamily:C.mono, letterSpacing:'0.15em',
                      textTransform:'uppercase', marginBottom:12 }}>⚠ Challenge</div>
                    <p style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.75)', lineHeight:1.7,
                      fontFamily:C.display }}>{p.challenge}</p>
                  </div>
                  <div style={{ padding:28, borderRadius:20, background:'rgba(79,209,197,0.04)',
                    border:'1px solid rgba(79,209,197,0.15)' }}>
                    <div style={{ fontSize:'0.6rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.15em',
                      textTransform:'uppercase', marginBottom:12 }}>✓ Solution</div>
                    <p style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.85)', lineHeight:1.7,
                      fontFamily:C.display }}>{p.solution}</p>
                  </div>
                  {/* Impact stat highlight */}
                  <div style={{ padding:24, borderRadius:20, background:'rgba(255,255,255,0.02)',
                    border:'1px solid rgba(255,255,255,0.07)', textAlign:'center' }}>
                    <div style={{ fontSize:'1.5rem', fontWeight:700, color:'#fff', fontFamily:C.display,
                      letterSpacing:'-0.02em', marginBottom:6 }}>{p.impact.split(' ').slice(0,3).join(' ')}</div>
                    <div style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                      letterSpacing:'0.1em' }}>Measured Impact</div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:80 }}>
          <p style={{ color:C.dim, fontSize:'1.05rem', marginBottom:24, fontFamily:C.display }}>
            Want to build something similar?
          </p>
          <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'18px 40px',
            borderRadius:9999, background:'#fff', color:'var(--color-bg)', fontWeight:600,
            fontSize:'0.95rem', fontFamily:C.display, textDecoration:'none', transition:'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = C.accent}
            onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
            Start Your Project →
          </a>
        </div>
      </section>
    </div>
  );
}
