import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      title="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-brand-blue opacity-70 animate-ping"></span>
      <div className="relative bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center border-2 border-white/20">
        <MessageCircle size={32} fill="white" className="text-transparent" />
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-darker font-bold text-sm px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Orçamento Rápido
      </div>
    </a>
  );
};

export default FloatingWhatsApp;