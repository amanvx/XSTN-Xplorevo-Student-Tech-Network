/**
 * data/constants.js
 * -----------------
 * Central data store for all static content used across the landing page.
 * Edit this file to update cards, projects, testimonials, and nav links
 * without touching any component files.
 */

// ── Navigation links ────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',           href: '/' },
  { label: 'About',          href: '/about' },
  { label: 'Services',       href: '/services' },
  { label: 'Projects',       href: '/projects' },
  { label: 'Partner With Us',href: '/partner' },
  { label: 'Join Network',   href: '/join' },
  { label: 'Contact',        href: '/contact' },
];

// ── Scrollytelling words in the About section ────────────────────────────────
export const NARRATIVE_WORDS = [
  { text: "We",        accent: false, italic: false },
  { text: "don't",     accent: false, italic: false },
  { text: "just",      accent: false, italic: false },
  { text: "build",     accent: false, italic: false },
  { text: "websites.", accent: false, italic: false },
  { text: "We",        accent: false, italic: false },
  { text: "build",     accent: false, italic: false },
  { text: "systems",   accent: true,  italic: false },
  { text: "that",      accent: false, italic: false },
  { text: "scale.",    accent: true,  italic: true  },
];

// ── Service / Solution cards ─────────────────────────────────────────────────
export const SOLUTIONS = [
  {
    icon: '🖥',
    title: 'Enterprise Websites',
    desc: 'High-performance corporate platforms engineered for speed, SEO, and global scale.',
    wide: true,
  },
  {
    icon: '⚡',
    title: 'Custom Web Applications',
    desc: 'Complex web apps on React, Next.js, and Node for fluid UX.',
    wide: true,
  },
  {
    icon: '🤖',
    title: 'AI & Data Analytics Systems',
    desc: 'Machine-learning pipelines and real-time analytics dashboards.',
    wide: false,
  },
  {
    icon: '☁',
    title: 'SaaS Platforms',
    desc: 'Multi-tenant cloud products with subscription management.',
    wide: false,
  },
  {
    icon: '📊',
    title: 'Admin & Dashboard Systems',
    desc: 'Internal tooling and data visualization systems.',
    wide: true,
  },
  {
    icon: '🎮',
    title: 'Game & Interactive Platforms',
    desc: 'Highly interactive environments leveraging WebGL and modern APIs.',
    wide: true,
  },
  {
    icon: '🔗',
    title: 'Automation & API Integrations',
    desc: 'Connecting fragmented tools into cohesive automated workflows.',
    wide: true,
  },
];

// ── Trust / Why XSTN bullet points ──────────────────────────────────────────
export const TRUST_POINTS = [
  'Structured Project Management',
  'Defined Milestone-Based Delivery',
  'Modern Tech Stack (React, Next.js, Node, AI)',
  'Transparent Communication',
  'Performance Optimization Focus',
  'Long-Term Scalability Planning',
];

// ── Market Agencies vs XSTN comparison ──────────────────────────────────────
export const MARKET_CONS = [
  'High overhead costs',
  'Slow communication cycles',
  'Rigid development processes',
  'Expensive long-term contracts',
];

export const XSTN_PROS = [
  'Lean execution structure',
  'Fast response cycles',
  'Agile sprint model',
  'Flexible scalable engagement',
];

// ── Featured Projects ────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    tag: 'FinTech Platform',
    title: 'Aura Pay Systems',
    desc: 'A full-scale payment dashboard handling complex data visualization and real-time transaction tracking.',
    stack: 'React, Node.js, PostgreSQL',
    feature: 'Real-time WebSockets integration',
    impact: 'Reduced query latency by 45%',
    graphic: 'fintech',
  },
  {
    tag: 'AI Application',
    title: 'Nexus Data Engine',
    desc: 'An AI-driven analytics system that processes unstructured data into actionable business intelligence metrics.',
    stack: 'Next.js, Python FastAPI, OpenAI API',
    feature: 'Automated Insight Generation',
    impact: 'Saved 20+ hours of manual analysis/wk',
    graphic: 'ai',
  },
  {
    tag: 'E-Commerce Platform',
    title: 'Lumina Marketplace',
    desc: 'A highly scalable headless e-commerce solution with dynamic inventory routing and custom checkout flows.',
    stack: 'React, Shopify Headless, AWS',
    feature: 'Microservices Architecture',
    impact: 'Supported 10x traffic spikes seamlessly',
    graphic: 'ecommerce',
  },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: "XSTN delivered our web platform with excellent structure and speed. Their project clarity and execution discipline exceeded expectations.",
    name: "James D.",
    role: "CEO, TechFlow (Beta Client)",
    area: "Web Platform",
    initials: "JD",
  },
  {
    quote: "Working with XSTN felt like having an internal senior engineering team. Communication was flawless and delivery was right on schedule.",
    name: "Sarah M.",
    role: "Founder, Lumina (Partner Project)",
    area: "E-Commerce Base",
    initials: "SM",
  },
  {
    quote: "They took our raw data requirements and built an AI integration that scaled perfectly. True execution professionals.",
    name: "Ryan K.",
    role: "Director, Nexus Data",
    area: "AI System Integration",
    initials: "RK",
  },
];

// ── About Page ───────────────────────────────────────────────────────────────
export const ABOUT = {
  vision: 'To build a next-generation tech execution ecosystem that bridges talent and industry through structured, scalable digital delivery.',
  mission: 'Deliver structured, scalable, and high-impact digital systems — powered by performance-driven execution teams.',
  founderMessage: `At XSTN, we started with a clear realization: the gap between raw technical talent and real-world execution is not a skills problem — it's a structure problem. We built XSTN to solve exactly that. Every project we take on is treated with enterprise-level governance, clear milestones, and transparent communication. We don't just deliver code — we deliver confidence.`,
  founderName: 'Founder, XSTN',
  stats: [
    { value: '15+', label: 'Projects Delivered' },
    { value: '3+', label: 'Tech Domains' },
    { value: '100%', label: 'Milestone-Based' },
    { value: '10+', label: 'Network Members' },
  ],
};

// ── Services Page ─────────────────────────────────────────────────────────────
export const SERVICES_DETAIL = [
  {
    icon: '🖥',
    title: 'Website Development',
    desc: 'We design and engineer responsive, high-performance websites optimized for SEO, security, and scalability.',
    includes: ['UI/UX Design', 'Frontend Development', 'Backend Integration', 'Admin Dashboard', 'Deployment & Optimization'],
    tech: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    icon: '⚡',
    title: 'Custom Web Applications',
    desc: 'Complex, feature-rich web applications built on modern stacks with a focus on performance, UX, and long-term maintainability.',
    includes: ['Full-Stack Development', 'REST & GraphQL APIs', 'Authentication Systems', 'Real-time Features', 'Database Architecture'],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: '🤖',
    title: 'AI & Data Analytics Systems',
    desc: 'Machine-learning pipelines, AI integrations, and real-time analytics dashboards that turn raw data into actionable intelligence.',
    includes: ['ML Model Integration', 'Data Pipeline Engineering', 'Analytics Dashboards', 'OpenAI / LLM Integration', 'Automated Reporting'],
    tech: ['Python', 'FastAPI', 'OpenAI API', 'Next.js', 'PostgreSQL'],
  },
  {
    icon: '☁',
    title: 'SaaS Platforms',
    desc: 'Multi-tenant SaaS products engineered for scale — from architecture planning to subscription management and onboarding flows.',
    includes: ['Multi-Tenant Architecture', 'Subscription & Billing', 'User Onboarding Flows', 'Role-Based Access', 'Usage Analytics'],
    tech: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'AWS'],
  },
  {
    icon: '📊',
    title: 'Admin & Dashboard Systems',
    desc: 'Internal tooling, CRM systems, and data visualization dashboards built for operational efficiency.',
    includes: ['Custom Admin Panels', 'Data Visualization', 'CRUD Interfaces', 'Role Management', 'Export & Reporting'],
    tech: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
  },
  {
    icon: '🎮',
    title: 'Game & Interactive Platforms',
    desc: 'Highly interactive environments using WebGL, Canvas, and modern browser APIs for engaging digital experiences.',
    includes: ['WebGL / Three.js Development', 'Interactive UI Systems', 'Game Logic Engineering', 'Leaderboards & Real-time Sync'],
    tech: ['Three.js', 'WebGL', 'React', 'Socket.io'],
  },
  {
    icon: '🔗',
    title: 'Automation & API Integrations',
    desc: 'Connecting fragmented tools into cohesive automated workflows — from Zapier-style automation to custom API bridges.',
    includes: ['Webhook Systems', 'Third-Party API Integration', 'Workflow Automation', 'Data Sync Pipelines', 'Notification Systems'],
    tech: ['Node.js', 'REST APIs', 'GraphQL', 'n8n', 'Zapier'],
  },
];

// ── Projects Page (extended) ──────────────────────────────────────────────────
export const PROJECTS_FULL = [
  {
    tag: 'FinTech Platform',
    title: 'Aura Pay Systems',
    desc: 'A full-scale payment dashboard handling complex data visualization and real-time transaction tracking for a fintech startup.',
    stack: 'React, Node.js, PostgreSQL, WebSockets',
    feature: 'Real-time WebSockets integration with live transaction feed',
    impact: 'Reduced query latency by 45% — handled 50k+ daily transactions',
    challenge: 'Needed sub-100ms latency on a live dashboard with thousands of concurrent users.',
    solution: 'Implemented event-driven WebSocket architecture with Redis pub/sub and optimized PostgreSQL indexes.',
    graphic: 'fintech',
    status: 'Delivered',
  },
  {
    tag: 'AI Application',
    title: 'Nexus Data Engine',
    desc: 'An AI-driven analytics system that processes unstructured data into actionable business intelligence metrics.',
    stack: 'Next.js, Python FastAPI, OpenAI API, PostgreSQL',
    feature: 'Automated Insight Generation with natural language summaries',
    impact: 'Saved 20+ hours of manual analysis per week for the client team',
    challenge: 'Raw unstructured data from 6 different sources needed to be unified and made queryable.',
    solution: 'Built a Python ETL pipeline with GPT-4 summarization layer and a custom vector search index.',
    graphic: 'ai',
    status: 'Delivered',
  },
  {
    tag: 'E-Commerce Platform',
    title: 'Lumina Marketplace',
    desc: 'A highly scalable headless e-commerce solution with dynamic inventory routing and custom checkout flows.',
    stack: 'React, Shopify Headless, AWS Lambda, Node.js',
    feature: 'Microservices Architecture with serverless inventory routing',
    impact: 'Supported 10x traffic spikes seamlessly during product launches',
    challenge: 'Monolithic Shopify setup was failing under flash-sale traffic spikes.',
    solution: 'Migrated to headless architecture with AWS Lambda-backed inventory microservices and CDN caching.',
    graphic: 'ecommerce',
    status: 'Delivered',
  },
];

// ── Join Network Page ─────────────────────────────────────────────────────────
export const JOIN_PROCESS = [
  { step: '01', title: 'Submit Application', desc: 'Fill out our structured application form with your skills, portfolio links, and availability.' },
  { step: '02', title: 'Technical Screening', desc: 'Complete a short technical assessment relevant to your domain (frontend, backend, AI, design).' },
  { step: '03', title: 'Network Onboarding', desc: 'Selected candidates are onboarded into execution teams with defined roles and workflow guidelines.' },
  { step: '04', title: 'Live Project Assignment', desc: 'You are assigned to a real client project with milestone targets, code reviews, and structured delivery.' },
];

export const JOIN_CRITERIA = [
  'Strong foundation in at least one modern tech stack',
  'Ability to work in structured, deadline-driven environments',
  'Portfolio or GitHub showing prior project work',
  'Commitment to quality code and documentation standards',
  'Professional communication and team collaboration',
];

// ── Partner Page ──────────────────────────────────────────────────────────────
export const PARTNER_TYPES = [
  {
    icon: '🤝',
    title: 'Referral Partners',
    desc: 'Refer clients to XSTN and earn structured commissions on successful project closures. No technical involvement required.',
    benefits: ['Structured revenue share', 'No project management burden', 'Transparent tracking dashboard', 'Long-term relationship model'],
  },
  {
    icon: '🎓',
    title: 'Internship Providers',
    desc: 'Organizations that absorb XSTN-trained developers into internship programs — pre-vetted, project-ready talent.',
    benefits: ['Pre-screened candidates', 'Real project exposure', 'Structured skill validation', 'Flexible engagement terms'],
  },
  {
    icon: '🔧',
    title: 'Technology Collaborators',
    desc: 'Tech companies, agencies, and platforms that collaborate with XSTN on joint projects, tools, or co-development.',
    benefits: ['Shared execution capacity', 'Complementary skill sets', 'Co-branded deliverables', 'Scalable engagement model'],
  },
];
