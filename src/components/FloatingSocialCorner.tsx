import React from 'react';
import { motion } from 'framer-motion';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { WhatsAppIcon, InstagramIcon } from './Icons';

export const FloatingSocialCorner: React.FC = () => {
  return (
    <div 
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3"
      role="region"
      aria-label="Redes Sociais Rápidas"
    >
      {/* Instagram Official Corner Button */}
      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.92 }}
        href={BARBERSHOP_CONFIG.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram Oficial da Barbearia Samuel"
        aria-label="Instagram Oficial"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white flex items-center justify-center shadow-xl shadow-pink-950/40 hover:shadow-pink-600/40 transition-shadow cursor-pointer border border-white/20"
      >
        <InstagramIcon className="w-6 h-6 text-white" />
      </motion.a>

      {/* WhatsApp Official Corner Button */}
      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.92 }}
        href={BARBERSHOP_CONFIG.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Oficial da Barbearia Samuel"
        aria-label="WhatsApp Oficial"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/40 transition-shadow cursor-pointer border border-white/20"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
};
