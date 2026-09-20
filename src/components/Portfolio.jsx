import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    category: 'web',
    categoryLabel: 'Web Development',
    badge: 'E-Commerce Platform',
    title: 'Luxury Fashion Store',
    desc: 'Full-stack headless commerce platform with dynamic 3D asset viewer and sub-second instant checkout.',
    meta: 'Performance 99/100',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hdugat2HuMLNKycxKjUiUEDqnwwasMfQ4969Qbe4nmjyIytRO5x7qNsrNy2krqp3gwvdgxAA5ZY-0ACU4gtTO7t8J2HBkiT46KUGgjLsXzSz61B-OIzC-jzlbMWF7mKD_kqVAwTjo6rCQzCE7Z6jOdhNEkbw8SY0OiMUf9kCc0CybTF859dZLp2S_IIZhoS81V06CWzZQT7bjGVHNQ0C4Ak8BSrLa4AUWzHqLG-uzhW9iPRWmceeCg',
  },
  {
    id: 2,
    category: 'mobile',
    categoryLabel: 'Mobile App',
    badge: 'FinTech Native App',
    title: 'Digital Banking Solution',
    desc: 'Secure, biometric-enabled banking mobile interface with instantaneous transaction logging and encrypted ledger.',
    meta: 'iOS & Android',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1KVb7V9q8pMr3tqgfbsakYYLLElpDsp8UC-knOxUZLxMxQIdfi-assMTz9sPk5OMSqiJSI2_HcNP713e5b2R49HrToaaPUQVstPhuSmKi5OfVF_OQYgA86BP9MxaJ1jE9EWGtD1ACkor9RQNZuhq4tP-UuxMrN-54zUCGBIRuyDPrrnmHwMFoQ6pw3X-Z0SzR09sXl_Wbu49W6jYeSj2sOvuNt7welOotayY8jwJsz-DhpOUk4pnXKg',
  },
  {
    id: 3,
    category: 'branding',
    categoryLabel: 'Branding',
    badge: 'Brand Architecture',
    title: 'Corporate Identity System',
    desc: 'Comprehensive visual token system, corporate stationery, and typographic scale guidelines for scale-up ventures.',
    meta: 'Tokenized UI Kit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ627rx3XvGkE9_cU-6BIAyDV3nSfmEIS-qPD5exEr3-ifKKKYzE6urnDdF4KoRIbapPmx5aqJhE9wnMZ91mW3f4wXUTIsA_ARuCuimJP5Z5yVzYmoSWXB13zQltTG_aLNBdMXpZfmZ6S6g_WdiUSvuxdfraRl_2d-OhMRBUFRsBUvfyKT6eIjTZsd_3ajQAkM7wVzji7fRD6vCGRg_RuFhpOC-KzWULdTa8naHz1gfYTSPzmKcWeDhg',
  },
  {
    id: 4,
    category: 'web',
    categoryLabel: 'Web App',
    badge: 'SaaS Platform',
    title: 'Enterprise Analytics Suite',
    desc: 'Real-time operational business intelligence platform with sub-second stream telemetry and custom data visualization.',
    meta: 'Real-Time WebSockets',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'mobile',
    categoryLabel: 'Mobile App',
    badge: 'Omnichannel App',
    title: 'NextGen Retail Experience',
    desc: 'Seamless augmented catalog, 1-tap Apple Pay/Google Pay integration, and AI-curated personalized outfit suggestions.',
    meta: '4.9★ App Store',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'branding',
    categoryLabel: 'Branding',
    badge: 'Luxury Identity',
    title: 'Artisan Visual Identity',
    desc: 'High-contrast typography, debossed copper foiling guidelines, digital design system, and multi-channel asset pack.',
    meta: '360° Brand Book',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
  },
];

const filterTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'Branding', value: 'branding' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section className="section-wrapper" id="portfolio">
      <div className="container">
        
        {/* Section Header with Tabs */}
        <div className="section-header-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">// 05 — Showcase</span>
            <h2 className="section-heading">Selected Works</h2>
          </motion.div>

          {/* Filter Tabs */}
          <div className="portfolio-filter-bar">
            {filterTabs.map((tab) => (
              <motion.button
                key={tab.value}
                className={`filter-tab-pill ${activeFilter === tab.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid with AnimatePresence */}
        <motion.div layout className="portfolio-items-grid" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="portfolio-card"
                whileHover={{ y: -6 }}
              >
                <div className="portfolio-thumb-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-thumb-img"
                    loading="lazy"
                  />
                  <div className="portfolio-badge-float">{item.badge}</div>
                </div>

                <div className="portfolio-card-info">
                  <div>
                    <span className="portfolio-card-category">{item.categoryLabel}</span>
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-desc">{item.desc}</p>
                  </div>
                  <div className="portfolio-card-meta">
                    <span>{item.meta}</span>
                    <span className="portfolio-card-arrow">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
