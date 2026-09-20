import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MessageCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { ease, fadeLeft, fadeRight, staggerContainer, staggerChild, viewport } from '../utils/animations';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
    }, 700);
  };

  const channels = [
    { icon: Mail, label: 'Direct Inquiries', value: 'rajlux7733@gmail.com', href: 'mailto:rajlux7733@gmail.com' },
    { icon: Phone, label: 'Phone Consultation', value: '+91 63695 89185', href: 'tel:+916369589185' },
    { icon: Clock, label: 'Availability', value: 'Mon – Sat: 9:00 AM – 7:00 PM (IST) • 24/7 SLA Available', href: null },
  ];

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        <div className="consultation-layout">

          {/* Left Column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span
              className="section-eyebrow"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              // 06 — Direct Consultation
            </motion.span>
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Let's Build Something Meaningful.
            </motion.h2>
            <motion.p
              className="about-subnarrative"
              style={{ marginTop: '1rem', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.18, ease }}
            >
              Have a scope ready or need strategic advice? Fill out the brief consultation form. We guarantee an initial reply within 1 business hour.
            </motion.p>

            <motion.div
              className="contact-channels"
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <motion.div
                    key={i}
                    className="contact-channel-card"
                    variants={staggerChild}
                    whileHover={{ y: -4, borderColor: 'var(--border-hover)', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}
                  >
                    <motion.div
                      className="contact-icon-bubble"
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div>
                      <span className="channel-label">{ch.label}</span>
                      {ch.href ? (
                        <a href={ch.href} className="channel-val">{ch.value}</a>
                      ) : (
                        <span className="channel-val" style={{ fontSize: '0.8125rem' }}>{ch.value}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.a
              href="https://wa.me/918148753891"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-connect-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: '0 10px 30px rgba(37,211,102,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
              >
                <MessageCircle size={18} />
              </motion.span>
              <span>Fast Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            className="inquiry-form-card"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h3
              className="form-title"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              Project Inquiry Brief
            </motion.h3>

            <form onSubmit={handleSubmit} noValidate>
              <motion.div
                variants={staggerContainer(0.08, 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.div className="form-row-2col" variants={staggerChild}>
                  <div className="form-field-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input-control" placeholder="Alexander Vance" required />
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input-control" placeholder="alex@company.com" required />
                  </div>
                </motion.div>

                <motion.div className="form-row-2col" variants={staggerChild}>
                  <div className="form-field-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input-control" placeholder="+91 63695 89185" />
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="service">Primary Requirement</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-input-control">
                      <option value="">Select Domain</option>
                      <option value="web">Web Engineering &amp; Architecture</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="branding">Brand Identity System</option>
                      <option value="marketing">Digital Acquisition &amp; SEO</option>
                      <option value="cloud">Cloud &amp; Infrastructure</option>
                      <option value="ecommerce">E-Commerce Development</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div className="form-field-group full" variants={staggerChild}>
                  <label htmlFor="message">Project Scope &amp; Objectives *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-input-control" placeholder="Describe your vision, timeline, target deliverables, or existing architecture..." required></textarea>
                </motion.div>

                <motion.div variants={staggerChild}>
                  <motion.button
                    type="submit"
                    className="btn-form-submit"
                    disabled={loading}
                    whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 24px rgba(15,23,42,0.14)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {loading ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>
                          <Loader2 size={16} />
                        </motion.span>
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight size={16} strokeWidth={2.5} />
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="form-feedback-card active"
                    role="alert"
                    initial={{ opacity: 0, y: 16, scale: 0.93 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                    >
                      <CheckCircle2 size={20} color="#10b981" />
                    </motion.span>
                    <span>Thank you. Your message has reached our team. We will review and respond within 1 hour.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
