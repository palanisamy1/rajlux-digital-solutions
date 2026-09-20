import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, RefreshCw, Award, Clock, Shield, TrendingUp } from 'lucide-react';
import { ease, fadeUp, staggerContainer, staggerChild, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

const differentiators = [
  { icon: Headphones, pill: 'Feature 01', title: 'Lifetime Support', desc: 'Our engineering desk remains accessible throughout your operational lifecycle with zero artificial expiry dates or punitive renewal fees.' },
  { icon: RefreshCw, pill: 'Feature 02', title: 'Lifetime Updates', desc: 'As browser standards, web APIs, and security frameworks evolve, we patch and update your core systems automatically.' },
  { icon: Award, pill: 'Feature 03', title: 'Excellent Quality', desc: 'Clean typography, modular component hierarchies, and strict WCAG accessibility guidelines in every screen we deploy.' },
  { icon: Clock, pill: 'Feature 04', title: 'On-Time Delivery', desc: 'We operate in two-week agile sprint cadences with synchronized milestone reviews. Deadlines are guaranteed commitments.' },
  { icon: Shield, pill: 'Feature 05', title: 'Enterprise Security', desc: 'End-to-end data encryption, rigorous sanitization, OWASP compliance, and multi-factor authentication systems.' },
  { icon: TrendingUp, pill: 'Feature 06', title: 'Measurable ROI', desc: 'Directly tying digital architecture to key company metrics: customer acquisition costs, checkout conversions, and retention.' },
];

export default function WhyUs() {
  return (
    <section className="section-wrapper" id="why-us">
      <div className="container">

        <div
          className="section-header-row"
          style={{ textAlign: 'center', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
          >
            // 03 — Differentiators
          </motion.span>
          <WordReveal
            as="h2"
            className="section-heading"
            text="Built on Uncompromising Excellence"
          />
          <p className="section-subtext" style={{ maxWidth: '580px' }}>
            We don't abandon clients after deployment. Our contracts represent lasting partnerships with explicit guarantees.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <motion.div
          className="diff-card-grid"
          variants={staggerContainer(0.09, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                className="diff-card"
                variants={staggerChild}
                whileHover={{
                  y: -8,
                  borderColor: 'var(--border-hover)',
                  boxShadow: '0 16px 40px rgba(15,23,42,0.08)',
                  transition: { duration: 0.2 },
                }}
              >
                <div className="diff-card-header">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{ display: 'inline-block', cursor: 'default' }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </motion.span>
                  <motion.span
                    className="diff-card-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease }}
                  >
                    {diff.pill}
                  </motion.span>
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
