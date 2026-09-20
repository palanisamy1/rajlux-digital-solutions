import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'why-us', 'process', 'portfolio', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Methodology', href: '#process', id: 'process' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Notice Bar */}
      <div className="top-notice" role="banner">
        <div className="container">
          <div className="notice-inner">
            <span className="pulse-dot" aria-hidden="true"></span>
            <span>Accepting select client partnerships for Q2/Q3 2025.</span>
            <a href="#contact" className="notice-link">Schedule a consultation →</a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="main-header">
        <div className="container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Brand Logo & Wordmark */}
            <a href="#home" className="nav-brand" aria-label="Rajlux Digital Solutions Home">
              <motion.img 
                src="/logo.png" 
                alt="Rajlux Digital Solutions" 
                className="brand-logo-img"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="brand-meta">
                <span className="brand-name">
                  Rajlux
                  <span className="brand-badge">Pvt Ltd</span>
                </span>
                <span className="brand-tagline">Digital Solutions</span>
              </div>
            </a>

            {/* Navigation Links */}
            <ul className="nav-menu" role="menubar">
              {navLinks.map((link) => (
                <li key={link.id} role="none">
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    role="menuitem"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Action Cluster */}
            <div className="nav-actions">
              <a href="tel:+916369589185" className="nav-phone" title="Call Concierge Desk">
                +91 63695 89185
              </a>

              {/* Get a Quote Button */}
              <motion.a
                href="#contact"
                className="btn-pill-cta"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Get a Quote</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </motion.a>

              {/* Mobile Hamburger Toggle */}
              <button
                className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav open"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="mobile-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="mobile-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-contact-bar">
                <a href="tel:+916369589185" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  <Phone size={16} /> +91 63695 89185
                </a>
                <a href="mailto:rajlux7733@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <Mail size={16} /> rajlux7733@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
