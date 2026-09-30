import React from 'react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { WhatsAppIcon } from './Icons';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={BARBERSHOP_CONFIG.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Oficial"
        aria-label="WhatsApp Oficial"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />
        <WhatsAppIcon className="w-8 h-8 text-white relative z-10 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
