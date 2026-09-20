import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-label="Project Consultation Banner">
      <div className="container">
        <motion.div
          className="cta-banner-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, borderColor: 'var(--border-hover)' }}
        >
          <div className="cta-box-content">
            <span className="cta-eyebrow">// Ready for What's Next</span>
            <h2 className="cta-heading">Ready to build a cleaner, faster digital presence?</h2>
            <p className="cta-desc">
              Join 100+ businesses that rely on Rajlux Digital Solutions for software engineering, design, and continuous updates.
            </p>
            <div className="cta-buttons-wrap">
              <motion.a
                href="#contact"
                className="btn-primary-hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Project</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href="tel:+916369589185"
                className="btn-secondary-hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={15} />
                <span>Call Concierge: +91 63695 89185</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
