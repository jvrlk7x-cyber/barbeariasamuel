import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.querySelector('#precos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090b]"
    >
      {/* Sleek Dark Mesh & Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.12),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Official Barbershop Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-amber-500/40 via-amber-400/20 to-orange-500/40 shadow-2xl shadow-amber-950/60 hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.jpg"
              alt="Logo Barbearia do Samuel"
              className="w-full h-full rounded-full object-cover bg-black"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Main Title with fade-in and slide-up */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4"
        >
          BARBEARIA SAMUEL
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8"
        >
          {BARBERSHOP_CONFIG.ctaPhrase}
        </motion.p>

        {/* Ver Preços CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3.5 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-xl shadow-amber-950/40 cursor-pointer"
          >
            <span>Ver Tabela de Serviços</span>
            <ArrowRight className="w-4 h-4 text-zinc-950" />
          </motion.button>
        </motion.div>

        {/* Trust Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 border-t border-zinc-800/80 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Seg a Sáb: 08h às 19h | Dom: 08h às 12h</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Navalhete descartável e esterilização</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
