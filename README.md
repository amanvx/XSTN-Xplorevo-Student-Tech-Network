# XSTN — Full Multi-Page Website

> Complete React website for **XSTN** (Xplorevo Student Tech Network).  
> Built with **React 18 · Vite · React Router v6**. Zero UI libraries. Pure CSS animations.

---

## 📁 Project Structure

```
xstn-full/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx          # / — Full landing page
│   │   ├── AboutPage.jsx         # /about
│   │   ├── ServicesPage.jsx      # /services
│   │   ├── ProjectsPage.jsx      # /projects
│   │   ├── JoinPage.jsx          # /join   — Application form + resume upload
│   │   ├── PartnerPage.jsx       # /partner
│   │   └── ContactPage.jsx       # /contact — Project inquiry form
│   ├── components/
│   │   ├── ui/
│   │   │   ├── SpotlightCard.jsx  # Mouse-tracking glow border card
│   │   │   ├── PingDot.jsx        # Animated status dot
│   │   │   └── PageHero.jsx       # Reusable inner-page hero banner
│   │   ├── sections/              # Home page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Solutions.jsx
│   │   │   ├── Trust.jsx
│   │   │   ├── Advantage.jsx
│   │   │   ├── Projects.jsx       # Horizontal scroll carousel (desktop)
│   │   │   ├── Testimonials.jsx
│   │   │   └── CTASections.jsx
│   │   ├── Preloader.jsx
│   │   ├── Navbar.jsx             # 7-link pill nav + mobile hamburger
│   │   └── Footer.jsx
│   ├── data/
│   │   └── constants.js           # ✏️ ALL content lives here
│   ├── hooks/
│   │   ├── usePreloader.js
│   │   ├── useScrollytelling.js
│   │   └── useHorizontalScroll.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx                    # Router + layout
│   └── main.jsx                   # Entry point
├── index.html                     # SEO meta tags + Google Fonts
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # Production build → /dist
npm run preview   # Preview production build
```

---

## 🗺 Pages & Routes

| Route       | Page          | Description                                                              |
|-------------|---------------|--------------------------------------------------------------------------|
| `/`         | Home          | Hero, About, Solutions, Trust, Advantage, Projects, Testimonials, CTAs   |
| `/about`    | About         | Vision, Mission, Founder Message, Stats                                  |
| `/services` | Services      | 7 services with includes list + tech stack chips                         |
| `/projects` | Projects      | 3 case studies — Challenge, Solution, Impact                             |
| `/join`     | Join Network  | Process steps, selection criteria, application form + resume upload      |
| `/partner`  | Partner       | 3 partner types, collaboration model, timeline                           |
| `/contact`  | Contact       | Project inquiry form — Name, Company, Type, Budget, Timeline, Message    |

---

## ✏️ Customizing Content

**All static content is in `src/data/constants.js`** — edit once, updates everywhere.

### Update contact details
Open `src/pages/ContactPage.jsx`:
```js
const CORPORATE_EMAIL = 'hello@xstn.in';   // ← your email
const LOCATION        = 'India';
```
Also update in `src/components/Footer.jsx`.

### Add a service
```js
// src/data/constants.js → SERVICES_DETAIL
{
  icon: '🔒',
  title: 'Cybersecurity Audits',
  desc: 'Full-stack security audits and penetration testing.',
  includes: ['Vulnerability Assessment', 'Pen Testing', 'Compliance Review'],
  tech: ['OWASP', 'Burp Suite', 'Node.js'],
}
```

### Add a project
```js
// src/data/constants.js → PROJECTS_FULL
{
  tag: 'EdTech Platform',
  title: 'EduCore LMS',
  desc: 'A full-featured learning management system.',
  stack: 'Next.js, Prisma, Supabase',
  feature: 'Live whiteboard sessions',
  impact: 'Served 5,000+ active learners',
  challenge: 'Needed real-time collaboration at scale.',
  solution: 'WebSocket rooms with Redis pub/sub.',
  graphic: 'ai',      // 'fintech' | 'ai' | 'ecommerce'
  status: 'Delivered',
}
```

---

## 🎨 Design System

### Accent color — change one line in `globals.css`
```css
--color-accent: #4FD1C5;
```

### Fonts
| CSS Variable     | Font             |
|------------------|------------------|
| `--font-display` | Syne             |
| `--font-mono`    | DM Mono          |
| `--font-serif`   | Instrument Serif |

---

## 🔧 Connecting the Forms (Backend — Coming Soon)

Both `ContactPage.jsx` and `JoinPage.jsx` handle form state in React.  
The `handleSubmit` functions are ready to wire to any backend.

**Option A — Custom backend (Node/Express)**
```js
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
```

**Option B — EmailJS (no backend needed)**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

**Option C — Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm run build
# Connect GitHub repo → Vercel auto-deploys on push
```
Add `vercel.json` for SPA routing:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

### Netlify
Add `public/_redirects`:
```
/*  /index.html  200
```

---

## ✅ Feature Checklist

### Home Page
- [x] Hero — headline, subheadline, CTA → `/contact`
- [x] About snapshot + scrollytelling word reveal
- [x] Solutions — 7 service cards
- [x] Why Trust XSTN — 6 checklist points
- [x] Execution Advantage — agency vs XSTN comparison
- [x] Featured Projects — horizontal scroll carousel (desktop) / stacked (mobile)
- [x] Testimonials — 3 client cards
- [x] Community CTA → `/join`
- [x] Final CTA → `/contact`

### Navigation
- [x] Pill navbar with active state
- [x] Mobile hamburger menu with full-screen overlay

### Inner Pages
- [x] About — Vision, Mission, Founder Message, Stats
- [x] Services — 7 services with includes + tech stack
- [x] Projects — Case studies with Challenge / Solution / Impact
- [x] Join Network — Process steps, criteria, application form + resume upload
- [x] Partner With Us — 3 partner types + collaboration model
- [x] Contact — 6-field project inquiry form

### Technical
- [x] React Router v6 (SPA, no page reloads)
- [x] Fully responsive (mobile, tablet, desktop)
- [x] SEO meta tags + Open Graph
- [x] CSS-only animations (no GSAP/Framer dependency)
- [x] Spotlight card mouse-tracking effect
- [x] Preloader on first home visit
- [x] Scrollytelling word reveal
- [x] Horizontal scroll project carousel
- [ ] Form backend integration (planned)

---

*XSTN — Xplorevo Student Tech Network*


---

## 🚀 Getting Started

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # Production build → /dist
npm run preview  # Preview production
```

---

## 🗺 Pages & Routes

| Route        | Page            | Content                                              |
|--------------|-----------------|------------------------------------------------------|
| `/`          | Home            | Hero, About, Solutions, Trust, Advantage, Projects, Testimonials, CTAs |
| `/about`     | About           | Who We Are, Vision, Mission, Founder Message, Stats  |
| `/services`  | Services        | 7 services with includes list + tech stack chips     |
| `/projects`  | Projects        | 3 case studies with Challenge, Solution, Impact      |
| `/join`      | Join Network    | Process steps, criteria, application form + resume upload |
| `/partner`   | Partner With Us | 3 partner types, revenue model, timeline             |
| `/contact`   | Contact         | Form (6 fields), WhatsApp button, Email, Location    |

---

## ✏️ Customizing Content

**All content is in `src/data/constants.js`** — edit once, updates everywhere.

### Update contact details (IMPORTANT)
Open `src/pages/ContactPage.jsx` and update:
```js
const WHATSAPP_NUMBER = '919000000000'; // Your WhatsApp: country code + number
const CORPORATE_EMAIL = 'hello@xstn.in'; // Your email
const LOCATION        = 'India';
```

Also update in `src/components/Footer.jsx` (same fields).

### Add a new service
```js
// src/data/constants.js → SERVICES_DETAIL array
{
  icon: '🔒',
  title: 'Cybersecurity Audits',
  desc: 'Full-stack security audits and penetration testing.',
  includes: ['Vulnerability Assessment', 'Pen Testing', 'Compliance Review'],
  tech: ['OWASP', 'Burp Suite', 'Node.js'],
}
```

### Add a new project
```js
// src/data/constants.js → PROJECTS_FULL array
{
  tag: 'EdTech Platform',
  title: 'EduCore LMS',
  desc: 'A full-featured learning management system.',
  stack: 'Next.js, Prisma, Supabase',
  feature: 'Live whiteboard sessions',
  impact: 'Served 5,000+ active learners',
  challenge: 'Needed real-time collaboration at scale.',
  solution: 'WebSocket rooms with Redis pub/sub.',
  graphic: 'ai',   // 'fintech' | 'ai' | 'ecommerce'
  status: 'Delivered',
}
```

---

## 🎨 Design System

### Accent Color
Change globally in `src/styles/globals.css`:
```css
--color-accent: #4FD1C5;  /* Change this to any color */
```

### Fonts
| Variable         | Font              |
|------------------|-------------------|
| `--font-display` | Syne              |
| `--font-mono`    | DM Mono           |
| `--font-serif`   | Instrument Serif  |

---

## 🔧 Connecting the Forms (Production)

The contact and join forms currently store state in React only.  
To make them send real emails/data:

**Option A — EmailJS (no backend needed)**
```bash
npm install @emailjs/browser
```
Replace the `handleSubmit` in `ContactPage.jsx` and `JoinPage.jsx` with:
```js
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

**Option B — Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C — Custom backend (Node/Express)**
```js
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm run build
# Connect GitHub repo to Vercel — auto-deploys on push
```
Add `vercel.json` for SPA routing:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

### Netlify
Add `public/_redirects`:
```
/*  /index.html  200
```
