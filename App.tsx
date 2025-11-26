import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-gray-100 selection:bg-brand-blue selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Location />
        <Hours />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;