import React from 'react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { MessageCircle, CheckCircle } from 'lucide-react';

interface HighlightSectionProps {
  onOpenBooking: () => void;
}

export const HighlightSection: React.FC<HighlightSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#09090b]">
      {/* Background Graphic & Photo Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BARBERSHOP_CONFIG.images.tools}
          alt="Instrumentos e ambiente de barbearia de precisão"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Soft Amber Glow Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-[#09090b]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Subtitle */}
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-500 mb-6">
          <span className="w-12 h-px bg-amber-500" />
          <span>Propósito & Tradição</span>
          <span className="w-12 h-px bg-amber-500" />
        </div>

        {/* Powerful Core Statement */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-8 text-balance">
          ESTILO NÃO É APENAS APARÊNCIA.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
            É IDENTIDADE.
          </span>
        </h2>

        {/* Short description about quality, precision and personalized customer care */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Nosso compromisso é entregar a máxima qualidade e precisão em cada corte e barba. Entendemos a personalidade de cada cliente para oferecer um atendimento focado no que você realmente busca.
        </p>

        {/* Highlights pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <span className="text-amber-400 font-display font-bold text-lg block mb-1">Precisão Artesanal</span>
            <span className="text-xs text-zinc-400 leading-normal">Navalha afiada e simetria técnica impecável</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <span className="text-amber-400 font-display font-bold text-lg block mb-1">Atendimento VIP</span>
            <span className="text-xs text-zinc-400 leading-normal">Tempo dedicado e respeito ao seu momento</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            <span className="text-amber-400 font-display font-bold text-lg block mb-1">Produtos de Alto Padrão</span>
            <span className="text-xs text-zinc-400 leading-normal">Cosméticos masculinos que tratam os fios</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm md:text-base font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-orange-500 shadow-xl shadow-orange-600/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-zinc-950" />
            <span>AGENDAR MEU HORÁRIO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
