
import React from 'react';
import { PLANETS } from '../constants';

const SolarSystem: React.FC = () => {
  return (
    <section id="Hệ Mặt Trời" className="py-24 md:py-32 bg-[#02020a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center">
          <h3 className="text-accent-cyan text-sm font-bold uppercase tracking-[0.5em] mb-4">The Solar System</h3>
          <h2 className="text-3xl md:text-5xl font-bold">Hành Tinh Trong Hệ Mặt Trời</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANETS.map((planet) => (
            <div key={planet.id} className="glass-card group rounded-3xl p-8 hover:border-accent-cyan/40 transition-all duration-500 hover:-translate-y-2">
              <div className="relative size-48 mx-auto mb-10">
                <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity bg-${planet.color === 'accent-cyan' ? 'cyan-400' : 'orange-400'}`}></div>
                <img 
                  src={planet.image} 
                  alt={planet.name}
                  className="w-full h-full object-cover rounded-full relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h4 className="text-2xl font-bold mb-6 text-center">{planet.name}</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Đường kính:</span>
                  <span className={`font-mono text-${planet.color}`}>{planet.diameter}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Khoảng cách:</span>
                  <span className={`font-mono text-${planet.color}`}>{planet.distance}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Nhiệt độ:</span>
                  <span className={`font-mono text-${planet.color}`}>{planet.temp}</span>
                </div>
              </div>

              <button className={`w-full mt-10 py-3.5 border border-white/10 group-hover:border-${planet.color}/30 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all`}>
                Chi tiết hành tinh
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarSystem;
