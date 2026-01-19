
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center border-white/5">
          {/* Accent Blobs */}
          <div className="absolute top-0 right-0 size-80 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 size-80 bg-accent-orange/10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Nhận Tin Chuyên Sâu</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Cập nhật những phát hiện mới nhất, sự kiện thiên văn và kiến thức vũ trụ hàng tuần trực tiếp vào hộp thư của bạn.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Địa chỉ email của bạn" 
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-primary focus:bg-white/[0.08] outline-none text-white transition-all text-sm"
              />
              <button className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-accent-cyan transition-colors uppercase tracking-widest text-[11px] shadow-xl">
                Đăng Ký
              </button>
            </form>
            
            <p className="text-[10px] text-slate-600 mt-8 font-bold uppercase tracking-widest">
              Bằng cách đăng ký, bạn đồng ý với Chính sách Bảo mật của Vikiway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
