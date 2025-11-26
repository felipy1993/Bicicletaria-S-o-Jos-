import React from 'react';
import { MessageCircle, Settings, Disc, Cog } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { WHATSAPP_NUMBER } from '../constants';

interface HeroProps {
  logoUrl: string | null;
  onLogoUpload: (url: string) => void;
}

const Hero: React.FC<HeroProps> = ({ logoUrl, onLogoUpload }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-brand-darker">
      
      {/* Background Tech Blueprint Effect */}
      <div className="absolute inset-0 z-0 bg-tech-grid opacity-60"></div>
      
      {/* Moving Gears Animation - Bottom Left (As requested) */}
      <div className="absolute -bottom-20 -left-20 md:bottom-[-50px] md:left-[-50px] z-0 opacity-15 md:opacity-20 pointer-events-none select-none">
        <div className="relative w-[500px] h-[500px]">
          {/* Main Big Gear */}
          <Settings 
            size={380} 
            strokeWidth={0.5} 
            className="absolute bottom-0 left-0 text-gray-400 animate-spin-slow origin-center" 
          />
          
          {/* Medium Gear Meshed Top */}
          <Settings 
            size={200} 
            strokeWidth={0.8} 
            className="absolute bottom-[280px] left-[240px] text-brand-blue animate-spin-medium-reverse origin-center" 
          />
          
          {/* Small Gear Meshed Side */}
          <Cog 
            size={150} 
            strokeWidth={1} 
            className="absolute bottom-[40px] left-[320px] text-white animate-spin-medium-reverse origin-center" 
          />
        </div>
      </div>

      {/* Decorative Blueprint Element - Right Side */}
      <div className="absolute top-20 right-10 text-brand-surface opacity-10 rotate-12 pointer-events-none hidden md:block">
        <Disc size={300} strokeWidth={0.5} />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full z-0 pointer-events-none">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-4">
        
        {/* Logo Container */}
        <div className="mb-6 relative group">
           <LogoPlaceholder url={logoUrl} onUpload={onLogoUpload} variant="hero" />
        </div>

        {/* Headlines: Performance Máxima */}
        <div className="flex flex-col items-center mb-10 text-center relative z-10">
          <h1 className="flex flex-col items-center select-none">
            <span className="font-heading font-black text-6xl sm:text-7xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
              PERFORMANCE
            </span>
            <span className="font-heading font-black text-6xl sm:text-7xl md:text-9xl text-brand-blue uppercase tracking-tighter leading-[0.85] drop-shadow-[0_0_25px_rgba(0,148,216,0.3)] z-10 -mt-2 md:-mt-4 relative transform hover:scale-105 transition-transform duration-500 delay-75">
              MÁXIMA
            </span>
          </h1>
          
          <div className="mt-8 space-y-1">
            <p className="text-gray-300 text-lg md:text-2xl font-medium tracking-wide">
              Manutenção, reparos e peças de alta qualidade.
            </p>
            <p className="text-white text-lg md:text-2xl font-bold tracking-wide">
              Sua bicicleta em boas mãos.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2 mb-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-brand-blue text-white font-heading font-bold text-2xl uppercase tracking-wider overflow-hidden skew-x-[-10deg] hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-[0_0_30px_rgba(0,148,216,0.6)] hover:shadow-[0_0_50px_rgba(0,148,216,0.8)]"
          >
            <div className="skew-x-[10deg] flex items-center justify-center gap-3">
              <MessageCircle size={28} className="animate-bounce" />
              <span>Agendar Agora</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;