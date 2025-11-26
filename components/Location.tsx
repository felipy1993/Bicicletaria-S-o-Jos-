import React from 'react';
import { MapPin, Navigation, Map as MapIcon } from 'lucide-react';
import { ADDRESS_DISPLAY, PLUS_CODE, GOOGLE_MAPS_EMBED_URL } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="endereco" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 border-l-4 border-brand-blue pl-6">
          <h2 className="font-heading text-4xl font-bold text-white uppercase tracking-tighter">
            Localização
          </h2>
          <p className="text-gray-400 mt-2">Fácil acesso em Guapiaçu.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="bg-brand-darker p-8 border border-gray-700 rounded lg:col-span-1 flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-brand-blue/10 p-3 rounded text-brand-blue border border-brand-blue/20">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-heading font-bold uppercase tracking-wide text-lg">Endereço</h3>
                <p className="text-gray-400 mt-1 leading-relaxed">{ADDRESS_DISPLAY}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-blue/10 p-3 rounded text-brand-blue border border-brand-blue/20">
                <Navigation size={24} />
              </div>
              <div>
                <h3 className="text-white font-heading font-bold uppercase tracking-wide text-lg">Google Plus Code</h3>
                <p className="text-gray-400 mt-1 font-mono text-sm bg-black/30 px-2 py-1 rounded inline-block border border-gray-700">
                  {PLUS_CODE}
                </p>
              </div>
            </div>
          </div>

          {/* Map Frame */}
          <div className="lg:col-span-2 bg-gray-700 rounded overflow-hidden shadow-2xl border-4 border-gray-800 relative h-96 lg:h-auto group">
            <div className="absolute top-4 right-4 z-10 bg-brand-darker/80 backdrop-blur text-xs text-white px-3 py-1 rounded font-mono border border-gray-600 flex items-center gap-2">
               <MapIcon size={12} className="text-green-400 animate-pulse" /> SATÉLITE ONLINE
            </div>
            <iframe
              title="Localização Bicicletaria São José"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.2)' }}
              src={GOOGLE_MAPS_EMBED_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;