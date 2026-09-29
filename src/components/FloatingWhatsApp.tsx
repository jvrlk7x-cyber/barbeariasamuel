import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121215]/95 backdrop-blur-md border border-zinc-700/80 text-white text-xs font-medium py-2 px-3.5 rounded-xl shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Agende seu horário online</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BARBERSHOP_CONFIG.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse animation ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />

        <MessageCircle className="w-7 h-7 fill-white relative z-10 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
