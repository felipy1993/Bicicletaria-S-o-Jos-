import React, { useRef } from 'react';
import { Bike, Upload } from 'lucide-react';

interface LogoPlaceholderProps {
  url: string | null;
  onUpload: (url: string) => void;
  variant: 'header' | 'hero' | 'footer';
}

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ url, onUpload, variant }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      onUpload(objectUrl);
    }
  };

  const handleClick = () => {
    if (variant === 'hero' || !url) {
      fileInputRef.current?.click();
    }
  };

  // Size classes based on variant
  const containerClasses = {
    header: "h-12 w-auto flex items-center gap-3 cursor-pointer",
    hero: "h-48 w-48 md:h-64 md:w-64 mb-8 flex flex-col items-center justify-center bg-brand-surface rounded-full border-4 border-brand-blue shadow-2xl cursor-pointer hover:bg-gray-800 transition group relative z-10",
    footer: "h-12 w-auto flex items-center gap-3"
  };

  const textClasses = {
    header: "font-black text-xl text-white uppercase tracking-tighter leading-none hover:text-brand-blue transition-colors",
    hero: "hidden", 
    footer: "font-black text-lg text-white uppercase tracking-tight"
  };

  const iconSize = variant === 'hero' ? 80 : 28;

  const content = (
    <>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />
      
      {variant === 'hero' ? (
        url ? (
          <img 
            src={url} 
            alt="Bicicletaria São José Logo" 
            className="h-full w-full object-contain rounded-full bg-white border-4 border-brand-blue p-1 shadow-[0_0_30px_rgba(0,148,216,0.3)]"
          />
        ) : (
          <>
            <Bike size={iconSize} className="text-brand-blue mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Upload size={12} /> Carregar Logo
            </span>
          </>
        )
      ) : (
         <>
          <div className={`p-1.5 rounded-md ${variant === 'footer' ? 'bg-gray-900' : 'bg-brand-surface'}`}>
            {url ? (
               <img src={url} alt="Logo" className="h-10 w-10 object-contain rounded bg-white" />
            ) : (
               <Bike size={iconSize} className="text-brand-blue" />
            )}
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
        {/* Animated Gear Effect Background - Reduced opacity for clarity */}
        <div className="absolute inset-0 w-[120%] h-[120%] -translate-x-[8%] -translate-y-[8%] border-2 border-dashed border-gray-700 rounded-full animate-spin-slow pointer-events-none opacity-20"></div>
        <div className="absolute inset-0 w-[110%] h-[110%] -translate-x-[4%] -translate-y-[4%] border border-brand-blue/20 rounded-full pointer-events-none"></div>
        
        {/* Main Logo Container */}
        <div onClick={handleClick} className={containerClasses[variant]} title="Clique para enviar a logo">
          {content}
          
           {url && (
           <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition text-white font-bold text-sm uppercase tracking-wide">
             Alterar Logo
           </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div onClick={handleClick} className={containerClasses[variant]} title="Clique para enviar a logo">
      {content}
    </div>
  );
};

export default LogoPlaceholder;