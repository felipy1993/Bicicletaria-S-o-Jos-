import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { HOURS } from '../constants';

const Hours: React.FC = () => {
  return (
    <section id="horario" className="py-24 bg-brand-darker relative border-y border-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Title Column */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-brand-blue mb-4">
              <Calendar size={24} />
              <span className="font-heading font-bold tracking-widest uppercase text-sm">Disponibilidade</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none mb-6">
              Horário de <br/>
              <span className="text-gray-700">Atendimento</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-sm border-l-2 border-brand-blue pl-4">
              Traga sua bike para um orçamento sem compromisso dentro do nosso horário comercial.
            </p>
          </div>

          {/* Schedule Table */}
          <div className="lg:col-span-3">
            <div className="bg-brand-surface rounded border border-gray-700 overflow-hidden shadow-2xl">
              <div className="bg-brand-blue/10 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
                <span className="font-heading font-bold text-white uppercase tracking-wider">Dia da Semana</span>
                <Clock size={20} className="text-brand-blue" />
              </div>
              
              <div className="divide-y divide-gray-700/50">
                {HOURS.map((item) => (
                  <div 
                    key={item.day}
                    className="flex justify-between items-center px-6 py-4 hover:bg-white/5 transition-colors group"
                  >
                    <span className="font-bold text-gray-400 group-hover:text-white uppercase tracking-wide text-sm sm:text-base">
                      {item.day}
                    </span>
                    <div className="flex items-center gap-2">
                       <span className={`h-2 w-2 rounded-full ${item.isOpen ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`}></span>
                       <span className={`font-mono font-bold tracking-tight ${item.isOpen ? 'text-white' : 'text-gray-600'}`}>
                        {item.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hours;