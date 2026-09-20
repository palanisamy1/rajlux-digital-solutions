import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

function CounterNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutQuad
      const current = Math.round(target * progress * (2 - progress));
      setCount(current);

      if (frame === totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-bg grid-lines" aria-hidden="true"></div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={itemVariants} className="hero-eyebrow-pill">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            <span>Ultra-Clean Engineering &amp; Creative Direction</span>
            <span className="eyebrow-divider">/</span>
            <span className="eyebrow-est">Est. 2025</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="hero-title">
            We architect high-impact <br />
            <span className="gold-gradient-text">digital experiences</span>.
          </motion.h1>

          {/* Subtitle Narrative */}
          <motion.p variants={itemVariants} className="hero-desc">
            Rajlux Digital Solutions Pvt. Ltd. builds robust bespoke software, high-conversion web platforms, and refined brand identities with guaranteed on-time delivery and lifetime support.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="hero-cta-group">
            <motion.a
              href="#services"
              className="btn-primary-hero"
              id="hero-view-services"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Services</span>
              <ArrowDown size={16} strokeWidth={2.5} />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary-hero"
              id="hero-consultation-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Free Consultation</span>
              <ArrowUpRight size={16} strokeWidth={2} color="var(--text-secondary)" />
            </motion.a>
          </motion.div>

          {/* 4-Metric Statistics Board */}
          <motion.div
            variants={itemVariants}
            className="stats-board"
            id="stats-board"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-value">
                  <CounterNumber target={100} suffix="+" />
                </div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">
                  <CounterNumber target={98} suffix="%" />
                </div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">
                  <CounterNumber target={3} suffix="+" />
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Dedicated Support</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
