import React, { useMemo } from 'react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { Clock, Calendar, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';

interface OpeningHoursProps {
  onOpenBooking: () => void;
}

export const OpeningHours: React.FC<OpeningHoursProps> = ({ onOpenBooking }) => {
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
          message: isOpen ? 'Aberto agora (fecha às 12h)' : 'Fechado agora (retoma segunda às 08h)'
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
      return { isOpen: true, message: 'Horário de atendimento regular' };
    }
  }, []);

  return (
    <section id="horarios" className="py-24 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-3">
              <span className="w-6 h-px bg-amber-500" />
              <span>Pontualidade & Disponibilidade</span>
              <span className="w-6 h-px bg-amber-500" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              HORÁRIO DE FUNCIONAMENTO
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
              Organize seu dia e reserve com antecedência para garantir o melhor atendimento sem filas.
            </p>

            {/* Current Open/Closed status display */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-500'
                }`}
              />
              <span className="text-zinc-300 font-medium">{status.message}</span>
            </div>
          </div>

          {/* Cards for opening hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
            {/* Segunda a Sábado */}
            <div className="relative group bg-[#121215] hover:bg-[#18181c] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-8 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-105 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Dias de Semana & Sábado
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {BARBERSHOP_CONFIG.openingHours.weekdays.days}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-200">
                  {BARBERSHOP_CONFIG.openingHours.weekdays.hours}
                </span>
              </div>
              <p className="text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
                Atendimento ininterrupto ao longo do dia para sua comodidade.
              </p>
            </div>

            {/* Domingo */}
            <div className="relative group bg-[#121215] hover:bg-[#18181c] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-8 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Final de Semana
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {BARBERSHOP_CONFIG.openingHours.sunday.days}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-200">
                  {BARBERSHOP_CONFIG.openingHours.sunday.hours}
                </span>
              </div>
              <p className="text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
                Período da manhã para você começar a semana com o visual alinhado.
              </p>
            </div>
          </div>

          {/* Quick CTA banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#18181c] to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-display font-bold text-white text-base">
                Prefere agendar para um horário específico?
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Envie uma mensagem e consulte a disponibilidade em tempo real.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>Verificar Horário</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
