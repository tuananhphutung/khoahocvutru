
import React from 'react';

const LiveStatus: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-bg-dark/80 backdrop-blur-xl border-t border-white/10 flex items-center overflow-hidden z-[100] px-6">
      <div className="flex items-center gap-2 text-[10px] font-black text-primary whitespace-nowrap pr-8 border-r border-white/10 shrink-0">
        <span className="material-symbols-outlined text-[14px]">language</span> 
        DỮ LIỆU TRỰC TUYẾN
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="flex items-center gap-20 whitespace-nowrap animate-marquee">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Gió mặt trời: <span className="text-white">412.3 km/s</span></span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Trạm ISS: <span className="text-white">418km (Thái Bình Dương)</span></span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Mật độ Photon: <span className="text-accent-orange">9.82e22</span></span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Trạng thái: <span className="text-green-500">Ổn định</span></span>
          {/* Duplicate for seamless scrolling */}
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Gió mặt trời: <span className="text-white">412.3 km/s</span></span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Trạm ISS: <span className="text-white">418km (Thái Bình Dương)</span></span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LiveStatus;
