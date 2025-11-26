import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';

interface HeaderProps {
  logoUrl: string | null;
  onLogoUpload: (url: string) => void;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, onLogoUpload }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "ENDEREÇO", href: "#endereco" },
    { label: "HORÁRIO", href: "#horario" },
    { label: "CONTATO", href: "#contato" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-brand-darker/95 backdrop-blur-md border-gray-800 py-2 shadow-lg' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <LogoPlaceholder url={logoUrl} onUpload={onLogoUpload} variant="header" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-heading font-bold uppercase tracking-widest hover:bg-white/10 rounded transition-all duration-200 border border-transparent hover:border-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none border border-transparent hover:border-gray-700 transition-all"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-darker border-b border-gray-800 absolute w-full left-0 top-full">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-gray-400 hover:text-brand-blue hover:bg-white/5 block px-4 py-3 rounded text-lg font-heading font-bold uppercase tracking-wider border-l-2 border-transparent hover:border-brand-blue transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;