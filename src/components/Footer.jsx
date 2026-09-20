import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Column 1: Studio Identity */}
          <div>
            <div className="footer-brand-wrap">
              <img src="logo.png" alt="Rajlux Digital Solutions" className="footer-brand-logo" />
              <span className="footer-brand-title">Rajlux Digital Solutions Pvt. Ltd.</span>
            </div>
            <p className="footer-brand-desc">
              Architects of ultra-clean, resilient web applications, mobile platforms, and distinctive brand identities. Operating with guaranteed delivery and perpetual support.
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              India • Global Delivery
            </div>

            <div className="footer-social-strip">
              <a href="https://www.facebook.com/profile.php?id=61582757680405" className="social-circle-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://www.instagram.com/rajlux_digital_solutions/" className="social-circle-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
              <a href="https://www.linkedin.com/in/palanisamy-r-a66baa357" className="social-circle-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://youtube.com/@java_palani" className="social-circle-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">YT</a>
              <a href="https://wa.me/918148753891" className="social-circle-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">WA</a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Branding &amp; Identity</a></li>
              <li><a href="#services">Cloud &amp; IT Solutions</a></li>
              <li><a href="#services">E-Commerce Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & SLA */}
          <div>
            <h4 className="footer-col-title">Contact Details</h4>
            <ul className="footer-links-list">
              <li>Email: <a href="mailto:rajlux7733@gmail.com" style={{ fontWeight: 600 }}>rajlux7733@gmail.com</a></li>
              <li>Phone: <a href="tel:+916369589185" style={{ fontWeight: 600 }}>+91 63695 89185</a></li>
              <li>WhatsApp: <a href="https://wa.me/918148753891" target="_blank" rel="noopener noreferrer">+91 81487 53891</a></li>
              <li style={{ paddingTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                Response SLA: ≤ 60 Minutes
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>&copy; 2026 Rajlux Digital Solutions Pvt. Ltd. All rights reserved.</div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
