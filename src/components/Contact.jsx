import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MessageCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate enterprise response dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 700);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        <div className="consultation-layout">
          
          {/* Left Column: Direct Agency Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">// 06 — Direct Consultation</span>
            <h2 className="section-heading">Let's Build Something Meaningful.</h2>
            <p className="about-subnarrative" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Have a scope ready or need strategic advice? Fill out the brief consultation form. We guarantee an initial reply within 1 business hour.
            </p>

            <div className="contact-channels">
              <motion.div
                className="contact-channel-card"
                whileHover={{ y: -3, borderColor: 'var(--border-hover)' }}
              >
                <div className="contact-icon-bubble">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="channel-label">Direct Inquiries</span>
                  <a href="mailto:rajlux7733@gmail.com" className="channel-val">rajlux7733@gmail.com</a>
                </div>
              </motion.div>

              <motion.div
                className="contact-channel-card"
                whileHover={{ y: -3, borderColor: 'var(--border-hover)' }}
              >
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="channel-label">Phone Consultation</span>
                  <a href="tel:+916369589185" className="channel-val">+91 63695 89185</a>
                </div>
              </motion.div>

              <motion.div
                className="contact-channel-card"
                whileHover={{ y: -3, borderColor: 'var(--border-hover)' }}
              >
                <div className="contact-icon-bubble">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="channel-label">Availability</span>
                  <span className="channel-val" style={{ fontSize: '0.8125rem' }}>
                    Mon – Sat: 9:00 AM – 7:00 PM (IST) • 24/7 SLA Available
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Direct WhatsApp Action */}
            <motion.a
              href="https://wa.me/918148753891"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-connect-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={18} />
              <span>Fast Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Right Column: Inquiry Brief Form */}
          <motion.div
            className="inquiry-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="form-title">Project Inquiry Brief</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row-2col">
                <div className="form-field-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input-control"
                    placeholder="Alexander Vance"
                    required
                  />
                </div>
                <div className="form-field-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-control"
                    placeholder="alex@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-field-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-control"
                    placeholder="+91 63695 89185"
                  />
                </div>
                <div className="form-field-group">
                  <label htmlFor="service">Primary Requirement</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input-control"
                  >
                    <option value="">Select Domain</option>
                    <option value="web">Web Engineering &amp; Architecture</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="branding">Brand Identity System</option>
                    <option value="marketing">Digital Acquisition &amp; SEO</option>
                    <option value="cloud">Cloud &amp; Infrastructure</option>
                    <option value="ecommerce">E-Commerce Development</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group full">
                <label htmlFor="message">Project Scope &amp; Objectives *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input-control"
                  placeholder="Describe your vision, timeline, target deliverables, or existing architecture..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-form-submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Transmitting Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="form-feedback-card active"
                    role="alert"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle2 size={20} color="#10b981" />
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
