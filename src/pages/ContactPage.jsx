/**
 * pages/ContactPage.jsx
 * ----------------------
 * Contact page with:
 *   - Form fields: Name, Company, Project Type, Budget Range, Timeline, Message
 *   - WhatsApp button integration
 *   - Corporate email display
 *   - Location: India
 */
import { useState } from 'react';
import PageHero      from '@components/ui/PageHero';
import SpotlightCard from '@components/ui/SpotlightCard';

const C = {
  accent:  'var(--color-accent)',
  dim:     'var(--color-dim)',
  display: "'Syne',sans-serif",
  mono:    "'DM Mono',monospace",
};

// ── Update these with real XSTN contact details ──────────────────────────────
const CORPORATE_EMAIL = 'hello@xstn.in';
const LOCATION        = 'India';

const PROJECT_TYPES = [
  'Enterprise Website',
  'Custom Web Application',
  'AI / Data Analytics System',
  'SaaS Platform',
  'Admin / Dashboard System',
  'Game / Interactive Platform',
  'Automation & API Integration',
  'Other / Not Sure Yet',
];

const BUDGETS = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,50,000',
  '₹2,50,000 – ₹5,00,000',
  '₹5,00,000+',
  'To be discussed',
];

const TIMELINES = [
  'ASAP (Under 2 weeks)',
  '1 Month',
  '2–3 Months',
  '3–6 Months',
  'Flexible / Long-term',
];

const inputStyle = {
  width: '100%', padding: '14px 18px', borderRadius: 12,
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff', fontSize: '0.9rem', fontFamily: C.display, outline: 'none',
  transition: 'border-color 0.2s',
};

const focusIn  = e => (e.target.style.borderColor = 'var(--color-accent)');
const focusOut = e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)');

const LabelEl = ({ children }) => (
  <label style={{
    fontSize: '0.68rem', color: C.dim, fontFamily: C.mono,
    textTransform: 'uppercase', letterSpacing: '0.12em',
    display: 'block', marginBottom: 8,
  }}>
    {children}
  </label>
);

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', company: '', projectType: '', budget: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Production: POST to backend / Formspree / EmailJS
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <PageHero
        label="Get In Touch"
        title="Let's Build Your Next Digital Product"
        subtitle="Fill in the form below and our team will get back to you with a structured proposal within 48 hours."
      />

      <section style={{ padding: '80px 24px 120px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}>

          {/* ── Left panel — quick contact ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* WhatsApp */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: 24, borderRadius: 20,
                background: 'rgba(37,211,102,0.06)',
                border: '1px solid rgba(37,211,102,0.25)',
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(37,211,102,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0,
              }}>
                💬
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#25D366', fontFamily: C.mono, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>WhatsApp</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', fontFamily: C.display }}>Chat with Us</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: C.display }}>Fastest response</div>
              </div>
            </div>

            {/* Email */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: 24, borderRadius: 20,
                background: 'rgba(79,209,197,0.04)',
                border: '1px solid rgba(79,209,197,0.2)',
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(79,209,197,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0,
              }}>
                ✉️
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: C.accent, fontFamily: C.mono, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Corporate Email</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', fontFamily: C.display }}>{CORPORATE_EMAIL}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: C.display }}>Replies within 24h</div>
              </div>
            </div>

            {/* Location */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 20,
              padding: 24, borderRadius: 20,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0,
              }}>
                📍
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: C.dim, fontFamily: C.mono, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Location</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', fontFamily: C.display }}>{LOCATION}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: C.display }}>Remote-first, global delivery</div>
              </div>
            </div>

            {/* Response promise */}
            <div style={{
              padding: '20px 24px', borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.01)',
            }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: C.display, lineHeight: 1.7 }}>
                ⏱ We respond to all project inquiries within <strong style={{ color: '#fff' }}>48 business hours</strong> with a structured proposal outline.
              </p>
            </div>
          </div>

          {/* ── Right panel — form ── */}
          <SpotlightCard style={{
            borderRadius: 24, padding: 40,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 64, marginBottom: 24 }}>🚀</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fff', fontFamily: C.display, marginBottom: 16 }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: C.dim, fontFamily: C.display, lineHeight: 1.8, maxWidth: 420, margin: '0 auto 32px' }}>
                  Thank you for reaching out. Our team will review your project requirements and respond with a structured proposal within 48 hours.
                </p>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', fontFamily: C.display, marginBottom: 28 }}>
                  Project Inquiry Form
                </h3>

                {/* Name + Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <LabelEl>Name *</LabelEl>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="Your full name" style={inputStyle}
                      onFocus={focusIn} onBlur={focusOut} />
                  </div>
                  <div>
                    <LabelEl>Company</LabelEl>
                    <input name="company" value={form.company} onChange={handle}
                      placeholder="Company / Startup name" style={inputStyle}
                      onFocus={focusIn} onBlur={focusOut} />
                  </div>
                </div>

                {/* Project Type */}
                <div style={{ marginBottom: 16 }}>
                  <LabelEl>Project Type *</LabelEl>
                  <select name="projectType" required value={form.projectType} onChange={handle}
                    style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusIn} onBlur={focusOut}>
                    <option value="" style={{ background: '#111' }}>Select project type</option>
                    {PROJECT_TYPES.map(t => <option key={t} value={t} style={{ background: '#111' }}>{t}</option>)}
                  </select>
                </div>

                {/* Budget + Timeline */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <LabelEl>Budget Range</LabelEl>
                    <select name="budget" value={form.budget} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusIn} onBlur={focusOut}>
                      <option value="" style={{ background: '#111' }}>Select range</option>
                      {BUDGETS.map(b => <option key={b} value={b} style={{ background: '#111' }}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <LabelEl>Timeline</LabelEl>
                    <select name="timeline" value={form.timeline} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusIn} onBlur={focusOut}>
                      <option value="" style={{ background: '#111' }}>Select timeline</option>
                      {TIMELINES.map(t => <option key={t} value={t} style={{ background: '#111' }}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 28 }}>
                  <LabelEl>Project Details *</LabelEl>
                  <textarea name="message" required rows={5} value={form.message} onChange={handle}
                    placeholder="Describe your project, key requirements, any specific features or integrations needed..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={focusIn} onBlur={focusOut} />
                </div>

                {/* Submit */}
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="submit" className="btn-wrap" style={{
                    flex: 1, padding: '16px', borderRadius: 12,
                    background: '#fff', color: 'var(--color-bg)',
                    fontWeight: 600, fontSize: '0.95rem', fontFamily: C.display,
                    border: 'none', cursor: 'pointer', position: 'relative', overflow: 'hidden',
                    transition: 'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.01)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div className="btn-fill" />
                    <span style={{ position: 'relative', zIndex: 1 }}>Send Inquiry →</span>
                  </button>


                </div>
              </form>
            )}
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
