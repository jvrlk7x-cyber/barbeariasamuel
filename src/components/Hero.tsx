import React from 'react';
import { ArrowRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090b]"
    >
      {/* Background Photography with Sophisticated Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={BARBERSHOP_CONFIG.images.hero}
          alt="Ambiente elegante da Barbearia"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend seamlessly into black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-[#09090b]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Elegant Top Kicker (Zero-Pill format with subtle separator) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-500 mb-6">
              <span className="w-8 h-px bg-amber-500" />
              <span>Cuidado & Precisão Masculina</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Atendimento Premium</span>
            </div>

            {/* Impactful Typography */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              SEU ESTILO.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500">
                NOSSO TRABALHO.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-9">
              {BARBERSHOP_CONFIG.shortDescription}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm md:text-base font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-orange-500 shadow-xl shadow-orange-600/25 hover:shadow-orange-500/35 active:scale-[0.98] transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-zinc-950 transition-transform group-hover:scale-110" />
                <span>AGENDAR AGORA</span>
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm md:text-base font-semibold tracking-wider text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/50 hover:text-white transition-all cursor-pointer"
              >
                <span>VER SERVIÇOS</span>
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </button>
            </div>

            {/* Trust Markers without fake metrics */}
            <div className="pt-6 border-t border-zinc-800/80 w-full flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Atendimento de Seg a Sáb: 08h às 19h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Técnicas modernas e acabamento impecável</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card: Editorial Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle ambient light glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-amber-500/20 via-orange-600/10 to-transparent rounded-2xl blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 shadow-2xl">
                <img
                  src={BARBERSHOP_CONFIG.images.gentleman}
                  alt="Estilo e acabamento masculino impecável"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay at bottom of card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>Excelência em Cada Detalhe</span>
                  </div>
                  <h2 className="text-lg font-bold text-white tracking-wide">
                    Cortes & Barba com Padrão de Alta Barbearia
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
