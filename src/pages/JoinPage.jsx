/**
 * pages/JoinPage.jsx
 * -------------------
 * Join Network page: process steps, selection criteria, and application form.
 * Form includes: name, email, role, portfolio link, resume upload, message.
 * Professional tone — no "student club" language per PDF requirement.
 */
import { useState } from 'react';
import PageHero    from '@components/ui/PageHero';
import SpotlightCard from '@components/ui/SpotlightCard';
import { JOIN_PROCESS, JOIN_CRITERIA } from '@data/constants';

const C = { accent:'var(--color-accent)', dim:'var(--color-dim)', display:"'Syne',sans-serif", mono:"'DM Mono',monospace" };

const inputStyle = {
  width:'100%', padding:'14px 18px', borderRadius:12,
  background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)',
  color:'#fff', fontSize:'0.9rem', fontFamily:C.display, outline:'none',
  transition:'border-color 0.2s',
};

const roles = ['Frontend Developer','Backend Developer','Full-Stack Developer',
  'AI / ML Engineer','UI/UX Designer','Mobile Developer','DevOps Engineer'];

export default function JoinPage() {
  const [form, setForm] = useState({ name:'', email:'', role:'', portfolio:'', message:'', resume:null });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(f => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // In production: POST to backend / email service
    setSubmitted(true);
  };

  return (
    <div style={{ background:'var(--color-bg)' }}>
      <PageHero
        label="Join the Network"
        title="Build Real. Get Structured."
        subtitle="We onboard performance-driven developers into structured execution teams where they gain real project exposure under supervised workflows."
      />

      {/* Process steps */}
      <section style={{ padding:'96px 24px 64px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span style={{ fontSize:'0.65rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.2em', textTransform:'uppercase' }}>
            Application Process
          </span>
          <h2 style={{ fontSize:'clamp(1.75rem,3.5vw,2.5rem)', fontWeight:500, color:'#fff',
            fontFamily:C.display, letterSpacing:'-0.03em', marginTop:12 }}>How It Works</h2>
        </div>
        <div className="process-steps-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {JOIN_PROCESS.map((step, i) => (
            <div key={i} style={{ textAlign:'center', position:'relative' }}>
              {/* Connector line */}
              {i < JOIN_PROCESS.length - 1 && (
                <div style={{ position:'absolute', top:28, left:'calc(50% + 28px)',
                  width:'calc(100% - 56px)', height:1, background:'rgba(79,209,197,0.2)' }} />
              )}
              <div style={{ width:56, height:56, borderRadius:'50%', background:'rgba(79,209,197,0.08)',
                border:'2px solid rgba(79,209,197,0.3)', display:'flex', alignItems:'center',
                justifyContent:'center', margin:'0 auto 20px', position:'relative', zIndex:1 }}>
                <span style={{ fontSize:'0.8rem', fontWeight:700, color:C.accent, fontFamily:C.mono }}>{step.step}</span>
              </div>
              <h3 style={{ fontSize:'1rem', fontWeight:600, color:'#fff', fontFamily:C.display, marginBottom:10 }}>{step.title}</h3>
              <p style={{ fontSize:'0.8rem', color:C.dim, lineHeight:1.65, fontFamily:C.display }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Criteria + Form */}
      <section style={{ padding:'0 24px 120px', maxWidth:1100, margin:'0 auto' }}>
<div className="join-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:40, alignItems:'start' }}>

          {/* Left — criteria */}
          <div>
            <span style={{ fontSize:'0.65rem', color:C.accent, fontFamily:C.mono, letterSpacing:'0.2em',
              textTransform:'uppercase', display:'block', marginBottom:20 }}>Selection Criteria</span>
            <h2 style={{ fontSize:'1.75rem', fontWeight:500, color:'#fff', fontFamily:C.display,
              letterSpacing:'-0.03em', marginBottom:32 }}>Who We're Looking For</h2>
            {JOIN_CRITERIA.map((item, i) => (
              <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:20 }}>
                <div style={{ width:24, height:24, borderRadius:'50%', background:'rgba(79,209,197,0.1)',
                  border:'1px solid rgba(79,209,197,0.3)', display:'flex', alignItems:'center',
                  justifyContent:'center', fontSize:12, color:C.accent, flexShrink:0, marginTop:2 }}>✓</div>
                <span style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.85)', fontFamily:C.display,
                  lineHeight:1.6 }}>{item}</span>
              </div>
            ))}

            <div style={{ marginTop:36, padding:24, borderRadius:16, background:'rgba(79,209,197,0.05)',
              border:'1px solid rgba(79,209,197,0.15)' }}>
              <p style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.7)', fontFamily:C.display,
                lineHeight:1.7, fontStyle:'italic' }}>
                "We combine execution discipline with innovation speed. Every network member operates within structured workflows to ensure consistent delivery quality."
              </p>
            </div>
          </div>

          {/* Right — Application form */}
          <SpotlightCard style={{ borderRadius:24, padding:40, border:'1px solid rgba(255,255,255,0.08)',
            background:'rgba(255,255,255,0.02)' }}>
            {submitted ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <div style={{ fontSize:56, marginBottom:20 }}>✅</div>
                <h3 style={{ fontSize:'1.5rem', fontWeight:600, color:'#fff', fontFamily:C.display, marginBottom:12 }}>
                  Application Received
                </h3>
                <p style={{ color:C.dim, fontFamily:C.display, lineHeight:1.7 }}>
                  Thank you for applying to XSTN. Our team will review your application and get back to you within 3–5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize:'1.25rem', fontWeight:600, color:'#fff', fontFamily:C.display, marginBottom:28 }}>
                  Apply to Join XSTN Network
                </h3>

                {/* Name + Email */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
                  <div>
                    <label style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                      letterSpacing:'0.1em', display:'block', marginBottom:8 }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your full name" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.accent}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                      letterSpacing:'0.1em', display:'block', marginBottom:8 }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="you@email.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.accent}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                </div>

                {/* Role */}
                <div style={{ marginBottom:16 }}>
                  <label style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                    letterSpacing:'0.1em', display:'block', marginBottom:8 }}>Role Applying For *</label>
                  <select name="role" required value={form.role} onChange={handleChange}
                    style={{ ...inputStyle, cursor:'pointer' }}
                    onFocus={e => e.target.style.borderColor = C.accent}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                    <option value="" style={{ background:'#111' }}>Select your domain</option>
                    {roles.map(r => <option key={r} value={r} style={{ background:'#111' }}>{r}</option>)}
                  </select>
                </div>

                {/* Portfolio */}
                <div style={{ marginBottom:16 }}>
                  <label style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                    letterSpacing:'0.1em', display:'block', marginBottom:8 }}>Portfolio / GitHub Link *</label>
                  <input name="portfolio" required value={form.portfolio} onChange={handleChange}
                    placeholder="https://github.com/yourprofile" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.accent}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>

                {/* Resume upload */}
                <div style={{ marginBottom:16 }}>
                  <label style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                    letterSpacing:'0.1em', display:'block', marginBottom:8 }}>Resume / CV (PDF) *</label>
                  <label style={{ ...inputStyle, display:'flex', alignItems:'center', gap:12, cursor:'pointer',
                    borderStyle:'dashed', padding:'16px 18px' }}>
                    <span style={{ fontSize:20 }}>📎</span>
                    <span style={{ color: form.resume ? C.accent : 'rgba(255,255,255,0.35)', fontSize:'0.85rem' }}>
                      {form.resume ? form.resume.name : 'Click to upload your resume (PDF, max 5MB)'}
                    </span>
                    <input type="file" name="resume" accept=".pdf" required onChange={handleChange}
                      style={{ display:'none' }} />
                  </label>
                </div>

                {/* Message */}
                <div style={{ marginBottom:28 }}>
                  <label style={{ fontSize:'0.7rem', color:C.dim, fontFamily:C.mono, textTransform:'uppercase',
                    letterSpacing:'0.1em', display:'block', marginBottom:8 }}>Why XSTN? *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                    placeholder="Tell us about your experience, what you want to build, and why you want to join XSTN..."
                    style={{ ...inputStyle, resize:'vertical', minHeight:100 }}
                    onFocus={e => e.target.style.borderColor = C.accent}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>

                <button type="submit" className="btn-wrap" style={{ width:'100%', padding:'16px',
                  borderRadius:12, background:'#fff', color:'var(--color-bg)', fontWeight:600,
                  fontSize:'0.95rem', fontFamily:C.display, border:'none', cursor:'pointer',
                  transition:'transform 0.2s', position:'relative', overflow:'hidden' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.01)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                  <div className="btn-fill" />
                  <span style={{ position:'relative', zIndex:1 }}>Submit Application →</span>
                </button>
              </form>
            )}
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
