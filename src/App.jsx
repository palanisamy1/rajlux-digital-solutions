import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyUs />
        <Methodology />
        <Portfolio />
        <CtaBanner />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
