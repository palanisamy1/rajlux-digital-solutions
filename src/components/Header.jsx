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
    { name: 'Services', href: '#services', id: 'services', hasDropdown: true },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Methodology', href: '#process', id: 'process' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact', isExternal: true },
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

      {/* Agentcard-Inspired Minimalist Technical Navigation Header */}
      <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`} id="main-header" aria-label="Primary">
        {/* Left Cluster: Wordmark + Inline Technical Nav Links */}
        <div className="nav-left-cluster">
          <a href="#home" className="wordmark" aria-label="Rajlux Digital Solutions Home">
            <img 
              src="/logo-emblem.png" 
              alt="Rajlux" 
              className="wordmark-logo" 
            />
            <span>Rajlux</span>
          </a>

          {/* Technical Uppercase Nav Links */}
          <ul className="nav-links-track" role="menubar">
            {navLinks.map((link) => (
              <li key={link.id} role="none">
                <a
                  href={link.href}
                  className={`ac-navlink ${activeSection === link.id ? 'active' : ''}`}
                  role="menuitem"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <span className="ac-arrow" aria-hidden="true">▾</span>}
                  {link.isExternal && <sup aria-hidden="true">↗</sup>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Action Cluster: Concierge Desk + Agentcard Bracket Button */}
        <div className="nav-right-cluster">
          <a href="tel:+916369589185" className="ac-phone-desk" title="Call Concierge Desk">
            +91 63695 89185
          </a>

          {/* Iconic Agentcard Signature Bracket Button */}
          <span className="bkt-frame">
            <motion.a
              href="#contact"
              className="bkt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="brk" aria-hidden="true">
                <i className="tl"></i>
                <i className="tr"></i>
                <i className="bl"></i>
                <i className="br"></i>
              </span>
              <span className="orn" aria-hidden="true">✦</span>
              <span>GET STARTED</span>
              <span className="orn" aria-hidden="true">✦</span>
            </motion.a>
          </span>

          {/* Mobile Technical Hamburger Toggle */}
          <button
            className={`nav-burger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="ac-mobile-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
            >
              <ul className="ac-mobile-links">
                {navLinks.map((link) => (
                  <li key={link.id} className="ac-mobile-item">
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name} {link.isExternal && <sup>↗</sup>}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="ac-mobile-contact">
                <a href="tel:+916369589185" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#090d16', textDecoration: 'none', letterSpacing: '0.08em' }}>
                  TEL: +91 63695 89185
                </a>
                <a href="mailto:rajlux7733@gmail.com" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748b', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  EMAIL: rajlux7733@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
