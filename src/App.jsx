import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import Certification from './components/Certification';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Page-level entrance animation
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const lenisRef = useRef(null);

  // Initialize Phenomenon Studio-grade Lenis Inertial Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept in-page hash links for smooth Lenis scrolling
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (hash && hash !== '#') {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -70, duration: 1.3 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (window.__lenis) {
        window.__lenis.scrollTo(contactSection, { offset: -60, duration: 1.3 });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="app-root"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <About />
          <Services onSelectService={handleSelectService} />
          <WhyUs />
          <Methodology />
          <Portfolio />
          <Certification />
          <CtaBanner />
          <Contact selectedService={selectedService} />
        </main>
        <Footer />
        <FloatingActions />
      </motion.div>
    </AnimatePresence>
  );
}
