import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 border-b border-gray-800 pb-6 sm:pb-8 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tighter">
              Nossos <span className="text-brand-blue">Serviços</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
              Utilizamos ferramentas de precisão e técnicas modernas para garantir a durabilidade da sua bike.
            </p>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-5xl sm:text-6xl font-heading font-bold text-gray-800 opacity-50">01</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-brand-surface/50 backdrop-blur-sm p-6 sm:p-8 border border-white/5 hover:border-brand-blue/50 rounded transition-all duration-300 hover:-translate-y-2 hover-glow overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -mr-8 -mt-8 rounded-full transition-all group-hover:from-brand-blue/20"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-darker rounded flex items-center justify-center border border-gray-700 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white text-brand-blue transition-colors duration-300 mb-4 sm:mb-6">
                  <service.icon size={24} strokeWidth={2} className="sm:w-7 sm:h-7" />
                </div>
                
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-2 sm:mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-700/50 pt-3 sm:pt-4 group-hover:border-gray-600 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;