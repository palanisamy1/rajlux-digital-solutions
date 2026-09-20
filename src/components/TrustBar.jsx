import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Clock, Lock, TrendingUp } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, label: 'Lifetime Support' },
  { icon: Gem, label: 'Swiss Craft Quality' },
  { icon: Clock, label: 'Guaranteed On-Time' },
  { icon: Lock, label: 'Enterprise Security' },
  { icon: TrendingUp, label: 'Measurable Business ROI' },
];

export default function TrustBar() {
  return (
    <section className="trust-strip" aria-label="Agency Guarantees">
      <div className="container">
        <motion.div
          className="trust-flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="trust-item"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon size={18} strokeWidth={2} />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
