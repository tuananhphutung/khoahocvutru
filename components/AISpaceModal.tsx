
import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService';

interface AISpaceModalProps {
  onClose: () => void;
}

const AISpaceModal: React.FC<AISpaceModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState<string>('');
  const [topic, setTopic] = useState('Hố đen');

  const fetchFact = async (t?: string) => {
    setLoading(true);
    const result = await geminiService.getCosmicFact(t || topic);
    setFact(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl border-white/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-primary to-accent-orange"></div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h3 className="text-xl font-bold">Trí Tuệ Vũ Trụ</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mb-10">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 block">Chủ đề khám phá</label>
          <div className="flex flex-wrap gap-2">
            {['Hố đen', 'Sao Hỏa', 'Vụ nổ lớn', 'Thiên hà Andromeda', 'Người ngoài hành tinh'].map(t => (
              <button 
                key={t}
                onClick={() => { setTopic(t); fetchFact(t); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${topic === t ? 'bg-accent-cyan text-black border-accent-cyan shadow-lg shadow-accent-cyan/20' : 'bg-white/5 border-white/10 hover:border-white/30 text-slate-300'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[160px] bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="size-10 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-slate-500 font-bold animate-pulse">ĐANG KẾT NỐI VỚI COSMIC AI...</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <p className="text-lg md:text-xl font-medium leading-relaxed italic text-white/90">
                "{fact}"
              </p>
            </div>
          )}
        </div>

        <button 
          onClick={() => fetchFact()}
          disabled={loading}
          className="mt-8 w-full py-4 bg-primary hover:bg-primary/80 disabled:opacity-50 text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
          Tạo Sự Kiện Mới
        </button>
      </div>
    </div>
  );
};

export default AISpaceModal;
