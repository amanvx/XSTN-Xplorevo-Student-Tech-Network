/**
 * pages/ServicesPage.jsx
 * -----------------------
 * Detailed services page. Each service has description, includes list, and tech stack chips.
 * Pricing positioning line included as per PDF: "Our optimized execution model..."
 */
import PageHero    from '@components/ui/PageHero';
import SpotlightCard from '@components/ui/SpotlightCard';
import { SERVICES_DETAIL } from '@data/constants';

const C = { accent:'var(--color-accent)', dim:'var(--color-dim)', display:"'Syne',sans-serif", mono:"'DM Mono',monospace" };

export default function ServicesPage() {
  return (
    <div style={{ background:'var(--color-bg)' }}>
      <PageHero
        label="What We Build"
        title="Solutions We Deliver"
        subtitle="Every solution is engineered with scalability, security, and performance at its core."
      />

      {/* Pricing positioning line */}
      <div style={{ textAlign:'center', padding:'48px 24px 0', maxWidth:700, margin:'0 auto' }}>
        <div style={{ padding:'20px 32px', borderRadius:16, border:'1px solid rgba(79,209,197,0.2)',
          background:'rgba(79,209,197,0.04)', display:'inline-block' }}>
          <p style={{ fontSize:'0.95rem', color:'rgba(255,255,255,0.7)', fontFamily:C.display,
            fontStyle:'italic', lineHeight:1.6 }}>
            "Our optimized execution model allows us to deliver enterprise-grade solutions with efficient cost structures."
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section style={{ padding:'80px 24px 120px', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:24 }}>
          {SERVICES_DETAIL.map((svc, i) => (
            <SpotlightCard key={i} style={{ borderRadius:24, padding:36,
              background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)',
              display:'flex', flexDirection:'column', gap:24 }}>

              {/* Icon + Title */}
              <div style={{ display:'flex', alignItems:'center', gap:16 }}>
                <div style={{ width:52, height:52, borderRadius:16, background:'rgba(79,209,197,0.08)',
                  border:'1px solid rgba(79,209,197,0.2)', display:'flex', alignItems:'center',
                  justifyContent:'center', fontSize:24, flexShrink:0 }}>{svc.icon}</div>
                <h3 style={{ fontSize:'1.2rem', fontWeight:600, color:'#fff', fontFamily:C.display,
                  lineHeight:1.2 }}>{svc.title}</h3>
              </div>

              {/* Description */}
              <p style={{ fontSize:'0.9rem', color:C.dim, lineHeight:1.7, fontFamily:C.display }}>{svc.desc}</p>

              {/* Includes */}
              <div>
                <div style={{ fontSize:'0.6rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.15em',
                  textTransform:'uppercase', marginBottom:12 }}>Includes</div>
                {svc.includes.map((item, j) => (
                  <div key={j} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                    <span style={{ color:C.accent, fontSize:12, flexShrink:0 }}>→</span>
                    <span style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.8)', fontFamily:C.display }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack chips */}
              <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', paddingTop:20 }}>
                <div style={{ fontSize:'0.6rem', color:C.dim, fontFamily:C.mono, letterSpacing:'0.12em',
                  textTransform:'uppercase', marginBottom:10 }}>Tech Stack</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {svc.tech.map((t, j) => (
                    <span key={j} style={{ padding:'4px 12px', borderRadius:9999,
                      background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)',
                      fontSize:'0.7rem', color:'rgba(255,255,255,0.7)', fontFamily:C.mono }}>{t}</span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding:'0 24px 120px', textAlign:'center' }}>
        <p style={{ color:C.dim, fontSize:'1rem', marginBottom:24, fontFamily:C.display }}>
          Have a project in mind? Let's discuss the right solution for you.
        </p>
        <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8,
          padding:'16px 36px', borderRadius:9999, background:'#fff', color:'var(--color-bg)',
          fontWeight:600, fontSize:'0.9rem', fontFamily:C.display, textDecoration:'none',
          transition:'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background = C.accent}
          onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
          Request Consultation →
        </a>
      </section>
    </div>
  );
}
