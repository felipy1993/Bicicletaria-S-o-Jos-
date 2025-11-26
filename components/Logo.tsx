import React from 'react';

interface LogoProps {
  variant: 'header' | 'hero' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ variant }) => {
  const logoUrl = '/logo.png';

  // Size classes based on variant
  const containerClasses = {
    header: "h-12 w-auto flex items-center gap-3",
    hero: "h-48 w-48 md:h-64 md:w-64 mb-8 flex flex-col items-center justify-center bg-white rounded-full border-4 border-brand-blue shadow-2xl transition-transform hover:scale-105 relative z-10",
    footer: "h-12 w-auto flex items-center gap-3"
  };

  const textClasses = {
    header: "font-black text-xl text-white uppercase tracking-tighter leading-none hover:text-brand-blue transition-colors",
    hero: "hidden", 
    footer: "font-black text-lg text-white uppercase tracking-tight"
  };

  const content = (
    <>
      {variant === 'hero' ? (
        <img 
          src={logoUrl} 
          alt="Bicicletaria São José Logo" 
          className="h-full w-full object-contain rounded-full p-4 shadow-[0_0_30px_rgba(0,148,216,0.3)]"
        />
      ) : (
         <>
          <div className={`p-1.5 rounded-md ${variant === 'footer' ? 'bg-gray-900' : 'bg-brand-surface'}`}>
            <img src={logoUrl} alt="Logo" className="h-10 w-10 object-contain rounded bg-white p-1" />
          </div>
          <div className={textClasses[variant]}>
            Bicicletaria <span className="text-brand-blue block text-sm md:text-base md:inline">São José</span>
          </div>
        </>
      )}
    </>
  );

  if (variant === 'hero') {
    return (
      <div className="relative flex items-center justify-center">
        {/* Animated Gear Effect Background */}
        <div className="absolute inset-0 w-[120%] h-[120%] -translate-x-[8%] -translate-y-[8%] border-2 border-dashed border-gray-700 rounded-full animate-spin-slow pointer-events-none opacity-20"></div>
        <div className="absolute inset-0 w-[110%] h-[110%] -translate-x-[4%] -translate-y-[4%] border border-brand-blue/20 rounded-full pointer-events-none"></div>
        
        {/* Main Logo Container */}
        <div className={containerClasses[variant]}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses[variant]}>
      {content}
    </div>
  );
};

export default Logo;
