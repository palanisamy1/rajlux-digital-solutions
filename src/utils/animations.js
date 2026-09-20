// ─── Shared Framer Motion Variants ──────────────────────────────────────────

export const ease = [0.16, 1, 0.3, 1]; // spring-like easeOutExpo

// Fade up — default section entrance
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

// Fade in from left
export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

// Fade in from right
export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

// Scale + fade — for cards / banners
export const scaleFade = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.65, ease } },
};

// Staggered container — wraps stagger children
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// Staggered child — used inside staggerContainer
export const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// Slide up with clipping
export const slideUp = {
  hidden: { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.8, ease },
  },
};

// Standard viewport config
export const viewport = { once: true, margin: '-60px' };
export const viewportEager = { once: true, margin: '0px' };
