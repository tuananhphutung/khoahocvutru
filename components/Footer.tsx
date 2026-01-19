
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">flare</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Vikiway</h1>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-10">
              Nền tảng tri thức vũ trụ hàng đầu Việt Nam, cung cấp cái nhìn sâu sắc và khoa học về vạn vật trong không gian bao la.
            </p>
            <div className="flex gap-4">
              {['public', 'movie', 'alternate_email'].map(icon => (
                <a key={icon} href="#" className="size-11 rounded-full border border-white/10 flex items-center justify-center hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Khám Phá</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Hệ Mặt Trời', 'Các Vì Sao', 'Hố Đen', 'Thiên Hà'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Nguồn Tin</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Tin Tức Mới', 'Thư Viện Ảnh', 'Podcasts', 'Tài Liệu NASA'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white uppercase text-[10px] tracking-[0.3em]">Hỗ Trợ</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {['Liên Hệ', 'Điều Khoản', 'Bảo Mật', 'Quyên Góp'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-t border-white/5 gap-8">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.4em] font-black">
            © 2024 VIKIWAY SPACE AGENCY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-10">
            <span className="text-[10px] text-slate-600 font-black tracking-widest flex items-center gap-2">
              <span className="size-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span> 
              SERVER: OPTIMAL
            </span>
            <span className="text-[10px] text-slate-600 font-black tracking-widest uppercase">LATENCY: 14MS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
