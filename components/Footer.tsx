import React from 'react';
import LogoPlaceholder from './LogoPlaceholder';

interface FooterProps {
  logoUrl: string | null;
  onLogoUpload: (url: string) => void;
}

const Footer: React.FC<FooterProps> = ({ logoUrl, onLogoUpload }) => {
  return (
    <footer className="bg-black text-white py-10 sm:py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <LogoPlaceholder url={logoUrl} onUpload={onLogoUpload} variant="footer" />
            <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm max-w-xs text-center md:text-left">
              Oficina especializada em manutenção de bicicletas. Qualidade e confiança em Guapiaçu.
            </p>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="font-bold text-base sm:text-lg text-white uppercase tracking-wider">Bicicletaria São José</p>
            <p className="text-gray-400 text-sm sm:text-base">R. das Orquídeas, 170 — Guapiaçu/SP</p>
            <p className="text-xs text-gray-600 mt-4 sm:mt-6 font-mono">
              Desenvolvido com IA
            </p>
          </div>
          
        </div>
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Bicicletaria São José. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;