/**
 * pages/PartnerPage.jsx
 * ----------------------
 * Partner With Us page: 3 partner types with benefits.
 * Revenue model described professionally without exposing internal percentages.
 */
import PageHero      from '@components/ui/PageHero';
import SpotlightCard from '@components/ui/SpotlightCard';
import { PARTNER_TYPES } from '@data/constants';

const C = {
  accent:  'var(--color-accent)',
  dim:     'var(--color-dim)',
  display: "'Syne',sans-serif",
  mono:    "'DM Mono',monospace",
};

export default function PartnerPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <PageHero
        label="Partner With Us"
        title="Strategic Collaboration Opportunities"
        subtitle="We build long-term structured partnerships with referral networks, internship providers, and technology collaborators."
      />

      {/* Partner type cards */}
      <section style={{ padding: '96px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="partner-types-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PARTNER_TYPES.map((type, i) => (
            <SpotlightCard
              key={i}
              style={{
                borderRadius: 24, padding: 36,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', flexDirection: 'column', gap: 20,
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(79,209,197,0.08)',
                border: '1px solid rgba(79,209,197,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
              }}>
                {type.icon}
              </div>

              <h3 style={{
                fontSize: '1.25rem', fontWeight: 600, color: '#fff',
                fontFamily: C.display, lineHeight: 1.2,
              }}>
                {type.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: C.dim, lineHeight: 1.75, fontFamily: C.display }}>
                {type.desc}
              </p>

              {/* Benefits */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20 }}>
                <div style={{
                  fontSize: '0.6rem', color: C.accent, fontFamily: C.mono,
                  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14,
                }}>
                  What You Get
                </div>
                {type.benefits.map((b, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: C.accent, fontSize: 13, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontFamily: C.display }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Revenue model note */}
      <section style={{ padding: '0 24px 80px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          padding: '32px 40px', borderRadius: 20,
          border: '1px solid rgba(79,209,197,0.2)',
          background: 'rgba(79,209,197,0.04)',
        }}>
          <div style={{
            fontSize: '0.65rem', color: C.accent, fontFamily: C.mono,
            letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16,
          }}>
            Our Collaboration Model
          </div>
          <p style={{
            fontSize: '1rem', color: 'rgba(255,255,255,0.8)',
            fontFamily: C.display, lineHeight: 1.8, fontStyle: 'italic',
          }}>
            "Our operational efficiency allows us to deliver enterprise-level quality with optimized
            cost structures. All partnership engagements are structured with clear terms, milestone
            tracking, and transparent communication — without compromising performance or scalability."
          </p>
        </div>
      </section>

      {/* How to partner CTA */}
      <section style={{ padding: '0 24px 120px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="partner-cta-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center',
        }}>
          <div>
            <span style={{
              fontSize: '0.65rem', color: C.accent, fontFamily: C.mono,
              letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 16,
            }}>
              Ready to Collaborate?
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: '#fff',
              fontFamily: C.display, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20,
            }}>
              Let's Build a Strategic Partnership
            </h2>
            <p style={{ color: C.dim, fontSize: '0.95rem', lineHeight: 1.75, fontFamily: C.display, marginBottom: 32 }}>
              Reach out via our contact page and mention "Partnership Inquiry" in your message.
              Our team will get back within 48 hours with a structured collaboration proposal.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 9999,
                background: '#fff', color: 'var(--color-bg)',
                fontWeight: 600, fontSize: '0.9rem', fontFamily: C.display,
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.accent}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              Get in Touch →
            </a>
          </div>

          {/* Right — what to expect */}
          <SpotlightCard style={{
            borderRadius: 24, padding: 36,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              fontSize: '0.65rem', color: C.accent, fontFamily: C.mono,
              letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20,
            }}>
              What to Expect
            </div>
            {[
              ['48h', 'Initial response with partnership brief'],
              ['1 Week', 'Structured proposal with terms & scope'],
              ['2 Weeks', 'Agreement + onboarding initiation'],
              ['Ongoing', 'Transparent tracking & milestone reporting'],
            ].map(([time, desc], i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                paddingBottom: 16, marginBottom: 16,
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  minWidth: 64, padding: '4px 10px', borderRadius: 8,
                  background: 'rgba(79,209,197,0.08)', border: '1px solid rgba(79,209,197,0.2)',
                  textAlign: 'center', fontSize: '0.7rem', fontWeight: 700,
                  color: C.accent, fontFamily: C.mono,
                }}>
                  {time}
                </div>
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', fontFamily: C.display, lineHeight: 1.6 }}>
                  {desc}
                </span>
              </div>
            ))}
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
