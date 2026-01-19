
import React from 'react';

const Multimedia: React.FC = () => {
  const categories = ['TẤT CẢ', 'ẢNH NASA', 'VIDEO 4K', 'PODCASTS'];

  return (
    <section id="Thư Viện" className="py-24 md:py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h3 className="text-accent-cyan text-sm font-bold uppercase tracking-[0.3em] mb-4">Multimedia Library</h3>
            <h2 className="text-3xl md:text-4xl font-bold">Thư Viện Ảnh & Video 4K</h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {categories.map((cat, idx) => (
              <button 
                key={cat} 
                className={`px-6 py-2 rounded-full text-[10px] font-bold transition-all ${idx === 1 ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-[2rem]">
            <img 
              alt="Supernova" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-white">play_circle</span>
            </div>
            <div className="absolute bottom-8 left-8">
              <span className="px-3 py-1 bg-accent-orange text-[10px] font-bold rounded-full mb-3 inline-block">VIDEO 4K</span>
              <h5 className="text-2xl font-bold text-white leading-tight">Vụ nổ Siêu Tân Tinh <br/>(Cận cảnh 4K)</h5>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] aspect-square lg:aspect-auto h-auto lg:h-[280px]">
            <img 
              alt="Nebula" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold text-white/90 tracking-wide">Tinh vân Đại Bàng</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] aspect-square lg:aspect-auto h-auto lg:h-[280px]">
            <img 
              alt="Black hole" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=400" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold text-white/90 tracking-wide">Hố Đen M87*</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] aspect-square lg:aspect-auto h-auto lg:h-[280px]">
            <img 
              alt="Earth Aurora" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1529933037705-0d537317ae7b?auto=format&fit=crop&q=80&w=400" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold text-white/90 tracking-wide">Cực Quang Trái Đất</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-[1.5rem] aspect-square lg:aspect-auto h-auto lg:h-[280px]">
            <img 
              alt="Moon" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1522030239044-12f014385a58?auto=format&fit=crop&q=80&w=400" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-5 left-5">
              <p className="text-xs font-bold text-white/90 tracking-wide">Mặt Trăng Titan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multimedia;
