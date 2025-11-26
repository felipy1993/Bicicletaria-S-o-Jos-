import React from 'react';
import { MessageCircle, Settings, Disc, Cog } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-brand-darker">
      
      {/* Background Tech Blueprint Effect */}
      <div className="absolute inset-0 z-0 bg-tech-grid opacity-60"></div>
      
      {/* Moving Gears Animation - Bottom Left (As requested) - Hidden on very small screens */}
      <div className="absolute -bottom-20 -left-20 md:bottom-[-50px] md:left-[-50px] z-0 opacity-10 sm:opacity-15 md:opacity-20 pointer-events-none select-none hidden xs:block">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
          {/* Main Big Gear */}
          <Settings 
            size={280} 
            strokeWidth={0.5} 
            className="absolute bottom-0 left-0 text-gray-400 animate-spin-slow origin-center sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px]" 
          />
          
          {/* Medium Gear Meshed Top */}
          <Settings 
            size={150} 
            strokeWidth={0.8} 
            className="absolute bottom-[200px] left-[180px] sm:bottom-[240px] sm:left-[220px] md:bottom-[280px] md:left-[240px] text-brand-blue animate-spin-medium-reverse origin-center sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]" 
          />
          
          {/* Small Gear Meshed Side */}
          <Cog 
            size={110} 
            strokeWidth={1} 
            className="absolute bottom-[30px] left-[240px] sm:bottom-[35px] sm:left-[280px] md:bottom-[40px] md:left-[320px] text-white animate-spin-medium-reverse origin-center sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px]" 
          />
        </div>
      </div>

      {/* Decorative Blueprint Element - Right Side */}
      <div className="absolute top-20 right-10 text-brand-surface opacity-10 rotate-12 pointer-events-none hidden lg:block">
        <Disc size={300} strokeWidth={0.5} />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full z-0 pointer-events-none">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-brand-blue/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-2 sm:mt-4">
        
        {/* Logo Container */}
        <div className="mb-4 sm:mb-6 relative group">
           <Logo variant="hero" />
        </div>

        {/* Headlines: Performance Máxima */}
        <div className="flex flex-col items-center mb-6 sm:mb-10 text-center relative z-10">
          <h1 className="flex flex-col items-center select-none">
            <span className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-[0.85] drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
              PERFORMANCE
            </span>
            <span className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-blue uppercase tracking-tighter leading-[0.85] drop-shadow-[0_0_25px_rgba(0,148,216,0.3)] z-10 -mt-1 sm:-mt-2 md:-mt-4 relative transform hover:scale-105 transition-transform duration-500 delay-75">
              MÁXIMA
            </span>
          </h1>
          
          <div className="mt-6 sm:mt-8 space-y-1 px-4">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
              Manutenção, reparos e peças de alta qualidade.
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
              Sua bicicleta em boas mãos.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-lg justify-center mt-2 mb-4 px-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-brand-blue text-white font-heading font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider overflow-hidden skew-x-[-10deg] hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-[0_0_30px_rgba(0,148,216,0.6)] hover:shadow-[0_0_50px_rgba(0,148,216,0.8)]"
          >
            <div className="skew-x-[10deg] flex items-center justify-center gap-2 sm:gap-3">
              <MessageCircle size={24} className="sm:w-7 sm:h-7 animate-bounce" />
              <span>Agendar Agora</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;