---
layout: home
title: "AI, Data & Machine Learning Consulting | Apex Data Cloud"
description: "Apex Data Cloud helps organizations answer the questions they've never been able to answer — turning data into decisions with AI, machine learning, predictive analytics, RAG systems, and data engineering."
image: "/apex_logo.PNG"
keywords: "AI consulting, machine learning consulting, generative AI consulting, data analytics consulting, RAG development, AI agent development, data engineering, predictive analytics, customer segmentation, Orlando AI consulting"
faqs:
  - q: "What kinds of questions do you help organizations answer?"
    a: "The ones buried in your data that no report has ever surfaced: which customers you're about to lose, which decisions are quietly costing you the most, where your next dollar of growth will actually come from, and what to do first. If the answer should exist in your data but doesn't yet, that's our work."
  - q: "How is this different from a traditional agency or BI tool?"
    a: "Dashboards and agencies tell you what already happened. We build the intelligence layer underneath — the data pipelines, models, and AI systems that answer forward-looking questions and turn them into decisions you can act on."
  - q: "How long does a typical engagement take?"
    a: "Diagnostic assessments typically run 4–6 weeks. Model builds, attribution frameworks, RAG systems, and AI deployments range from 10–20 weeks. We also offer ongoing advisory retainers, and we scope accurately on our first call."
  - q: "Do you work within our existing data and tech stack?"
    a: "Yes — always. We work within and around your existing platforms (Salesforce, HubSpot, Segment, GA4, Snowflake, BigQuery, and more) rather than replacing them. We extract maximum value from what you already have, and recommend additions only when the ROI is clear."
  - q: "How do you measure success?"
    a: "By the quality of the decisions you can now make. We align on measurable outcomes before any engagement begins — pipeline growth, CAC reduction, LTV improvement, faster time-to-answer — and report transparently throughout."
  - q: "Where is Apex Data Cloud located?"
    a: "Apex Data Cloud is based in Orlando and serves clients across Central Florida, the state of Florida, and nationwide. Engagements run remotely and on-site as needed."
---

<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
/* ============================================================
   RESET & JEKYLL OVERRIDES
   ============================================================ */
.page-content { padding: 0 !important; }
.wrapper { max-width: 100% !important; padding: 0 !important; }
.site-header, .site-footer { display: none !important; }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

/* ============================================================
   DESIGN TOKENS — "The Unanswered"
   ============================================================ */
:root {
  --ink:      #0E0E11;
  --ink-2:    #15151A;
  --ink-3:    #1D1D24;
  --paper:    #F3EFE6;
  --paper-2:  #E9E3D6;
  --dim:      rgba(243,239,230,0.64);
  --faint:    rgba(243,239,230,0.40);
  --signal:   #F0B429;
  --signal-2: #F8CD5C;
  --signal-soft: rgba(240,180,41,0.12);
  --clay:     #D98C5F;
  --line:     rgba(243,239,230,0.13);
  --line-2:   rgba(243,239,230,0.07);
  --serif:    'Fraunces', Georgia, 'Times New Roman', serif;
  --sans:     'Hanken Grotesk', system-ui, -apple-system, sans-serif;
  --mono:     'Spline Sans Mono', ui-monospace, 'SFMono-Regular', monospace;
  --shadow:   0 30px 80px -40px rgba(0,0,0,0.8);
}

/* ============================================================
   BASE
   ============================================================ */
.apex-site {
  font-family: var(--sans);
  background: var(--ink);
  color: var(--paper);
  overflow-x: hidden;
  line-height: 1.65;
  font-size: 17px;
  letter-spacing: 0.005em;
  position: relative;
}
.apex-site::before {
  /* film grain */
  content: ""; position: fixed; inset: 0; z-index: 1; pointer-events: none;
  opacity: 0.045; mix-blend-mode: screen;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.apex-site > * { position: relative; z-index: 2; }
.container { max-width: 1180px; margin: 0 auto; padding: 0 32px; }

::selection { background: var(--signal); color: var(--ink); }

a { color: inherit; }

/* Section eyebrow / mono label */
.eyebrow {
  font-family: var(--mono); font-size: 12px; font-weight: 500;
  text-transform: uppercase; letter-spacing: 0.28em;
  color: var(--signal); display: inline-flex; align-items: center; gap: 12px;
}
.eyebrow::before { content: ""; width: 28px; height: 1px; background: var(--signal); opacity: 0.7; }

/* Section heading */
.sec-head { max-width: 760px; margin-bottom: 64px; }
.sec-head h2 {
  font-family: var(--serif); font-optical-sizing: auto;
  font-weight: 340; font-size: clamp(2rem, 4.4vw, 3.3rem);
  line-height: 1.08; letter-spacing: -0.015em; margin: 22px 0 0;
}
.sec-head h2 em { font-style: italic; color: var(--signal-2); font-weight: 380; }
.sec-head p {
  color: var(--dim); font-size: 1.18rem; max-width: 640px; margin-top: 22px; line-height: 1.6;
}

/* ============================================================
   SCROLL PROGRESS
   ============================================================ */
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 2px; z-index: 9999;
  background: linear-gradient(90deg, var(--signal), var(--clay));
  width: 0%; transition: width 0.08s linear;
}

/* ============================================================
   NAVBAR
   ============================================================ */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 22px 32px;
  background: rgba(14,14,17,0);
  border-bottom: 1px solid transparent;
  transition: padding 0.35s ease, background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s;
}
.nav.scrolled {
  padding: 13px 32px;
  background: rgba(14,14,17,0.82);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border-bottom-color: var(--line);
}
.nav-inner {
  max-width: 1180px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-logo { display: flex; align-items: center; gap: 11px; text-decoration: none; }
.nav-logo img { height: 30px; width: auto; filter: saturate(0.9); }
.nav-logo-text {
  font-family: var(--serif); font-weight: 460; font-size: 19px;
  letter-spacing: -0.01em; color: var(--paper);
}
.nav-logo-text span { font-style: italic; color: var(--signal); }
.nav-links { display: flex; align-items: center; gap: 30px; list-style: none; }
.nav-links a {
  font-family: var(--mono); font-size: 12.5px; font-weight: 400;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--dim); text-decoration: none; transition: color 0.2s; position: relative;
}
.nav-links a:not(.nav-cta)::after {
  content: ""; position: absolute; left: 0; bottom: -5px; height: 1px; width: 0;
  background: var(--signal); transition: width 0.28s ease;
}
.nav-links a:not(.nav-cta):hover { color: var(--paper); }
.nav-links a:not(.nav-cta):hover::after { width: 100%; }
.nav-cta {
  background: var(--signal); color: var(--ink) !important;
  padding: 9px 18px; border-radius: 2px; font-weight: 500 !important;
  transition: all 0.25s ease; letter-spacing: 0.1em !important;
}
.nav-cta:hover { background: var(--signal-2); transform: translateY(-1px); }
.hamburger-btn {
  display: none; flex-direction: column; gap: 5px; background: none;
  border: 0; cursor: pointer; padding: 6px;
}
.hamburger-btn span { width: 24px; height: 1.5px; background: var(--paper); transition: 0.3s; }
.hamburger-btn.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger-btn.open span:nth-child(2) { opacity: 0; }
.hamburger-btn.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: fixed; inset: 0; z-index: 999; background: var(--ink-2);
  flex-direction: column; align-items: flex-start; justify-content: center;
  gap: 8px; padding: 0 40px; display: none;
}
.mobile-menu.active { display: flex; }
.mobile-link {
  font-family: var(--serif); font-size: 2rem; font-weight: 360; color: var(--paper);
  text-decoration: none; padding: 8px 0; transition: color 0.2s;
}
.mobile-link:hover { color: var(--signal); }
.mobile-link.m-cta { color: var(--signal); font-style: italic; margin-top: 16px; }

/* ============================================================
   HERO
   ============================================================ */
.hero {
  position: relative; min-height: 100vh; display: flex; align-items: center;
  padding: 160px 0 100px; overflow: hidden;
}
.hero-glow {
  position: absolute; top: -10%; left: 50%; transform: translateX(-50%);
  width: 1100px; height: 760px; pointer-events: none;
  background: radial-gradient(ellipse at center, rgba(240,180,41,0.16), rgba(240,180,41,0.04) 38%, transparent 66%);
  filter: blur(8px);
}
.hero-ghost {
  position: absolute; right: -4%; top: 50%; transform: translateY(-50%);
  font-family: var(--serif); font-weight: 300; font-style: italic;
  font-size: 62vh; line-height: 0.7; color: var(--paper);
  opacity: 0.025; pointer-events: none; user-select: none;
}
.hero-rule { position: absolute; left: 0; right: 0; height: 1px; background: var(--line-2); }
.hero-inner { position: relative; max-width: 1180px; margin: 0 auto; padding: 0 32px; width: 100%; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--mono); font-size: 12px; text-transform: uppercase;
  letter-spacing: 0.24em; color: var(--dim);
  border: 1px solid var(--line); border-radius: 100px; padding: 8px 16px;
  margin-bottom: 38px;
}
.live-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--signal);
  box-shadow: 0 0 0 0 rgba(240,180,41,0.6); animation: pulse 2.4s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(240,180,41,0.5); }
  70% { box-shadow: 0 0 0 9px rgba(240,180,41,0); }
  100% { box-shadow: 0 0 0 0 rgba(240,180,41,0); }
}
.hero h1 {
  font-family: var(--serif); font-optical-sizing: auto;
  font-weight: 330; font-size: clamp(2.6rem, 6.4vw, 5.4rem);
  line-height: 1.02; letter-spacing: -0.025em; max-width: 16ch;
}
.hero h1 em { font-style: italic; color: var(--signal-2); font-weight: 360; }
.hero-sub {
  margin-top: 30px; font-size: 1.28rem; line-height: 1.6; color: var(--dim);
  max-width: 54ch;
}

/* rotating questions */
.qrotator {
  margin-top: 46px; padding-left: 26px; border-left: 2px solid var(--signal);
  min-height: 4.2em; display: flex; flex-direction: column; justify-content: center;
}
.qrotator-label {
  font-family: var(--mono); font-size: 11.5px; text-transform: uppercase;
  letter-spacing: 0.26em; color: var(--faint); margin-bottom: 12px;
}
.qrotator-q {
  font-family: var(--serif); font-style: italic; font-weight: 340;
  font-size: clamp(1.25rem, 2.7vw, 1.9rem); line-height: 1.3; color: var(--paper);
  opacity: 0; transform: translateY(8px); transition: opacity 0.6s, transform 0.6s;
  position: absolute;
}
.qrotator-track { position: relative; min-height: 2.6em; width: 100%; }
.qrotator-q.active { opacity: 1; transform: translateY(0); position: relative; }

.hero-cta { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 50px; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--signal); color: var(--ink);
  font-family: var(--mono); font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em;
  padding: 16px 30px; border-radius: 2px; text-decoration: none; font-weight: 500;
  transition: all 0.28s ease; border: 1px solid var(--signal);
}
.btn-primary:hover { background: var(--signal-2); transform: translateY(-2px); box-shadow: 0 16px 40px -16px rgba(240,180,41,0.55); }
.btn-ghost {
  display: inline-flex; align-items: center; gap: 10px;
  border: 1px solid var(--line); color: var(--paper);
  font-family: var(--mono); font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em;
  padding: 16px 30px; border-radius: 2px; text-decoration: none; transition: all 0.28s ease;
}
.btn-ghost:hover { border-color: var(--paper); background: rgba(243,239,230,0.04); }

/* ============================================================
   MARQUEE / TRUST
   ============================================================ */
.trust-bar { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 26px 0; overflow: hidden; }
.trust-bar-inner {
  max-width: 1180px; margin: 0 auto; padding: 0 32px;
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 22px 36px;
}
.t-item {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--mono); font-size: 12.5px; text-transform: uppercase;
  letter-spacing: 0.14em; color: var(--dim);
}
.t-item svg { color: var(--signal); flex-shrink: 0; }

/* ============================================================
   PREMISE (inverted paper section)
   ============================================================ */
.premise { background: var(--paper); color: var(--ink); padding: 130px 0; }
.premise-inner { max-width: 1180px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
.premise .eyebrow { color: var(--clay); }
.premise .eyebrow::before { background: var(--clay); }
.premise h2 {
  font-family: var(--serif); font-weight: 340; font-size: clamp(2rem, 4vw, 3.1rem);
  line-height: 1.1; letter-spacing: -0.015em; margin-top: 22px; color: var(--ink);
}
.premise h2 em { font-style: italic; color: var(--clay); }
.premise-body p { font-size: 1.18rem; line-height: 1.7; color: #46433c; margin-top: 22px; }
.premise-body p strong { color: var(--ink); font-weight: 600; }
.premise-list { list-style: none; }
.premise-list li {
  font-family: var(--serif); font-style: italic; font-size: 1.45rem; line-height: 1.4;
  color: var(--ink); padding: 24px 0; border-top: 1px solid rgba(14,14,17,0.12);
  display: flex; gap: 18px; align-items: baseline;
}
.premise-list li:last-child { border-bottom: 1px solid rgba(14,14,17,0.12); }
.premise-list .qnum { font-family: var(--mono); font-style: normal; font-size: 12px; color: var(--clay); letter-spacing: 0.1em; flex-shrink: 0; padding-top: 6px; }

/* ============================================================
   STATS
   ============================================================ */
.stats-section { padding: 110px 0; }
.stats-grid { max-width: 1180px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
.stat-item { padding: 12px 30px; border-left: 1px solid var(--line); }
.stat-item:first-child { border-left: 0; padding-left: 0; }
.stat-num {
  font-family: var(--serif); font-weight: 320; font-size: clamp(2.8rem, 5.2vw, 4rem);
  line-height: 1; color: var(--signal-2); letter-spacing: -0.02em; display: block;
}
.stat-label { font-size: 1.02rem; color: var(--paper); margin-top: 16px; font-weight: 500; }
.stat-sublabel { font-family: var(--mono); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--faint); margin-top: 8px; }

/* ============================================================
   DISCIPLINES (services as questions)
   ============================================================ */
.services-section { padding: 50px 0 130px; }
.disc-list { border-top: 1px solid var(--line); }
.disc {
  display: grid; grid-template-columns: 90px 1fr auto; gap: 40px; align-items: start;
  padding: 46px 0; border-bottom: 1px solid var(--line);
  text-decoration: none; color: inherit; transition: background 0.3s ease, padding 0.3s ease;
  position: relative;
}
.disc::before {
  content: ""; position: absolute; left: -32px; right: -32px; top: 0; bottom: 0;
  background: var(--signal-soft); opacity: 0; transition: opacity 0.3s; z-index: -1; border-radius: 4px;
}
.disc:hover::before { opacity: 1; }
.disc:hover { padding-left: 12px; padding-right: 12px; }
.disc-num { font-family: var(--mono); font-size: 13px; color: var(--signal); letter-spacing: 0.1em; padding-top: 10px; }
.disc-q {
  font-family: var(--serif); font-style: italic; font-weight: 340;
  font-size: clamp(1.35rem, 2.8vw, 2.05rem); line-height: 1.25; color: var(--paper); letter-spacing: -0.01em;
}
.disc-name { font-family: var(--mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: var(--signal); margin-top: 14px; }
.disc-desc { color: var(--dim); margin-top: 14px; max-width: 60ch; font-size: 1.05rem; line-height: 1.6; }
.disc-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.tag {
  font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--dim); border: 1px solid var(--line); border-radius: 100px; padding: 5px 12px;
}
.disc-arrow {
  font-family: var(--serif); font-size: 2rem; color: var(--faint); align-self: center;
  transition: transform 0.3s, color 0.3s;
}
.disc:hover .disc-arrow { color: var(--signal); transform: translate(6px, -6px); }

/* ============================================================
   CTA BANNER
   ============================================================ */
.cta-banner { padding: 0 0 130px; }
.cta-banner-inner {
  max-width: 1180px; margin: 0 auto;
  background: linear-gradient(135deg, var(--ink-2), var(--ink-3));
  border: 1px solid var(--line); border-radius: 6px; padding: 80px 60px; text-align: center;
  position: relative; overflow: hidden;
}
.cta-banner-inner::after {
  content: "?"; position: absolute; right: 4%; bottom: -30%; font-family: var(--serif);
  font-style: italic; font-size: 24rem; color: var(--signal); opacity: 0.05; line-height: 1;
}
.cta-banner h2 {
  font-family: var(--serif); font-weight: 340; font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.12; margin: 20px auto 0; max-width: 20ch; letter-spacing: -0.015em;
}
.cta-banner h2 em { font-style: italic; color: var(--signal-2); }
.cta-banner p { color: var(--dim); max-width: 56ch; margin: 22px auto 0; font-size: 1.12rem; }
.cta-banner-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 40px; }

/* ============================================================
   APPROACH
   ============================================================ */
.approach-section { padding: 0 0 130px; }
.steps-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 6px; overflow: hidden; }
.step { background: var(--ink); padding: 44px 34px; transition: background 0.3s; }
.step:hover { background: var(--ink-2); }
.step-num { font-family: var(--mono); font-size: 13px; color: var(--signal); letter-spacing: 0.1em; }
.step h4 { font-family: var(--serif); font-weight: 420; font-size: 1.5rem; margin: 18px 0 12px; letter-spacing: -0.01em; }
.step p { color: var(--dim); font-size: 0.98rem; line-height: 1.6; }

/* ============================================================
   WHY
   ============================================================ */
.why-section { padding: 0 0 130px; }
.why-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: start; }
.why-content h2 { font-family: var(--serif); font-weight: 340; font-size: clamp(1.9rem, 3.8vw, 2.9rem); line-height: 1.12; margin: 22px 0 22px; letter-spacing: -0.015em; }
.why-content h2 em { font-style: italic; color: var(--signal-2); }
.why-content > p { color: var(--dim); font-size: 1.12rem; line-height: 1.65; }
.diffs { margin-top: 40px; display: grid; gap: 4px; }
.diff { display: grid; grid-template-columns: auto 1fr; gap: 20px; padding: 24px 0; border-top: 1px solid var(--line); }
.diff-ico { font-family: var(--mono); color: var(--signal); font-size: 13px; letter-spacing: 0.1em; padding-top: 4px; }
.diff h4 { font-size: 1.12rem; font-weight: 600; margin-bottom: 6px; }
.diff p { color: var(--dim); font-size: 0.98rem; line-height: 1.55; }
.why-cards { display: grid; gap: 16px; position: sticky; top: 110px; }
.why-card { border: 1px solid var(--line); border-radius: 4px; padding: 30px; transition: border-color 0.3s, transform 0.3s; }
.why-card:hover { border-color: var(--signal); transform: translateY(-3px); }
.wc-val { font-family: var(--serif); font-style: italic; font-size: 1.35rem; color: var(--signal-2); line-height: 1.25; }
.wc-lbl { color: var(--dim); font-size: 0.98rem; margin-top: 12px; line-height: 1.55; }

/* ============================================================
   INDUSTRIES
   ============================================================ */
.industries-section { padding: 0 0 130px; }
.ind-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 6px; overflow: hidden; }
.ind-card { background: var(--ink); padding: 36px 32px; transition: background 0.3s; text-decoration: none; color: inherit; display: block; }
.ind-card:hover { background: var(--ink-2); }
.ind-num { font-family: var(--mono); font-size: 12px; color: var(--signal); letter-spacing: 0.1em; }
.ind-card h4 { font-family: var(--serif); font-weight: 420; font-size: 1.32rem; margin: 16px 0 12px; letter-spacing: -0.01em; }
.ind-q { font-family: var(--serif); font-style: italic; color: var(--dim); font-size: 1.02rem; line-height: 1.45; }

/* ============================================================
   TESTIMONIALS
   ============================================================ */
.testimonials-section { padding: 0 0 130px; }
.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.testimonial-card { border: 1px solid var(--line); border-radius: 6px; padding: 36px 32px; position: relative; transition: border-color 0.3s, transform 0.3s; background: var(--ink-2); }
.testimonial-card:hover { border-color: var(--line); transform: translateY(-4px); box-shadow: var(--shadow); }
.quote-icon { font-family: var(--serif); font-style: italic; font-size: 4rem; color: var(--signal); opacity: 0.5; line-height: 0.5; display: block; height: 28px; }
.testimonial-text { font-family: var(--serif); font-weight: 340; font-size: 1.12rem; line-height: 1.55; color: var(--paper); margin: 14px 0 26px; }
.testimonial-author { display: flex; align-items: center; gap: 14px; border-top: 1px solid var(--line); padding-top: 22px; }
.author-avatar { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 13px; font-weight: 500; color: var(--ink); flex-shrink: 0; }
.author-name { font-weight: 600; font-size: 0.98rem; }
.author-title { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--faint); margin-top: 3px; }

/* ============================================================
   TECH
   ============================================================ */
.tech-section { padding: 0 0 130px; }
.tech-inner { max-width: 1180px; margin: 0 auto; padding: 0 32px; text-align: center; }
.tech-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 40px; }
.tbadge {
  font-family: var(--mono); font-size: 12px; color: var(--dim);
  border: 1px solid var(--line); border-radius: 100px; padding: 8px 16px; transition: all 0.25s;
}
.tbadge:hover { color: var(--signal); border-color: var(--signal); }

/* ============================================================
   FAQ
   ============================================================ */
.faq-section { padding: 0 0 130px; }
.faq-list { max-width: 880px; }
.faq-item { border-bottom: 1px solid var(--line); }
.faq-question {
  width: 100%; background: none; border: 0; cursor: pointer; text-align: left;
  display: flex; justify-content: space-between; align-items: center; gap: 24px;
  padding: 30px 0; color: var(--paper); font-family: var(--serif); font-weight: 380;
  font-size: clamp(1.15rem, 2vw, 1.45rem); letter-spacing: -0.01em; line-height: 1.3;
}
.faq-question:hover { color: var(--signal-2); }
.faq-icon { font-family: var(--sans); font-size: 1.6rem; color: var(--signal); flex-shrink: 0; transition: transform 0.3s; font-weight: 300; }
.faq-item.open .faq-icon { transform: rotate(45deg); }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
.faq-item.open .faq-answer { max-height: 340px; }
.faq-answer p { color: var(--dim); padding-bottom: 30px; font-size: 1.05rem; line-height: 1.65; max-width: 70ch; }
.faq-answer a { color: var(--signal); }

/* ============================================================
   CONTACT
   ============================================================ */
.contact-section { padding: 0 0 130px; }
.contact-inner {
  max-width: 1180px; margin: 0 auto; padding: 80px 60px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 70px;
  background: var(--paper); color: var(--ink); border-radius: 8px;
}
.contact-info .eyebrow { color: var(--clay); }
.contact-info .eyebrow::before { background: var(--clay); }
.contact-info h2 { font-family: var(--serif); font-weight: 340; font-size: clamp(1.9rem, 3.6vw, 2.7rem); line-height: 1.12; margin: 20px 0 20px; letter-spacing: -0.015em; color: var(--ink); }
.contact-info h2 em { font-style: italic; color: var(--clay); }
.contact-info > p { color: #46433c; font-size: 1.12rem; line-height: 1.65; }
.c-methods { margin-top: 30px; }
.c-method { display: flex; align-items: center; gap: 16px; text-decoration: none; color: var(--ink); padding: 16px 0; border-top: 1px solid rgba(14,14,17,0.12); transition: gap 0.25s; }
.c-method:hover { gap: 22px; }
.c-ico { font-size: 1.3rem; }
.c-lbl { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--clay); }
.c-val { font-weight: 600; font-size: 1.05rem; }
.c-guarantee { display: flex; gap: 14px; margin-top: 30px; padding: 20px; background: rgba(14,14,17,0.04); border-radius: 6px; }
.c-guarantee-ico { color: #1a7d4b; flex-shrink: 0; font-size: 1.1rem; }
.c-guarantee p { font-size: 0.94rem; color: #46433c; line-height: 1.55; }
.c-guarantee strong { color: var(--ink); }

.c-form-box { background: var(--ink); border-radius: 8px; padding: 40px; }
.cf-head { font-family: var(--serif); font-weight: 400; font-size: 1.5rem; color: var(--paper); }
.cf-sub { color: var(--dim); font-size: 0.98rem; margin: 8px 0 26px; }
.fg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.fg { margin-bottom: 16px; }
.fg label { display: block; font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--faint); margin-bottom: 8px; }
.fg input, .fg select, .fg textarea {
  width: 100%; background: var(--ink-3); border: 1px solid var(--line); border-radius: 3px;
  padding: 13px 14px; color: var(--paper); font-family: var(--sans); font-size: 0.98rem; transition: border-color 0.2s;
}
.fg input:focus, .fg select:focus, .fg textarea:focus { outline: none; border-color: var(--signal); }
.fg textarea { resize: vertical; }
.fg select { appearance: none; cursor: pointer; }
.cf-submit {
  width: 100%; background: var(--signal); color: var(--ink); border: 0; border-radius: 3px;
  padding: 16px; font-family: var(--mono); font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em;
  font-weight: 500; cursor: pointer; transition: background 0.25s; margin-top: 6px;
}
.cf-submit:hover { background: var(--signal-2); }
.cf-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.form-success { display: none; text-align: center; padding: 40px 0; }
.form-success-icon { width: 60px; height: 60px; margin: 0 auto 20px; border-radius: 50%; background: var(--signal-soft); color: var(--signal); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; }
.form-success h3 { font-family: var(--serif); font-weight: 400; font-size: 1.5rem; color: var(--paper); }
.form-success p { color: var(--dim); margin-top: 10px; }

/* ============================================================
   FOOTER
   ============================================================ */
.footer { border-top: 1px solid var(--line); padding: 80px 0 40px; }
.footer-top { max-width: 1180px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 50px; }
.f-brand-row { display: flex; align-items: center; gap: 11px; }
.f-brand-row img { height: 28px; }
.f-brand-name { font-family: var(--serif); font-weight: 460; font-size: 18px; }
.f-brand-desc { color: var(--dim); font-size: 0.96rem; line-height: 1.6; margin-top: 18px; max-width: 38ch; }
.f-social { display: flex; gap: 10px; margin-top: 22px; }
.f-social-link { width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; color: var(--dim); transition: all 0.25s; font-family: var(--mono); font-size: 13px; }
.f-social-link:hover { color: var(--signal); border-color: var(--signal); }
.f-col h5 { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; color: var(--faint); margin-bottom: 20px; }
.f-col ul { list-style: none; }
.f-col li { margin-bottom: 12px; }
.f-col a { color: var(--dim); text-decoration: none; font-size: 0.96rem; transition: color 0.2s; }
.f-col a:hover { color: var(--signal); }
.footer-bottom { max-width: 1180px; margin: 60px auto 0; padding: 30px 32px 0; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.f-copy { color: var(--faint); font-family: var(--mono); font-size: 11.5px; letter-spacing: 0.04em; }
.f-bottom-links { display: flex; gap: 22px; }
.f-bottom-links a { color: var(--faint); text-decoration: none; font-family: var(--mono); font-size: 11.5px; transition: color 0.2s; }
.f-bottom-links a:hover { color: var(--signal); }

/* ============================================================
   REVEAL ANIMATION
   ============================================================ */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 980px) {
  .nav-links { display: none; }
  .hamburger-btn { display: flex; }
  .premise-inner, .why-grid, .contact-inner { grid-template-columns: 1fr; gap: 44px; }
  .stats-grid, .steps-row, .ind-grid, .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-item { border-left: 0; padding: 12px 0; }
  .why-cards { position: static; }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .hero-ghost { font-size: 40vh; right: -12%; }
}
@media (max-width: 600px) {
  .container, .hero-inner, .trust-bar-inner, .premise-inner, .tech-inner, .footer-top { padding-left: 22px; padding-right: 22px; }
  .stats-grid, .steps-row, .ind-grid, .testimonials-grid, .footer-top { grid-template-columns: 1fr; }
  .disc { grid-template-columns: 1fr; gap: 8px; }
  .disc-arrow { display: none; }
  .fg-row { grid-template-columns: 1fr; }
  .contact-inner, .cta-banner-inner { padding: 50px 26px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
  .reveal { opacity: 1; transform: none; }
}
</style>

<div class="apex-site">

<!-- ======================== SCROLL PROGRESS ======================== -->
<div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>

<!-- ======================== MOBILE MENU ======================== -->
<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Navigation menu">
  <a href="/services/" class="mobile-link">Services</a>
  <a href="/industries/" class="mobile-link">Industries</a>
  <a href="/locations/" class="mobile-link">Locations</a>
  <a href="/resources/" class="mobile-link">Resources</a>
  <a href="/about/" class="mobile-link">About</a>
  <a href="/contact/" class="m-cta mobile-link">Ask us a question</a>
</div>

<!-- ======================== NAVBAR ======================== -->
<nav class="nav" id="mainNav" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/" class="nav-logo" aria-label="Apex Data Cloud home">
      <img src="apex_logo.PNG" alt="Apex Data Cloud logo" width="30" height="30">
      <span class="nav-logo-text">Apex <span>Data</span> Cloud</span>
    </a>
    <ul class="nav-links" role="list">
      <li><a href="/services/">Services</a></li>
      <li><a href="/industries/">Industries</a></li>
      <li><a href="/locations/">Locations</a></li>
      <li><a href="/resources/">Resources</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/contact/" class="nav-cta">Ask a question</a></li>
    </ul>
    <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle mobile menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ======================== HERO ======================== -->
<section class="hero" aria-labelledby="hero-heading">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="hero-ghost" aria-hidden="true">?</div>
  <div class="hero-inner">
    <div class="hero-badge">
      <span class="live-dot" aria-hidden="true"></span>
      AI, Data &amp; Machine Learning Consulting
    </div>
    <h1 id="hero-heading">We help organizations answer the questions they've <em>never been able to answer.</em></h1>
    <p class="hero-sub">The answers are already inside your data. We build the intelligence — models, pipelines, and AI systems — that finally lets you ask the hard questions and act on what comes back.</p>

    <div class="qrotator" aria-label="Examples of questions we help answer">
      <div class="qrotator-label">Questions we hear</div>
      <div class="qrotator-track" id="qTrack">
        <span class="qrotator-q active">&ldquo;Which customers are about to leave — before they tell us?&rdquo;</span>
        <span class="qrotator-q">&ldquo;Which decision is quietly costing us the most money?&rdquo;</span>
        <span class="qrotator-q">&ldquo;Where will our next dollar of growth actually come from?&rdquo;</span>
        <span class="qrotator-q">&ldquo;What does each customer want next — before they ask?&rdquo;</span>
        <span class="qrotator-q">&ldquo;Can we even trust the answers our data gives us?&rdquo;</span>
        <span class="qrotator-q">&ldquo;Of everything we could do next, what should we do first?&rdquo;</span>
      </div>
    </div>

    <div class="hero-cta">
      <a href="#contact" class="btn-primary" onclick="gtag('event','click',{event_category:'CTA',event_label:'Hero Primary'})">
        Bring us your question &#8594;
      </a>
      <a href="#disciplines" class="btn-ghost">See how we answer it</a>
    </div>
  </div>
</section>

<!-- ======================== TRUST BAR ======================== -->
<div class="trust-bar" role="complementary" aria-label="Trust signals">
  <div class="trust-bar-inner">
    <div class="t-item"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Forward-Looking Intelligence</div>
    <div class="t-item"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Decisions, Not Dashboards</div>
    <div class="t-item"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>AI-Native Methods</div>
    <div class="t-item"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Measurable Impact</div>
    <div class="t-item"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>15+ Industries Served</div>
  </div>
</div>

<!-- ======================== PREMISE ======================== -->
<section class="premise" aria-labelledby="premise-heading">
  <div class="premise-inner">
    <div class="premise-body reveal">
      <span class="eyebrow">The premise</span>
      <h2 id="premise-heading">Every organization is sitting on its own answers. The questions are just <em>trapped in the data.</em></h2>
      <p>Most teams aren't short on data — they're short on the ability to interrogate it. Reports tell you what already happened. Dashboards count the obvious. The questions that would actually change your trajectory go unasked, because no one has built the system that could answer them.</p>
      <p><strong>That's the gap we close.</strong> We turn the questions you've quietly given up on into models, pipelines, and AI systems that give you real, defensible answers — and the confidence to act on them.</p>
    </div>
    <ul class="premise-list reveal reveal-delay-1" aria-label="Questions organizations struggle to answer">
      <li><span class="qnum">Q.01</span> Who are our most valuable customers — really?</li>
      <li><span class="qnum">Q.02</span> What will happen if we do nothing?</li>
      <li><span class="qnum">Q.03</span> Which of our efforts actually drive growth?</li>
      <li><span class="qnum">Q.04</span> What should we do first — and why?</li>
    </ul>
  </div>
</section>

<!-- ======================== STATS ======================== -->
<div class="stats-section" aria-label="Impact statistics">
  <div class="stats-grid">
    <div class="stat-item reveal">
      <span class="stat-num" data-target="4.2" data-suffix="×" data-decimal="1">0×</span>
      <div class="stat-label">Return on the average engagement</div>
      <div class="stat-sublabel">Delivered within 12 months</div>
    </div>
    <div class="stat-item reveal reveal-delay-1">
      <span class="stat-num" data-target="50" data-suffix="+">0+</span>
      <div class="stat-label">Questions turned into decisions</div>
      <div class="stat-sublabel">Engagements delivered end-to-end</div>
    </div>
    <div class="stat-item reveal reveal-delay-2">
      <span class="stat-num" data-target="68" data-suffix="%">0%</span>
      <div class="stat-label">Faster from question to answer</div>
      <div class="stat-sublabel">Across client portfolio</div>
    </div>
    <div class="stat-item reveal reveal-delay-3">
      <span class="stat-num" data-target="98" data-suffix="%">0%</span>
      <div class="stat-label">Return with their next question</div>
      <div class="stat-sublabel">Client return-engagement rate</div>
    </div>
  </div>
</div>

<!-- ======================== DISCIPLINES (SERVICES) ======================== -->
<section id="disciplines" class="services-section" aria-labelledby="disc-heading">
  <div class="container">
    <div class="sec-head reveal">
      <span class="eyebrow">What we do</span>
      <h2 id="disc-heading">Nine disciplines, each built to answer <em>a question that matters.</em></h2>
      <p>We don't sell tools or hours. We sell answers — and below is the question each capability exists to settle, for good.</p>
    </div>

    <div class="disc-list">

      <a href="/services/customer-segmentation/" class="disc reveal">
        <div class="disc-num">01</div>
        <div>
          <div class="disc-q">&ldquo;Who are our customers, really — and which ones matter most?&rdquo;</div>
          <div class="disc-name">Customer Segmentation &amp; Audience Intelligence</div>
          <p class="disc-desc">Precision audience models that go far beyond demographics — RFM analysis, behavioral cohorts, psychographic profiling, and lookalike modeling — so you finally know who to invest in.</p>
          <div class="disc-tags"><span class="tag">RFM Modeling</span><span class="tag">Behavioral Cohorts</span><span class="tag">Persona Mapping</span><span class="tag">Lookalike Audiences</span><span class="tag">Churn Segmentation</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/marketing-analytics/" class="disc reveal">
        <div class="disc-num">02</div>
        <div>
          <div class="disc-q">&ldquo;Which of our efforts actually drive growth — and which just look busy?&rdquo;</div>
          <div class="disc-name">Analytics &amp; Attribution</div>
          <p class="disc-desc">We replace vanity metrics with revenue truth — full-funnel attribution frameworks, ROI dashboards, and multi-touch models that show precisely what drives conversion and growth.</p>
          <div class="disc-tags"><span class="tag">Multi-Touch Attribution</span><span class="tag">Funnel Analytics</span><span class="tag">Campaign ROI</span><span class="tag">Decision Dashboards</span><span class="tag">A/B Testing</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/machine-learning-consulting/" class="disc reveal">
        <div class="disc-num">03</div>
        <div>
          <div class="disc-q">&ldquo;What does each customer want next — before they ask?&rdquo;</div>
          <div class="disc-name">AI-Powered Personalization</div>
          <p class="disc-desc">Real-time personalization powered by machine learning — dynamic content engines, next-best-action models, and recommendation systems that anticipate intent and convert at scale.</p>
          <div class="disc-tags"><span class="tag">Recommendation Engines</span><span class="tag">Next-Best-Action</span><span class="tag">Dynamic Content</span><span class="tag">Real-Time Decisioning</span><span class="tag">LLM-Driven Copy</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/marketing-analytics/" class="disc reveal">
        <div class="disc-num">04</div>
        <div>
          <div class="disc-q">&ldquo;Where will our next dollar of growth actually come from?&rdquo;</div>
          <div class="disc-name">Demand Generation &amp; Growth Analytics</div>
          <p class="disc-desc">We model the full revenue engine — lead scoring, pipeline forecasting, CAC/LTV optimization, and churn prediction — so your team can acquire better customers, faster, at lower cost.</p>
          <div class="disc-tags"><span class="tag">Lead Scoring</span><span class="tag">Pipeline Forecasting</span><span class="tag">CAC / LTV Modeling</span><span class="tag">Churn Prediction</span><span class="tag">Revenue Attribution</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/ai-consulting/" class="disc reveal">
        <div class="disc-num">05</div>
        <div>
          <div class="disc-q">&ldquo;Where can AI create real advantage — not just noise?&rdquo;</div>
          <div class="disc-name">AI &amp; Machine Learning Advisory</div>
          <p class="disc-desc">From use-case discovery to production deployment, we apply AI pragmatically — where it creates genuine, sustained value rather than experimental novelty.</p>
          <div class="disc-tags"><span class="tag">Model Development</span><span class="tag">MLOps</span><span class="tag">AI Governance</span><span class="tag">Responsible AI</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/generative-ai-consulting/" class="disc reveal">
        <div class="disc-num">06</div>
        <div>
          <div class="disc-q">&ldquo;How do we scale knowledge and creativity without losing control?&rdquo;</div>
          <div class="disc-name">Generative AI &amp; LLM Strategy</div>
          <p class="disc-desc">We help organizations deploy GenAI responsibly — RAG-powered knowledge systems, AI agents, and fine-tuned LLMs that scale output without sacrificing accuracy or trust.</p>
          <div class="disc-tags"><span class="tag">RAG Systems</span><span class="tag">AI Agents</span><span class="tag">LLM Fine-Tuning</span><span class="tag">Prompt Engineering</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/" class="disc reveal">
        <div class="disc-num">07</div>
        <div>
          <div class="disc-q">&ldquo;Of everything we could do, what should we do first?&rdquo;</div>
          <div class="disc-name">Business, Data &amp; Digital Strategy</div>
          <p class="disc-desc">We assess your current data landscape, define a clear strategic roadmap, and guide execution — turning fragmented assets into a unified, decision-ready intelligence layer.</p>
          <div class="disc-tags"><span class="tag">Data Roadmap</span><span class="tag">Tech Strategy</span><span class="tag">Digital Transformation</span><span class="tag">OKR Alignment</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/data-engineering/" class="disc reveal">
        <div class="disc-num">08</div>
        <div>
          <div class="disc-q">&ldquo;Can our data actually answer the questions we ask of it?&rdquo;</div>
          <div class="disc-name">Cloud &amp; Data Platform Architecture</div>
          <p class="disc-desc">We design the scalable, secure data infrastructure your questions require — from customer data platforms to real-time event pipelines — built for sustained growth.</p>
          <div class="disc-tags"><span class="tag">CDP Architecture</span><span class="tag">Real-Time Pipelines</span><span class="tag">Data Lakehouse</span><span class="tag">DataOps</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

      <a href="/services/" class="disc reveal">
        <div class="disc-num">09</div>
        <div>
          <div class="disc-q">&ldquo;Can we trust the answers our data gives us?&rdquo;</div>
          <div class="disc-name">Data Governance &amp; Compliance</div>
          <p class="disc-desc">We ensure your data assets meet the highest standards of quality, lineage, and regulatory compliance — so every answer rests on a foundation you can defend.</p>
          <div class="disc-tags"><span class="tag">Data Quality</span><span class="tag">GDPR / CCPA</span><span class="tag">Consent Management</span><span class="tag">Master Data Mgmt</span></div>
        </div>
        <span class="disc-arrow" aria-hidden="true">&#8599;</span>
      </a>

    </div>
  </div>
</section>

<!-- ======================== MID-PAGE CTA ======================== -->
<div class="cta-banner" role="complementary">
  <div class="container">
    <div class="cta-banner-inner reveal">
      <span class="eyebrow" style="justify-content:center;">Not sure where to start?</span>
      <h2>Tell us the question you've <em>never been able to answer.</em></h2>
      <p>Whether you're a large enterprise or a growth-stage company, our process is designed to meet you exactly where you are — and turn your hardest question into a clear, high-impact path forward.</p>
      <div class="cta-banner-btns">
        <a href="#contact" class="btn-primary" onclick="gtag('event','click',{event_category:'CTA',event_label:'Mid-Page Primary'})">Book a discovery call &#8594;</a>
        <a href="#approach" class="btn-ghost">See how we work</a>
      </div>
    </div>
  </div>
</div>

<!-- ======================== APPROACH ======================== -->
<section id="approach" class="approach-section" aria-labelledby="approach-heading">
  <div class="container">
    <div class="sec-head reveal">
      <span class="eyebrow">How we work</span>
      <h2 id="approach-heading">A disciplined path from <em>question to answer.</em></h2>
      <p>Real answers don't come from tactics — they come from a rigorous, repeatable method that connects every question to a decision you can defend.</p>
    </div>
    <div class="steps-row">
      <div class="step reveal">
        <div class="step-num">01</div>
        <h4>Frame the Question</h4>
        <p>We sharpen the real question behind the brief, audit your data and tooling, and establish a precise baseline before recommending anything.</p>
      </div>
      <div class="step reveal reveal-delay-1">
        <div class="step-num">02</div>
        <h4>Design the Answer</h4>
        <p>We design a prioritized roadmap — the exact models, platforms, and pipelines needed to answer your question and move the KPIs that matter.</p>
      </div>
      <div class="step reveal reveal-delay-2">
        <div class="step-num">03</div>
        <h4>Build &amp; Activate</h4>
        <p>We build, deploy, and activate — models, attribution frameworks, AI systems — integrated seamlessly into your existing stack.</p>
      </div>
      <div class="step reveal reveal-delay-3">
        <div class="step-num">04</div>
        <h4>Prove &amp; Scale</h4>
        <p>We close the loop against agreed KPIs, prove the answer holds in the real world, and keep refining to compound the advantage over time.</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================== WHY APEX ======================== -->
<section id="why-apex" class="why-section" aria-labelledby="why-heading">
  <div class="container">
    <div class="why-grid">
      <div class="why-content reveal">
        <span class="eyebrow">Why Apex</span>
        <h2 id="why-heading">Data scientists who think like operators. Operators who are <em>fluent in data.</em></h2>
        <p>Most consultancies can build a model but can't tell you which question is worth asking. Most strategists can frame the question but can't build the system to answer it. We sit at that rare intersection — bringing both the strategic judgment of a senior partner and the technical precision of an AI and data science firm to every engagement.</p>
        <div class="diffs">
          <div class="diff">
            <div class="diff-ico">→</div>
            <div><h4>Answers, Not Reports</h4><p>Every engagement ends in a decision you can act on and defend — mapped to pipeline, CAC, LTV, or conversion. We don't deliver slideware.</p></div>
          </div>
          <div class="diff">
            <div class="diff-ico">→</div>
            <div><h4>Forward-Looking by Design</h4><p>We don't just explain the past. Our models tell you what's likely next — and what to do about it before it happens.</p></div>
          </div>
          <div class="diff">
            <div class="diff-ico">→</div>
            <div><h4>Pragmatic AI</h4><p>We apply AI where it genuinely moves the needle — with robust governance and a clear path to production, not proof-of-concept theater.</p></div>
          </div>
          <div class="diff">
            <div class="diff-ico">→</div>
            <div><h4>End-to-End Partnership</h4><p>From framing the question through activation and proof — one accountable partner, no handoffs, all the way to the answer.</p></div>
          </div>
        </div>
      </div>
      <div class="why-cards reveal reveal-delay-2">
        <div class="why-card"><div class="wc-val">Strategy &times; Data Science</div><div class="wc-lbl">We bridge the gap between leadership priorities and data engineering reality — so vision becomes measurable performance.</div></div>
        <div class="why-card"><div class="wc-val">AI-Native</div><div class="wc-lbl">Modern ML, predictive modeling, and GenAI tooling embedded from day one — never bolted on afterward.</div></div>
        <div class="why-card"><div class="wc-val">Outcome-Bound</div><div class="wc-lbl">Every initiative measured against clear KPIs from kickoff to close. No vanity metrics, no ambiguity.</div></div>
      </div>
    </div>
  </div>
</section>

<!-- ======================== INDUSTRIES ======================== -->
<section id="industries" class="industries-section" aria-labelledby="industries-heading">
  <div class="container">
    <div class="sec-head reveal">
      <span class="eyebrow">Industries we serve</span>
      <h2 id="industries-heading">The questions change with <em>your field.</em> So do our answers.</h2>
      <p>We bring domain-specific intelligence to every engagement — addressing the real acquisition, retention, and growth questions unique to your sector.</p>
    </div>
    <div class="ind-grid">
      <a href="/industries/financial-services/" class="ind-card reveal">
        <div class="ind-num">01</div>
        <h4>Financial Services</h4>
        <p class="ind-q">&ldquo;Which clients will deepen — and which will quietly leave?&rdquo;</p>
      </a>
      <a href="/industries/healthcare/" class="ind-card reveal reveal-delay-1">
        <div class="ind-num">02</div>
        <h4>Healthcare &amp; Life Sciences</h4>
        <p class="ind-q">&ldquo;Where does the patient journey break down — and why?&rdquo;</p>
      </a>
      <a href="/industries/retail/" class="ind-card reveal reveal-delay-2">
        <div class="ind-num">03</div>
        <h4>Retail &amp; E-Commerce</h4>
        <p class="ind-q">&ldquo;Which customers are worth winning back — and how?&rdquo;</p>
      </a>
      <a href="/industries/manufacturing/" class="ind-card reveal">
        <div class="ind-num">04</div>
        <h4>Manufacturing &amp; Operations</h4>
        <p class="ind-q">&ldquo;Which accounts and markets should we pursue first?&rdquo;</p>
      </a>
      <a href="/industries/technology/" class="ind-card reveal reveal-delay-1">
        <div class="ind-num">05</div>
        <h4>Technology &amp; SaaS</h4>
        <p class="ind-q">&ldquo;Which trials convert — and which accounts will churn?&rdquo;</p>
      </a>
      <a href="/industries/real-estate/" class="ind-card reveal reveal-delay-2">
        <div class="ind-num">06</div>
        <h4>Real Estate &amp; PropTech</h4>
        <p class="ind-q">&ldquo;Who is genuinely ready to buy — and when?&rdquo;</p>
      </a>
      <div class="ind-card reveal">
        <div class="ind-num">07</div>
        <h4>Energy &amp; Utilities</h4>
        <p class="ind-q">&ldquo;Which customers will stay engaged through the transition?&rdquo;</p>
      </div>
      <div class="ind-card reveal reveal-delay-1">
        <div class="ind-num">08</div>
        <h4>Education &amp; EdTech</h4>
        <p class="ind-q">&ldquo;Which students will enroll — and which will drop off?&rdquo;</p>
      </div>
      <div class="ind-card reveal reveal-delay-2">
        <div class="ind-num">09</div>
        <h4>Media &amp; Entertainment</h4>
        <p class="ind-q">&ldquo;What keeps an audience — and what makes them leave?&rdquo;</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================== TESTIMONIALS ======================== -->
<section class="testimonials-section" aria-labelledby="testimonials-heading">
  <div class="container">
    <div class="sec-head reveal">
      <span class="eyebrow">Client voices</span>
      <h2 id="testimonials-heading">Questions they couldn't answer. Until <em>they could.</em></h2>
      <p>We measure success not by deliverables — but by the decisions, growth, and clarity we create alongside our clients.</p>
    </div>
    <div class="testimonials-grid">

      <div class="testimonial-card reveal">
        <span class="quote-icon" aria-hidden="true">&ldquo;</span>
        <p class="testimonial-text">We'd asked &lsquo;which customers will we lose&rsquo; for years with no real answer. Apex built the model that finally told us — and gave us the playbook to keep them. Three audience cohorts we'd never monetized drove a 40% lift in six months.</p>
        <div class="testimonial-author">
          <div class="author-avatar" style="background:linear-gradient(135deg,#F0B429,#D98C5F);" aria-hidden="true">SC</div>
          <div><div class="author-name">Sarah Chen</div><div class="author-title">Chief Data Officer, FinServ Enterprise</div></div>
        </div>
      </div>

      <div class="testimonial-card reveal reveal-delay-1">
        <span class="quote-icon" aria-hidden="true">&ldquo;</span>
        <p class="testimonial-text">What sets Apex apart is that they speak both languages — they'll align with leadership on the question, then architect the models to answer it. We went from zero intelligence capability to production-grade lead scoring in 14 weeks. Pipeline quality transformed overnight.</p>
        <div class="testimonial-author">
          <div class="author-avatar" style="background:linear-gradient(135deg,#D98C5F,#C8674E);" aria-hidden="true">MR</div>
          <div><div class="author-name">Marcus Rivera</div><div class="author-title">VP Growth, HealthTech Scale-Up</div></div>
        </div>
      </div>

      <div class="testimonial-card reveal reveal-delay-2">
        <span class="quote-icon" aria-hidden="true">&ldquo;</span>
        <p class="testimonial-text">Our biggest question was simply &lsquo;where do we even start?&rsquo; Apex delivered a clear roadmap, built our first RFM model, and stayed through full deployment. Three months later, CAC was down 31% and our best-fit cohort had doubled in size.</p>
        <div class="testimonial-author">
          <div class="author-avatar" style="background:linear-gradient(135deg,#F8CD5C,#F0B429);" aria-hidden="true">AB</div>
          <div><div class="author-name">Alexandra Brooks</div><div class="author-title">CEO, Retail Analytics Company</div></div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ======================== TECH STACK ======================== -->
<div class="tech-section" role="complementary" aria-label="Technology ecosystem">
  <div class="tech-inner reveal">
    <span class="eyebrow" style="justify-content:center;">Technology ecosystem</span>
    <div class="tech-badges" role="list">
      <span class="tbadge" role="listitem">Python</span>
      <span class="tbadge" role="listitem">R</span>
      <span class="tbadge" role="listitem">Apache Spark</span>
      <span class="tbadge" role="listitem">dbt</span>
      <span class="tbadge" role="listitem">Snowflake</span>
      <span class="tbadge" role="listitem">BigQuery</span>
      <span class="tbadge" role="listitem">Databricks</span>
      <span class="tbadge" role="listitem">AWS</span>
      <span class="tbadge" role="listitem">Google Cloud</span>
      <span class="tbadge" role="listitem">Azure</span>
      <span class="tbadge" role="listitem">Salesforce</span>
      <span class="tbadge" role="listitem">HubSpot</span>
      <span class="tbadge" role="listitem">Segment</span>
      <span class="tbadge" role="listitem">Amplitude</span>
      <span class="tbadge" role="listitem">GA4</span>
      <span class="tbadge" role="listitem">Tableau</span>
      <span class="tbadge" role="listitem">Power BI</span>
      <span class="tbadge" role="listitem">Looker</span>
      <span class="tbadge" role="listitem">TensorFlow</span>
      <span class="tbadge" role="listitem">PyTorch</span>
      <span class="tbadge" role="listitem">OpenAI / GPT</span>
      <span class="tbadge" role="listitem">LangChain</span>
      <span class="tbadge" role="listitem">Apache Airflow</span>
      <span class="tbadge" role="listitem">Kafka</span>
      <span class="tbadge" role="listitem">Vertex AI</span>
    </div>
  </div>
</div>

<!-- ======================== FAQ ======================== -->
<section class="faq-section" aria-labelledby="faq-heading">
  <div class="container">
    <div class="sec-head reveal">
      <span class="eyebrow">Common questions</span>
      <h2 id="faq-heading">Questions about our <em>questions.</em></h2>
      <p>Have one not answered here? <a href="#contact" style="color:var(--signal);">Reach out directly</a> and we'll respond within one business day.</p>
    </div>
    <div class="faq-list" role="list">

      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">What kinds of questions do you help organizations answer?<span class="faq-icon" aria-hidden="true">+</span></button>
        <div class="faq-answer"><p>The ones buried in your data that no report has ever surfaced: which customers you're about to lose, which decisions are quietly costing you the most, where your next dollar of growth will actually come from, and what to do first. If the answer should exist in your data but doesn't yet, that's our work.</p></div>
      </div>

      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">How is this different from an agency or a BI tool?<span class="faq-icon" aria-hidden="true">+</span></button>
        <div class="faq-answer"><p>Dashboards and agencies tell you what already happened. We build the intelligence layer underneath — the data pipelines, models, and AI systems that answer forward-looking questions and turn them into decisions you can act on.</p></div>
      </div>

      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">How long does a typical engagement take?<span class="faq-icon" aria-hidden="true">+</span></button>
        <div class="faq-answer"><p>Diagnostic assessments typically run 4–6 weeks. Model builds, attribution frameworks, RAG systems, and AI deployments range from 10–20 weeks. We also offer ongoing advisory retainers, and we scope accurately on our first call.</p></div>
      </div>

      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">Do you work within our existing data and tech stack?<span class="faq-icon" aria-hidden="true">+</span></button>
        <div class="faq-answer"><p>Yes — always. We work within and around your existing platforms (Salesforce, HubSpot, Segment, GA4, Snowflake, BigQuery, and more) rather than replacing them. We extract maximum value from what you already have, and recommend additions only when the ROI is clear.</p></div>
      </div>

      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">How do you measure success?<span class="faq-icon" aria-hidden="true">+</span></button>
        <div class="faq-answer"><p>By the quality of the decisions you can now make. We align on measurable outcomes before any engagement begins — pipeline growth, CAC reduction, LTV improvement, faster time-to-answer — and report transparently throughout.</p></div>
      </div>

      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">Can you work alongside our internal team?<span class="faq-icon" aria-hidden="true">+</span></button>
        <div class="faq-answer"><p>Yes — and it's often our most effective model. We integrate as a senior extension of your team: framing the questions, building the models, and upskilling your people in the process. We're not here to replace internal capability — we're here to give it an unfair advantage.</p></div>
      </div>

    </div>
  </div>
</section>

<!-- ======================== CONTACT ======================== -->
<section id="contact" class="contact-section" aria-labelledby="contact-heading">
  <div class="contact-inner">
    <div class="contact-info reveal">
      <span class="eyebrow">Get in touch</span>
      <h2 id="contact-heading">What's the question you've <em>never been able to answer?</em></h2>
      <p>Bring us the thing you've quietly given up on knowing. Whether it's about your customers, your growth, or your data itself — tell us, and we'll show you how we'd get to a real answer.</p>
      <div class="c-methods">
        <a href="mailto:ezequiel@apexdata.cloud" class="c-method" onclick="gtag('event','click',{event_category:'Contact',event_label:'Email'})">
          <div class="c-ico" aria-hidden="true">&#9993;&#65039;</div>
          <div><div class="c-lbl">Email</div><div class="c-val">ezequiel@apexdata.cloud</div></div>
        </a>
      </div>
      <div class="c-guarantee">
        <div class="c-guarantee-ico" aria-hidden="true">&#10003;</div>
        <p><strong>We respond within one business day.</strong> Every inquiry is reviewed personally — no automated responses, no sales handoffs. You'll speak directly with a senior advisor.</p>
      </div>
    </div>

    <div class="c-form-box reveal reveal-delay-2">
      <div id="formContent">
        <div class="cf-head">Ask us your question</div>
        <div class="cf-sub">Tell us what you're trying to figure out. We'll respond within one business day.</div>
        <form action="https://formspree.io/f/xqedrddj" method="POST" id="contactForm" novalidate>
          <div class="fg-row">
            <div class="fg"><label for="first_name">First Name</label><input type="text" id="first_name" name="first_name" placeholder="Jane" required autocomplete="given-name"></div>
            <div class="fg"><label for="last_name">Last Name</label><input type="text" id="last_name" name="last_name" placeholder="Smith" required autocomplete="family-name"></div>
          </div>
          <div class="fg"><label for="email">Work Email</label><input type="email" id="email" name="email" placeholder="jane@company.com" required autocomplete="email"></div>
          <div class="fg"><label for="company">Company</label><input type="text" id="company" name="company" placeholder="Company name" autocomplete="organization"></div>
          <div class="fg">
            <label for="interest">Area of Interest</label>
            <select id="interest" name="interest">
              <option value="" disabled selected>Select a discipline...</option>
              <option>Customer Segmentation &amp; Audience Intelligence</option>
              <option>Analytics &amp; Attribution</option>
              <option>AI-Powered Personalization</option>
              <option>Demand Generation &amp; Growth Analytics</option>
              <option>AI &amp; Machine Learning Advisory</option>
              <option>Generative AI &amp; LLM Strategy</option>
              <option>Business, Data &amp; Digital Strategy</option>
              <option>Cloud &amp; Data Platform Architecture</option>
              <option>Data Governance &amp; Compliance</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div class="fg"><label for="message">Your Question</label><textarea id="message" name="message" rows="4" placeholder="What's the question you've never been able to answer?"></textarea></div>
          <button type="submit" class="cf-submit" id="submitBtn">Send it over &#8594;</button>
        </form>
      </div>
      <div class="form-success" id="formSuccess">
        <div class="form-success-icon" aria-hidden="true">&#10003;</div>
        <h3>Question received</h3>
        <p>Thank you for reaching out. A senior advisor will be in touch within one business day.</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================== FOOTER ======================== -->
<footer class="footer" role="contentinfo">
  <div class="footer-top">
    <div class="f-brand">
      <div class="f-brand-row">
        <img src="apex_logo.PNG" alt="Apex Data Cloud" width="28" height="28">
        <span class="f-brand-name">Apex Data Cloud</span>
      </div>
      <p class="f-brand-desc">AI, data analytics, and machine learning consulting — helping organizations in Orlando, Central Florida, and nationwide answer the questions they've never been able to answer.</p>
      <div class="f-social" aria-label="Contact">
        <a href="mailto:ezequiel@apexdata.cloud" class="f-social-link" aria-label="Email Apex Data Cloud">&#9993;</a>
        <a href="https://www.linkedin.com/company/apex-data-cloud" class="f-social-link" aria-label="Apex Data Cloud on LinkedIn" rel="noopener" target="_blank">in</a>
      </div>
    </div>
    <div class="f-col">
      <h5>Services</h5>
      <ul role="list">
        <li><a href="/services/ai-consulting/">AI Consulting</a></li>
        <li><a href="/services/machine-learning-consulting/">Machine Learning</a></li>
        <li><a href="/services/generative-ai-consulting/">Generative AI</a></li>
        <li><a href="/services/rag-development/">RAG Development</a></li>
        <li><a href="/services/data-engineering/">Data Engineering</a></li>
        <li><a href="/services/marketing-analytics/">Marketing Analytics</a></li>
      </ul>
    </div>
    <div class="f-col">
      <h5>Company</h5>
      <ul role="list">
        <li><a href="/about/">About Apex</a></li>
        <li><a href="/industries/">Industries</a></li>
        <li><a href="/resources/blog/">Blog &amp; Insights</a></li>
        <li><a href="/resources/case-studies/">Case Studies</a></li>
        <li><a href="/locations/orlando/">Orlando AI Consulting</a></li>
        <li><a href="/contact/">Contact Us</a></li>
      </ul>
    </div>
    <div class="f-col">
      <h5>Resources</h5>
      <ul role="list">
        <li><a href="/glossary/">AI &amp; Data Glossary</a></li>
        <li><a href="/resources/guides/">Guides</a></li>
        <li><a href="/assessments/ai-readiness-assessment/">AI Readiness Assessment</a></li>
        <li><a href="mailto:ezequiel@apexdata.cloud">ezequiel@apexdata.cloud</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="f-copy">&copy; 2026 Apex Data Cloud. All rights reserved. &nbsp;|&nbsp; Orlando &amp; Central Florida &middot; Serving clients nationwide.</div>
    <div class="f-bottom-links">
      <a href="/services/">Services</a>
      <a href="/resources/">Resources</a>
      <a href="/contact/">Contact</a>
      <a href="mailto:ezequiel@apexdata.cloud">Email Us</a>
    </div>
  </div>
</footer>

</div><!-- end .apex-site -->

<!-- ======================== JAVASCRIPT ======================== -->
<script>
(function() {
  'use strict';

  // ── Scroll Progress Bar ─────────────────────────────────────────
  var progressBar = document.getElementById('scrollProgress');
  function updateProgress() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ── Navbar scroll state ─────────────────────────────────────────
  var nav = document.getElementById('mainNav');
  function updateNav() {
    if (window.pageYOffset > 40) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }

  // ── Mobile Menu ─────────────────────────────────────────────────
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    mobileMenu.classList.add('active');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('active');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  hamburgerBtn.addEventListener('click', function() {
    if (mobileMenu.classList.contains('active')) { closeMenu(); } else { openMenu(); }
  });
  mobileLinks.forEach(function(link) { link.addEventListener('click', closeMenu); });

  // ── Rotating Hero Questions ─────────────────────────────────────
  var qs = document.querySelectorAll('.qrotator-q');
  if (qs.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var qi = 0;
    setInterval(function() {
      qs[qi].classList.remove('active');
      qi = (qi + 1) % qs.length;
      qs[qi].classList.add('active');
    }, 3400);
  }

  // ── Scroll Reveal (Intersection Observer) ───────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el) { observer.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }

  // ── Animated Counters ───────────────────────────────────────────
  var counters = document.querySelectorAll('.stat-num[data-target]');
  var countersAnimated = false;
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    var duration = 1800;
    var start = performance.now();
    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = ease * target;
      el.textContent = (decimals > 0 ? current.toFixed(decimals) : Math.round(current)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  if ('IntersectionObserver' in window && counters.length) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          counters.forEach(animateCounter);
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(document.querySelector('.stats-section'));
  }

  // ── FAQ Accordion ───────────────────────────────────────────────
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var btn = item.querySelector('.faq-question');
    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function(i) {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Contact Form ────────────────────────────────────────────────
  var contactForm = document.getElementById('contactForm');
  var formContent = document.getElementById('formContent');
  var formSuccess = document.getElementById('formSuccess');
  var submitBtn = document.getElementById('submitBtn');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      var data = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
      }).then(function(res) {
        if (res.ok) {
          formContent.style.display = 'none';
          formSuccess.style.display = 'block';
          if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', { event_category: 'Contact', event_label: 'Contact Form' });
          }
        } else {
          submitBtn.textContent = 'Send it over →';
          submitBtn.disabled = false;
          alert('There was an error. Please email us directly at ezequiel@apexdata.cloud');
        }
      }).catch(function() {
        submitBtn.textContent = 'Send it over →';
        submitBtn.disabled = false;
        alert('There was an error. Please email us directly at ezequiel@apexdata.cloud');
      });
    });
  }

  // ── Throttled scroll handler ────────────────────────────────────
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() { updateProgress(); updateNav(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  updateNav();

})();
</script>
