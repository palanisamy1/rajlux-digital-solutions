import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  Maximize2, 
  Building2, 
  Calendar, 
  MapPin, 
  X,
  Award,
  CheckCircle2
} from 'lucide-react';
import { ease, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

export default function Certification() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const regNumber = 'UDYAM-TN-03-0351163';

  const handleCopy = () => {
    navigator.clipboard.writeText(regNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const certDetails = [
    {
      icon: Award,
      label: 'Registration Number',
      val: regNumber,
      copyable: true,
    },
    {
      icon: Building2,
      label: 'Issuing Ministry',
      val: 'Ministry of MSME, Government of India',
    },
    {
      icon: ShieldCheck,
      label: 'Enterprise Classification',
      val: 'Micro Enterprise · Major Activity: Services',
    },
    {
      icon: FileText,
      label: 'National Industry Code (NIC)',
      val: 'NIC 62099 — Computer Programming, Consultancy & IT Services',
    },
    {
      icon: Calendar,
      label: 'Incorporation & Registration Date',
      val: '17/09/2026 (Inc.) · 18/09/2026 (Reg.)',
    },
    {
      icon: MapPin,
      label: 'Registered Operational Base',
      val: 'Coimbatore, Tamil Nadu — Pin 641104',
    },
  ];

  return (
    <section className="cert-section" id="certification" aria-label="Official Government Certification">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header-wrap">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
          >
            // VERIFIED CREDENTIALS & COMPLIANCE
          </motion.span>

          <WordReveal
            as="h2"
            className="section-heading"
            text="Government Certified Digital Solutions Agency"
          />

          <motion.p
            className="section-desc"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            Rajlux Digital Solutions is an officially registered enterprise with the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, operating under standard legal, compliance, and IT service frameworks.
          </motion.p>
        </div>

        {/* 2-Column Showcase */}
        <div className="cert-showcase-grid">

          {/* Left Column: Certificate Visual Frame */}
          <motion.div
            className="cert-visual-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease }}
          >
            <div className="cert-card-frame">
              
              {/* Top Verification Header */}
              <div className="cert-frame-header">
                <div className="cert-badge-pill">
                  <CheckCircle2 size={14} className="cert-badge-icon" />
                  <span>Officially Verified Entity</span>
                </div>
                <button
                  type="button"
                  className="cert-expand-btn"
                  onClick={() => setModalOpen(true)}
                  aria-label="Expand certificate image"
                  title="Expand to full resolution"
                >
                  <Maximize2 size={15} />
                  <span>Expand</span>
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div 
                className="cert-img-container"
                onClick={() => setModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
              >
                <img
                  src="/udyam-certificate.png"
                  alt="Government of India Udyam Registration Certificate - Rajlux Digital Solutions"
                  className="cert-preview-img"
                  loading="lazy"
                />
                <div className="cert-img-overlay">
                  <span className="cert-overlay-pill">
                    <Maximize2 size={16} />
                    Click to View Full Document
                  </span>
                </div>
              </div>

              {/* Action Buttons Below Image */}
              <div className="cert-actions-row">
                <a
                  href="/udyam-registration-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-primary"
                >
                  <FileText size={15} />
                  <span>View Official PDF</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="/udyam-registration-certificate.pdf"
                  download="Rajlux-Digital-Solutions-Udyam-Certificate.pdf"
                  className="cert-btn-secondary"
                >
                  <Download size={15} />
                  <span>Download</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Key Details & Verified Specs */}
          <motion.div
            className="cert-info-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, ease, delay: 0.15 }}
          >
            <div className="cert-details-card">
              <div className="cert-card-title-bar">
                <div className="cert-title-badge">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="cert-card-title">Registration Specification</h3>
                  <span className="cert-card-sub">Central Udyam Database Record</span>
                </div>
              </div>

              {/* Metadata Grid */}
              <div className="cert-meta-list">
                {certDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="cert-meta-item">
                      <span className="cert-meta-icon">
                        <Icon size={16} />
                      </span>
                      <div className="cert-meta-content">
                        <span className="cert-meta-label">{item.label}</span>
                        <div className="cert-meta-val-row">
                          <span className="cert-meta-value">{item.val}</span>
                          {item.copyable && (
                            <button
                              type="button"
                              className={`cert-copy-btn ${copied ? 'copied' : ''}`}
                              onClick={handleCopy}
                              title="Copy registration number"
                            >
                              {copied ? (
                                <>
                                  <Check size={12} />
                                  <span>Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy size={12} />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Portal Verification Notice */}
              <div className="cert-verify-box">
                <div className="cert-verify-text">
                  <strong>Verification Authority</strong>
                  <p>
                    Authenticate this registration on the official National Portal:
                  </p>
                </div>
                <a
                  href="https://udyamregistration.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-portal-link"
                >
                  <span>udyamregistration.gov.in</span>
                  <ExternalLink size={13} />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* High-Resolution Full-Screen Modal Lightbox */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              className="cert-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              className="cert-modal-content"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cert-modal-header">
                <div className="cert-modal-title">
                  <ShieldCheck size={18} className="cert-modal-icon" />
                  <span>Udyam Registration Certificate — Government of India</span>
                </div>
                <div className="cert-modal-actions">
                  <a
                    href="/udyam-registration-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-modal-btn"
                  >
                    <FileText size={14} />
                    <span>Open PDF</span>
                  </a>
                  <button
                    type="button"
                    className="cert-modal-close"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close certificate modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="cert-modal-body">
                <img
                  src="/udyam-certificate.png"
                  alt="Udyam Registration Certificate Full View"
                  className="cert-modal-img"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
