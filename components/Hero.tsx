
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Black Hole Background Graphics */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Core */}
        <div className="relative z-10 size-[200px] md:size-[300px] bg-black rounded-full black-hole-glow flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
        </div>
        
        {/* Accretion Disk (Visual Approximation) */}
        <div className="absolute w-[800px] md:w-[1200px] h-[300px] md:h-[400px] border-[12px] md:border-[20px] border-accent-orange/80 rounded-[100%] blur-[4px] rotate-[-5deg] opacity-70"></div>
        <div className="absolute w-[700px] md:w-[1000px] h-[20px] bg-white/20 blur-[20px] z-20"></div>
        
        {/* Background glow */}
        <div className="absolute size-[600px] bg-accent-orange/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-40 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          HỐ ĐEN KỲ VĨ
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Hành trình chinh phục Gargantua - nơi ánh sáng bị bẻ cong và thời gian ngưng đọng. 
          Khám phá những bí ẩn chưa có lời giải.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="px-10 py-5 bg-accent-orange text-white font-bold rounded-xl hover:scale-105 transition-all shadow-2xl shadow-accent-orange/30 flex items-center gap-3 uppercase tracking-widest text-sm">
            <span>Khám phá ngay</span>
            <span className="material-symbols-outlined animate-pulse">rocket_launch</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Cuộn để khám phá</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent-orange to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
