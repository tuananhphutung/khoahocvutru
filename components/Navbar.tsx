
import React from 'react';

interface NavbarProps {
  onAIClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAIClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-bg-dark/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white">flare</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-white">Vikiway</h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">Space Agency</p>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {['Khám Phá', 'Hệ Mặt Trời', 'Tin Tức', 'Thư Viện', 'Cộng Đồng'].map((link) => (
            <a key={link} href={`#${link}`} className="text-sm font-medium text-slate-300 hover:text-accent-orange transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onAIClick}
            className="p-2.5 rounded-full hover:bg-white/5 transition-colors text-accent-cyan flex items-center justify-center"
            title="Hỏi AI Vũ Trụ"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
          </button>
          <button className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
