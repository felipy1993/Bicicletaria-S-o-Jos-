import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  // Central state for the logo image
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const handleLogoUpload = (url: string) => {
    setLogoUrl(url);
  };

  return (
    <div className="min-h-screen bg-brand-dark font-sans text-gray-100 selection:bg-brand-blue selection:text-white">
      <Header logoUrl={logoUrl} onLogoUpload={handleLogoUpload} />
      
      <main>
        <Hero logoUrl={logoUrl} onLogoUpload={handleLogoUpload} />
        <Services />
        <Location />
        <Hours />
        <Contact />
      </main>

      <Footer logoUrl={logoUrl} onLogoUpload={handleLogoUpload} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;