
import React from 'react';
import { TECH_ITEMS } from '../constants';

const SpaceTech: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Space Technology</h3>
            <h2 className="text-3xl md:text-4xl font-bold">Kỷ Nguyên Đột Phá Công Nghệ</h2>
          </div>
          <div className="flex gap-3">
            <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_ITEMS.map((item) => (
            <div key={item.id} className="glass-card rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-64 bg-slate-900/50 relative overflow-hidden flex items-center justify-center">
                <span className={`material-symbols-outlined text-8xl opacity-10 group-hover:opacity-20 transition-opacity text-${item.color}`}>
                  {item.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <span className={`text-${item.color} text-[10px] font-bold uppercase tracking-widest`}>{item.category}</span>
                <h4 className="text-2xl font-bold mt-2 mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
                <a href={item.link} className={`text-sm font-bold text-${item.color} flex items-center gap-2 hover:gap-4 transition-all`}>
                  Tìm hiểu nhiệm vụ <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceTech;
