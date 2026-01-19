
import React, { useState } from 'react';

const SkyAtlas: React.FC = () => {
  const [coords, setCoords] = useState({ lat: 21.0285, lng: 105.8542 }); // Default Hanoi

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#000005]">
      <div className="absolute inset-0 star-field opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h3 className="text-accent-orange text-sm font-bold uppercase tracking-[0.3em] mb-4">Sky Atlas</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Bản Đồ Sao <br/>Thời Gian Thực</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Khám phá 88 chòm sao trên bầu trời đêm. Sử dụng dữ liệu từ các đài quan sát hàng đầu thế giới 
              để mô phỏng chính xác vị trí các thiên thể từ tọa độ của bạn.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="size-14 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex-shrink-0 flex items-center justify-center text-accent-orange">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Định vị thông minh</h4>
                  <p className="text-sm text-slate-500">Tự động điều chỉnh góc nhìn theo tọa độ GPS thời gian thực.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="size-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex-shrink-0 flex items-center justify-center text-accent-cyan">
                  <span className="material-symbols-outlined">auto_graph</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phân tích chòm sao</h4>
                  <p className="text-sm text-slate-500">Click để xem truyền thuyết và dữ liệu thiên văn chuyên sâu.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 w-full sm:w-auto px-10 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-xs">
              Mở bản đồ toàn màn hình
            </button>
          </div>

          <div className="aspect-square glass-card rounded-full relative overflow-hidden border-white/5 group shadow-2xl shadow-accent-cyan/5">
            <div className="absolute inset-0 bg-primary/5"></div>
            
            {/* Simulation of stars */}
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute size-1 bg-white rounded-full opacity-40 group-hover:opacity-100 transition-all duration-700"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `pulse ${2 + Math.random() * 3}s infinite`,
                }}
              ></div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-[85%] border border-white/5 rounded-full animate-pulse"></div>
              <div className="absolute size-[65%] border border-white/5 rounded-full"></div>
              <div className="absolute size-[45%] border border-white/5 rounded-full opacity-50"></div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold block mb-3">Chế độ quan sát</span>
              <div className="px-6 py-2 bg-accent-cyan text-black text-[11px] font-black rounded-full shadow-lg shadow-accent-cyan/20">
                LIVE: HÀ NỘI, VN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyAtlas;
