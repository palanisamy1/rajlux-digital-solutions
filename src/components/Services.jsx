import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, BarChart3, Palette, Cloud, ShoppingBag, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'web',
    index: '01',
    icon: Globe,
    title: 'Web Development',
    desc: 'High-performance web apps built with modern frameworks. Blazing speeds, semantic code, and seamless responsiveness across devices.',
    tags: ['Responsive UI', 'SEO & Core Web Vitals', 'Headless CMS'],
    featured: false,
  },
  {
    id: 'mobile',
    index: '02',
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform iOS & Android mobile applications engineered for high retention, lightning responsiveness, and intuitive touch UX.',
    tags: ['iOS & Android', 'React Native / Flutter', 'Store Optimization'],
    featured: true,
  },
  {
    id: 'marketing',
    index: '03',
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Systematic client acquisition programs utilizing technical SEO, precision PPC campaigns, and conversion rate optimization (CRO).',
    tags: ['Search Engine Optimization', 'Paid Media', 'Attribution Models'],
    featured: false,
  },
  {
    id: 'branding',
    index: '04',
    icon: Palette,
    title: 'Branding & Identity',
    desc: 'Distinctive visual design systems, brand guidelines, typography standards, and asset libraries that establish industry authority.',
    tags: ['Visual Identity', 'Design Tokens', 'Brand Books'],
    featured: false,
  },
  {
    id: 'cloud',
    index: '05',
    icon: Cloud,
    title: 'Cloud & IT Solutions',
    desc: 'Resilient cloud infrastructure setup, automated CI/CD pipelines, container orchestration, and continuous uptime monitoring.',
    tags: ['Cloud Migration', 'DevOps Automation', 'Security Audits'],
    featured: false,
  },
  {
    id: 'ecommerce',
    index: '06',
    icon: ShoppingBag,
    title: 'E-Commerce Solutions',
    desc: 'Frictionless online storefronts with customized checkout flows, automated ERP/inventory integrations, and sub-second catalog navigation.',
    tags: ['Custom Checkouts', 'Shopify / Headless', 'Global Payment Gateways'],
    featured: false,
  },
];

export default function Services({ onSelectService }) {
  return (
    <section className="section-wrapper bg-alt" id="services">
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          className="section-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-eyebrow">// 02 — Capabilities</span>
            <h2 className="section-heading">End-to-End Digital Services</h2>
          </div>
          <p className="section-subtext">
            Clean architectures designed to solve complex user flows, improve conversions, and guarantee enterprise stability.
          </p>
        </motion.div>

        {/* 6 Cards Grid with Staggered Motion */}
        <motion.div
          className="services-card-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`service-card-item ${service.featured ? 'featured' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                {service.featured && (
                  <div className="service-badge-pill">Most In Demand</div>
                )}

                <div>
                  <div className="service-top-row">
                    <motion.div 
                      className="service-icon-box"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent size={20} strokeWidth={2} />
                    </motion.div>
                    <span className="service-index">{service.index}</span>
                  </div>

                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-desc">{service.desc}</p>

                  <div className="service-tags-list">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="service-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="service-bottom-cta">
                  <a
                    href="#contact"
                    className="service-cta-link"
                    onClick={() => onSelectService && onSelectService(service.id)}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
