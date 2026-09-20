import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, RefreshCw, Award, Clock, Shield, TrendingUp } from 'lucide-react';

const differentiators = [
  {
    icon: Headphones,
    pill: 'Feature 01',
    title: 'Lifetime Support',
    desc: 'Our engineering desk remains accessible throughout your operational lifecycle with zero artificial expiry dates or punitive renewal fees.',
  },
  {
    icon: RefreshCw,
    pill: 'Feature 02',
    title: 'Lifetime Updates',
    desc: 'As browser standards, web APIs, and security frameworks evolve, we patch and update your core systems automatically.',
  },
  {
    icon: Award,
    pill: 'Feature 03',
    title: 'Excellent Quality',
    desc: 'Clean typography, modular component hierarchies, and strict WCAG accessibility guidelines in every screen we deploy.',
  },
  {
    icon: Clock,
    pill: 'Feature 04',
    title: 'On-Time Delivery',
    desc: 'We operate in two-week agile sprint cadences with synchronized milestone reviews. Deadlines are guaranteed commitments.',
  },
  {
    icon: Shield,
    pill: 'Feature 05',
    title: 'Enterprise Security',
    desc: 'End-to-end data encryption, rigorous sanitization, OWASP compliance, and multi-factor authentication systems.',
  },
  {
    icon: TrendingUp,
    pill: 'Feature 06',
    title: 'Measurable ROI',
    desc: 'Directly tying digital architecture to key company metrics: customer acquisition costs, checkout conversions, and retention.',
  },
];

export default function WhyUs() {
  return (
    <section className="section-wrapper" id="why-us">
      <div className="container">
        
        <motion.div
          className="section-header-row"
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">// 03 — Differentiators</span>
          <h2 className="section-heading">Built on Uncompromising Excellence</h2>
          <p className="section-subtext" style={{ maxWidth: '580px' }}>
            We don't abandon clients after deployment. Our contracts represent lasting partnerships with explicit guarantees.
          </p>
        </motion.div>

        {/* 6 Differentiators Grid */}
        <motion.div
          className="diff-card-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                className="diff-card"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
              >
                <div className="diff-card-header">
                  <Icon size={22} strokeWidth={2} />
                  <span className="diff-card-pill">{diff.pill}</span>
                </div>
                <h3 className="diff-card-title">{diff.title}</h3>
                <p className="diff-card-desc">{diff.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
