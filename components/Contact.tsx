import React, { useState } from 'react';
import { MessageCircle, Phone, Copy, Check, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, ADDRESS_DISPLAY } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS_DISPLAY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-brand-surface to-brand-darker rounded border border-gray-700 p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden group">
          
          {/* Animated Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-brand-blue/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-blue/20 transition duration-700"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tighter">
              Pronto para rodar?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Entre em contato agora mesmo. Atendimento rápido via WhatsApp ou telefone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg mb-10 sm:mb-12">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 sm:px-6 py-4 sm:py-5 bg-brand-blue hover:bg-blue-500 text-white font-heading font-bold text-lg sm:text-xl uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-brand-blue/30"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                WhatsApp
              </a>
              
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center justify-center px-5 sm:px-6 py-4 sm:py-5 bg-transparent border-2 border-gray-600 hover:border-white text-white font-heading font-bold text-lg sm:text-xl uppercase tracking-wider rounded transition-all hover:bg-white/5"
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Ligar
              </a>
            </div>

            <div className="w-full pt-8 sm:pt-10 border-t border-gray-700/50 flex flex-col items-center">
              <div className="bg-black/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700 flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                 <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-brand-blue" />
                 <span className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide">
                  {WHATSAPP_DISPLAY}
                </span>
              </div>

              <button
                onClick={copyAddress}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-brand-blue transition-colors uppercase tracking-widest font-bold mt-3 sm:mt-4"
              >
                <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                {ADDRESS_DISPLAY}
                {copied ? <Check size={12} className="sm:w-[14px] sm:h-[14px] text-green-500 ml-1" /> : <Copy size={12} className="sm:w-[14px] sm:h-[14px] ml-1" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;