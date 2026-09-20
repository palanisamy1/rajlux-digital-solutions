import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Zap, Clock } from 'lucide-react';
import { ease, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

const steps = [
  {
    num: '01',
    tag: 'Phase 01',
    title: 'Discovery & System Architecture Audit',
    desc: 'Deep-dive architectural consultation to audit market positioning, tech stack prerequisites, user pain points, and measurable milestones. We eliminate ambiguity before a single line of code is written.',
    time: 'Week 01',
    metric: '100% Scope Clarity',
    icon: Sparkles,
    badgeColor: 'rgba(2, 132, 199, 0.08)',
    accentColor: '#0284c7',
    deliverables: ['Full Architecture Specification', 'Security Risk Assessment', 'Synchronized Sprint Roadmap'],
  },
  {
    num: '02',
    tag: 'Phase 02',
    title: 'Strategy & High-Fidelity Design Systems',
    desc: 'Minimalist Figma design systems, comprehensive component tokens, responsive typography scales, and interactive user journeys that bring your vision to life before engineering kicks off.',
    time: 'Week 02 – 03',
    metric: 'Interactive Prototypes',
    icon: Zap,
    badgeColor: 'rgba(79, 70, 229, 0.08)',
    accentColor: '#4f46e5',
    deliverables: ['Clickable High-Fi Prototype', 'Design Token Library', 'User Journey Validation'],
  },
  {
    num: '03',
    tag: 'Phase 03',
    title: 'Engineering Execution & Automated QA',
    desc: 'Clean, modular code execution, CI/CD automated deployment pipelines, unit testing, and rigorous multi-device verification to ensure blistering speed and zero critical regressions.',
    time: 'Week 04 – 06',
    metric: '95+ Lighthouse Velocity',
    icon: Clock,
    badgeColor: 'rgba(5, 150, 105, 0.08)',
    accentColor: '#059669',
    deliverables: ['Production-Grade Codebase', 'Automated Testing Suite', 'Cross-Device QA Signoff'],
  },
  {
    num: '04',
    tag: 'Phase 04',
    title: 'Production Cutover & Lifetime Care',
    desc: 'DNS zero-downtime cutover, production hardening, speed verification, analytics onboarding, followed by perpetual support desk access and proactive updates for lifetime peace of mind.',
    time: 'Perpetual Partnership',
    metric: 'Lifetime Support SLA',
    icon: ShieldCheck,
    badgeColor: 'rgba(15, 23, 42, 0.08)',
    accentColor: '#0f172a',
    deliverables: ['Zero-Downtime Deployment', 'Lifetime Security Patching', 'Dedicated PM Contact'],
  },
];

export default function Methodology() {
  return (
    <section className="section-wrapper bg-alt" id="process">
      <div className="container">

        {/* Phenomenon Studio Editorial Section Header */}
        <div className="section-header-row" style={{ alignItems: 'flex-start' }}>
          <div>
            <motion.span
              className="section-eyebrow"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              // 04 — Methodology & Delivery
            </motion.span>
            <WordReveal
              as="h2"
              className="section-heading"
              text="How We Engineer & Ship"
            />
          </div>
          <p className="section-subtext">
            A battle-tested four-step linear framework engineered to eradicate ambiguities, protect deadlines, and accelerate time-to-market.
          </p>
        </div>

        {/* Phenomenon Studio Signature Sticky Stacking Cards */}
        <div className="phnmn-stack-container">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={i}
                className="phnmn-sticky-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                <div className="phnmn-card-inner">
                  {/* Card Left: Large Numeral + Tag */}
                  <div className="phnmn-card-left">
                    <div className="phnmn-card-num-wrap">
                      <span className="phnmn-card-num">{step.num}</span>
                      <span className="phnmn-card-tag">{step.tag}</span>
                    </div>
                    <div className="phnmn-card-time-badge">
                      <span className="phnmn-card-dot" style={{ backgroundColor: step.accentColor }} />
                      <span>{step.time}</span>
                    </div>
                  </div>

                  {/* Card Center: Title, Description, Deliverables */}
                  <div className="phnmn-card-center">
                    <h3 className="phnmn-card-title">{step.title}</h3>
                    <p className="phnmn-card-desc">{step.desc}</p>
                    
                    <div className="phnmn-deliverables-list">
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="phnmn-deliv-item">
                          <CheckCircle2 size={16} color={step.accentColor} className="phnmn-deliv-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Right: Metric Highlight Badge */}
                  <div className="phnmn-card-right">
                    <div
                      className="phnmn-metric-badge"
                      style={{ background: step.badgeColor, borderColor: `${step.accentColor}25` }}
                    >
                      <IconComponent size={22} color={step.accentColor} />
                      <div className="phnmn-metric-val">{step.metric}</div>
                      <div className="phnmn-metric-label">Commitment</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
