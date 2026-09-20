import React from 'react';
import { motion } from 'framer-motion';

/**
 * Phenomenon Studio Signature Word-by-Word Scroll Reveal
 * Masks and staggers each word as the element scrolls into view.
 */
export function WordReveal({
  text,
  className = '',
  as: Component = 'div',
  delay = 0,
  stagger = 0.05,
  duration = 0.7,
  once = true,
  children,
}) {
  const content = text || children;
  
  if (typeof content !== 'string') {
    return <Component className={className}>{children}</Component>;
  }

  const words = content.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
      rotateX: 18,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        style={{ display: 'inline-block', perspective: 1000 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              marginRight: '0.26em',
              paddingBottom: '0.08em',
            }}
          >
            <motion.span
              style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

export default WordReveal;
