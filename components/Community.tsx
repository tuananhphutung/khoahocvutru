
import React from 'react';
import { DISCUSSIONS } from '../constants';

const Community: React.FC = () => {
  return (
    <section id="Cộng Đồng" className="py-24 md:py-32 bg-[#050510] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Thảo Luận Mới Nhất</h2>
              <a href="#" className="text-sm font-bold text-primary hover:text-accent-cyan transition-colors">Vào Diễn Đàn</a>
            </div>

            <div className="space-y-6">
              {DISCUSSIONS.map((d) => (
                <div key={d.id} className="glass-card p-6 md:p-8 rounded-[1.5rem] hover:bg-white/[0.03] transition-colors cursor-pointer group">
                  <div className="flex items-start gap-5">
                    <div className={`size-14 rounded-full bg-gradient-to-br ${d.gradient} flex-shrink-0 shadow-lg`}></div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold group-hover:text-white transition-colors mb-3 leading-snug">{d.title}</h4>
                      <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">person</span> {d.author}</span>
                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">chat_bubble</span> {d.replies} phản hồi</span>
                        {d.tags.map(tag => (
                          <span key={tag} className="text-primary font-bold">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card rounded-[2rem] p-10 sticky top-28">
              <h3 className="text-xl font-bold mb-10 flex items-center gap-2">
                Trạng Thái Cộng Đồng
                <span className="material-symbols-outlined text-accent-orange">diversity_3</span>
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-400 font-medium">Đang trực tuyến</span>
                  </div>
                  <span className="font-mono font-bold text-2xl">12,842</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-2.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-slate-400 font-medium">Tổng thành viên</span>
                  </div>
                  <span className="font-mono font-bold text-2xl">450K+</span>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 italic">
                    "Vikiway là nơi kết nối những tâm hồn yêu bầu trời, cùng nhau giải mã những bí ẩn lớn lao nhất của nhân loại."
                  </p>
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_25px_rgba(19,19,236,0.4)] transition-all active:scale-95">
                    Tham gia ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
