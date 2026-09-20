import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'Deep dive consultation to audit your market positioning, technical prerequisites, user pain points, and measurable milestones.',
    time: 'Week 1',
    active: false,
  },
  {
    num: '02',
    title: 'Strategy & Wireframes',
    desc: 'Minimalist Figma prototypes, comprehensive design system tokens, typography scales, and information architecture layouts.',
    time: 'Week 2 – 3',
    active: false,
  },
  {
    num: '03',
    title: 'Development & Testing',
    desc: 'Clean, modular code execution, CI/CD automated deployment pipelines, unit testing, and rigorous multi-device QA checks.',
    time: 'Week 4 – 6',
    active: false,
  },
  {
    num: '04',
    title: 'Launch & Lifetime Care',
    desc: 'DNS cutover, production hardening, speed verification, analytics onboarding, followed by perpetual support and updates.',
    time: 'Perpetual',
    active: true,
  },
];

export default function Methodology() {
  return (
    <section className="section-wrapper bg-alt" id="process">
      <div className="container">
        
        <motion.div
          className="section-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-eyebrow">// 04 — Methodology</span>
            <h2 className="section-heading">How We Work</h2>
          </div>
          <p className="section-subtext">
            A four-step linear framework engineered to eradicate ambiguities and accelerate deployment velocity.
          </p>
        </motion.div>

        {/* 4 Process Steps */}
        <motion.div
          className="process-steps-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process-step-item"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -5, borderColor: 'var(--border-hover)' }}
            >
              <div>
                <div className="step-num-display">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className={`step-time-tag ${step.active ? 'active' : ''}`}>
                {step.time}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
