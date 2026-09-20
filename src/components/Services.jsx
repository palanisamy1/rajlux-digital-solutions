import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, BarChart3, Palette, Cloud, ShoppingBag, ArrowRight } from 'lucide-react';
import { ease, fadeUp, staggerContainer, staggerChild, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

const servicesData = [
  { id: 'web', index: '01', icon: Globe, title: 'Web Development', desc: 'High-performance web apps built with modern frameworks. Blazing speeds, semantic code, and seamless responsiveness across devices.', tags: ['Responsive UI', 'SEO & Core Web Vitals', 'Headless CMS'], featured: false },
  { id: 'mobile', index: '02', icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform iOS & Android mobile applications engineered for high retention, lightning responsiveness, and intuitive touch UX.', tags: ['iOS & Android', 'React Native / Flutter', 'Store Optimization'], featured: true },
  { id: 'marketing', index: '03', icon: BarChart3, title: 'Digital Marketing', desc: 'Systematic client acquisition programs utilizing technical SEO, precision PPC campaigns, and conversion rate optimization (CRO).', tags: ['Search Engine Optimization', 'Paid Media', 'Attribution Models'], featured: false },
  { id: 'branding', index: '04', icon: Palette, title: 'Branding & Identity', desc: 'Distinctive visual design systems, brand guidelines, typography standards, and asset libraries that establish industry authority.', tags: ['Visual Identity', 'Design Tokens', 'Brand Books'], featured: false },
  { id: 'cloud', index: '05', icon: Cloud, title: 'Cloud & IT Solutions', desc: 'Resilient cloud infrastructure setup, automated CI/CD pipelines, container orchestration, and continuous uptime monitoring.', tags: ['Cloud Migration', 'DevOps Automation', 'Security Audits'], featured: false },
  { id: 'ecommerce', index: '06', icon: ShoppingBag, title: 'E-Commerce Solutions', desc: 'Frictionless online storefronts with customized checkout flows, automated ERP/inventory integrations, and sub-second catalog navigation.', tags: ['Custom Checkouts', 'Shopify / Headless', 'Global Payment Gateways'], featured: false },
];

export default function Services({ onSelectService }) {
  return (
    <section className="section-wrapper bg-alt" id="services">
      <div className="container">

        {/* Section Header */}
        <div className="section-header-row" style={{ alignItems: 'flex-start' }}>
          <div>
            <motion.span
              className="section-eyebrow"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              // 02 — Capabilities
            </motion.span>
            <WordReveal
              as="h2"
              className="section-heading"
              text="End-to-End Digital Services"
            />
          </div>
          <p className="section-subtext">
            Clean architectures designed to solve complex user flows, improve conversions, and guarantee enterprise stability.
          </p>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          className="services-card-grid"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`service-card-item ${service.featured ? 'featured' : ''}`}
                variants={staggerChild}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 48px rgba(15,23,42,0.10)',
                  transition: { duration: 0.25, ease },
                }}
              >
                {service.featured && (
                  <motion.div
                    className="service-badge-pill"
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewport}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.2 }}
                  >
                    Most In Demand
                  </motion.div>
                )}

                <div>
                  <div className="service-top-row">
                    <motion.div
                      className="service-icon-box"
                      whileHover={{ scale: 1.15, rotate: 8, backgroundColor: 'var(--accent-navy)', color: '#fff' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    >
                      <IconComponent size={20} strokeWidth={2} />
                    </motion.div>
                    <motion.span
                      className="service-index"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      {service.index}
                    </motion.span>
                  </div>

                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-desc">{service.desc}</p>

                  <motion.div
                    className="service-tags-list"
                    variants={staggerContainer(0.06)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    {service.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="service-tag"
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease } },
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <div className="service-bottom-cta">
                  <motion.a
                    href="#contact"
                    className="service-cta-link"
                    onClick={() => onSelectService && onSelectService(service.id)}
                    whileHover={{ x: 4 }}
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
