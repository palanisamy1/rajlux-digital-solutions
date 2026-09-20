import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const checkpoints = [
  {
    title: 'Standards of Reliability',
    desc: 'Rigorous QA, cross-browser compatibility, and speed optimization.',
  },
  {
    title: 'Dedicated Project Manager',
    desc: 'A single clear point of contact with weekly sprints and transparent reporting.',
  },
  {
    title: 'Transparent Fixed Pricing',
    desc: 'Strict milestones with zero hidden charges or unpredictable retainers.',
  },
  {
    title: 'Guaranteed Timelines',
    desc: 'On-time milestone delivery backed by agile development practices.',
  },
];

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        <div className="about-grid-layout">
          
          {/* Left Column: Studio Identifier Card */}
          <motion.div
            className="about-left-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="section-eyebrow">// 01 — About Agency</span>
              <h2 className="section-heading">
                The Gold Standard in Digital Engineering.
              </h2>
            </div>

            <motion.div
              className="studio-id-card"
              whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="studio-id-top">
                <span className="studio-id-label">Studio Identifier</span>
                <span className="pulse-dot" title="Active Agency Status"></span>
              </div>
              <div className="studio-id-body">
                <div className="studio-id-inc">Incorporated</div>
                <div className="studio-id-title">Rajlux Digital Solutions Pvt. Ltd.</div>
                <p className="studio-id-desc">
                  Delivering cutting-edge web platforms, mobile software, and brand systems for 100+ global partners.
                </p>
              </div>
              <div className="studio-id-footer">
                <div>
                  <strong>Status</strong> Verified Active
                </div>
                <div>
                  <strong>HQ</strong> India • Global Delivery
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Checkpoints */}
          <motion.div
            className="about-right-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="about-narrative">
              At <strong>Rajlux Digital Solutions Pvt. Ltd.</strong>, we fuse rigorous engineering precision with elegant minimalist aesthetics. We do not build bloated, slow websites—we build high-performance digital engines engineered to scale operations and accelerate market leadership.
            </p>
            <p className="about-subnarrative">
              From early-stage startups to established enterprises, our team champions transparency, clean codebases, and proactive communication. Every project is paired with an uncompromising quality checklist.
            </p>

            <motion.div
              className="check-cards-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {checkpoints.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="check-card"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  whileHover={{ y: -3, borderColor: 'var(--border-hover)' }}
                >
                  <Check size={18} strokeWidth={2.5} />
                  <div>
                    <h3 className="check-card-title">{item.title}</h3>
                    <p className="check-card-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#portfolio"
              className="arrow-link"
              whileHover={{ x: 5 }}
            >
              <span>View Case Studies</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
