import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { Clock, Calendar } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const OpeningHours: React.FC = () => {
  // Check if currently open according to business hours
  const status = useMemo(() => {
    try {
      const now = new Date();
      // Brasília time (UTC-3)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const brasiliaTime = new Date(utc - (3600000 * 3));
      
      const day = brasiliaTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
      const hour = brasiliaTime.getHours();
      const minutes = brasiliaTime.getMinutes();
      const currentHourFraction = hour + (minutes / 60);

      if (day === 0) {
        // Sunday: 8h to 12h
        const isOpen = currentHourFraction >= 8 && currentHourFraction < 12;
        return {
          isOpen,
          message: isOpen ? 'Aberto agora (fecha às 12h)' : 'Fechado agora (retoma na segunda às 08h)'
        };
      } else {
        // Monday to Saturday: 8h to 19h
        const isOpen = currentHourFraction >= 8 && currentHourFraction < 19;
        return {
          isOpen,
          message: isOpen ? 'Aberto agora (fecha às 19h)' : 'Fechado agora (retoma às 08h)'
        };
      }
    } catch {
      return { isOpen: true, message: 'Atendimento presencial ativo' };
    }
  }, []);

  return (
    <section id="horarios" className="py-20 bg-zinc-900/60 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header with framer-motion */}
          <FadeIn direction="up" distance={30}>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-2">
                <span className="w-5 h-px bg-amber-500" />
                <span>Disponibilidade & Pontualidade</span>
                <span className="w-5 h-px bg-amber-500" />
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2.5">
                HORÁRIO DE FUNCIONAMENTO
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
                Atendimento ágil durante toda a semana.
              </p>

              {/* Current Open/Closed status display in deep zinc */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs shadow-md">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <span className="text-zinc-300 font-medium">{status.message}</span>
              </div>
            </div>
          </FadeIn>

          {/* Cards for opening hours in deep zinc with subtle borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Segunda a Sábado */}
            <FadeIn delay={0.12} direction="up" distance={35}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="h-full relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200 shadow-xl shadow-black/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-amber-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                    Segunda a Sábado
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Dias de Semana & Sábado
                </h3>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {BARBERSHOP_CONFIG.openingHours.weekdays.hours}
                </div>
                <p className="text-xs text-zinc-400 border-t border-zinc-800 pt-3">
                  Atendimento ininterrupto com rapidez e acabamento de alto padrão.
                </p>
              </motion.div>
            </FadeIn>

            {/* Domingo */}
            <FadeIn delay={0.22} direction="up" distance={35}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="h-full relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200 shadow-xl shadow-black/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-amber-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                    Domingo
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Final de Semana
                </h3>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {BARBERSHOP_CONFIG.openingHours.sunday.hours}
                </div>
                <p className="text-xs text-zinc-400 border-t border-zinc-800 pt-3">
                  Período da manhã para você iniciar a semana com o visual renovado.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
