import React from 'react';
import { 
  Scissors, 
  Sparkles, 
  Eye, 
  Paintbrush, 
  Wand2, 
  Flame, 
  FlaskConical, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { BARBERSHOP_CONFIG, ServiceItem } from '../config/barbershop';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Map appropriate icons for each requested service
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'corte':
        return <Scissors className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'barba':
        return <Sparkles className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'sobrancelha':
        return <Eye className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'pigmentacao':
        return <Paintbrush className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'freestyle':
        return <Wand2 className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'luzes':
        return <Flame className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      case 'quimica':
        return <FlaskConical className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
      default:
        return <Scissors className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#09090b] relative">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-3">
            <span className="w-6 h-px bg-amber-500" />
            <span>Excelência & Variedade</span>
            <span className="w-6 h-px bg-amber-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Procedimentos realizados com técnicas refinadas, produtos profissionais e atenção individual para garantir o resultado que você procura.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BARBERSHOP_CONFIG.services.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative bg-[#121215] hover:bg-[#18181c] border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
              >
                {/* Subtle top amber highlight line on hover */}
                <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />

                <div>
                  {/* Top card bar with icon and tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-zinc-900/90 border border-zinc-700/60 group-hover:border-amber-500/40 flex items-center justify-center transition-all group-hover:scale-105 shadow-inner">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-amber-400 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-amber-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Button: AGENDAR */}
                <div className="pt-4 border-t border-zinc-800/70 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">
                    Atendimento personalizado
                  </span>
                  
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-zinc-200 hover:text-zinc-950 border border-zinc-700 hover:border-transparent transition-all cursor-pointer group/btn active:scale-95"
                  >
                    <span>AGENDAR</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Special Feature Card: Combined Experience / Consultoria */}
          <div className="relative bg-gradient-to-br from-[#1c1815] to-[#121215] border border-amber-500/30 rounded-2xl p-7 flex flex-col justify-between hover:shadow-xl hover:shadow-orange-950/20 transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Experiência Completa</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Combo Especial: Corte + Barba Alinhada
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Alinhe seu visual por completo em um único momento. Atendimento detalhado com toalha quente, navalha e finalização com produtos exclusivos.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-amber-200/80">
                Consulte horários para atendimento combinado direto no WhatsApp
              </span>
              <a
                href={BARBERSHOP_CONFIG.whatsapp.buildUrlWithService("Combo Corte + Barba")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Agendar Combo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
