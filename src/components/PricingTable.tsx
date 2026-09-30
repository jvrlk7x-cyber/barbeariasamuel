import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { 
  Check, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  Plus,
  Trash2,
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { FadeIn } from './FadeIn';

export const PricingTable: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleSelectService = (id: string) => {
    setSelectedServices((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearSelection = () => {
    setSelectedServices([]);
  };

  const selectedItemsData = BARBERSHOP_CONFIG.prices.filter((item) => 
    selectedServices.includes(item.id)
  );

  const calculateTotal = () => {
    return selectedItemsData.reduce((acc, item) => {
      const match = item.price.replace(/\./g, '').match(/\d+/);
      const val = match ? parseInt(match[0], 10) : 0;
      return acc + val;
    }, 0);
  };

  const buildSelectedWhatsAppUrl = () => {
    if (selectedItemsData.length === 0) return BARBERSHOP_CONFIG.whatsapp.url;

    const list = selectedItemsData.map((item) => `• ${item.name} (${item.price})`).join('\n');
    const total = calculateTotal();
    const message = `Olá, Samuel! Gostaria de agendar os seguintes serviços na Barbearia:\n\n${list}\n\nTotal estimado: R$ ${total}\nQual o melhor dia e horário disponível?`;

    return `https://wa.me/${BARBERSHOP_CONFIG.whatsapp.rawNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="precos" className="py-20 bg-zinc-900/60 border-y border-zinc-800 relative">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up" distance={30}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-2">
              <span className="w-5 h-px bg-amber-500" />
              <span>Monte Seu Atendimento</span>
              <span className="w-5 h-px bg-amber-500" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2.5">
              TABELA DE SERVIÇOS
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              Toque nos serviços que deseja realizar. O total é calculado automaticamente para você enviar no WhatsApp.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BARBERSHOP_CONFIG.prices.map((item, index) => {
            const isSelected = selectedServices.includes(item.id);
            const staggerDelay = (index % 6) * 0.07;

            return (
              <FadeIn
                key={item.id}
                delay={staggerDelay}
                direction="up"
                distance={35}
              >
                <div
                  onClick={() => toggleSelectService(item.id)}
                  className={`h-full relative rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between shadow-xl shadow-black/30 border cursor-pointer group select-none ${
                    isSelected
                      ? 'bg-zinc-900 border-amber-400 ring-2 ring-amber-400/40 shadow-amber-950/30'
                      : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* Top Header inside card */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isSelected
                          ? 'bg-amber-500 text-zinc-950 font-extrabold'
                          : 'bg-zinc-800/80 text-zinc-300 border border-zinc-700/60'
                      }`}>
                        {isSelected ? '✓ Selecionado' : 'Serviço'}
                      </span>
                      
                      {item.estimatedTime && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          {item.estimatedTime}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className={`font-display text-base sm:text-lg font-bold transition-colors ${
                        isSelected ? 'text-amber-400' : 'text-white group-hover:text-amber-400'
                      }`}>
                        {item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-display text-lg sm:text-xl font-black text-amber-400">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Button to choose */}
                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelectService(item.id);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-zinc-950 font-bold'
                          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/60'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Selecionado</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-amber-400" />
                          <span>Escolher este</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-zinc-500">
                      {isSelected ? 'Clique para remover' : 'Toque para somar'}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <FadeIn delay={0.15} direction="up" distance={25}>
          <div className="mt-8 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 shadow-md">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Aceitamos Pix, cartões de crédito e débito</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Navalhete descartável e esterilização</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Atendimento presencial</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Floating Interactive Order Bar when client chooses 1 or more services */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 inset-x-4 max-w-xl mx-auto z-50 bg-[#121215]/98 border border-amber-500/50 shadow-2xl shadow-black/80 rounded-2xl p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-black">
                    {selectedServices.length}
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider truncate">
                    {selectedServices.length === 1 ? 'Serviço Selecionado' : 'Serviços Selecionados'}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-[11px] text-zinc-400">Total estimado:</span>
                  <span className="text-base font-extrabold text-amber-400">
                    R$ {calculateTotal()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={clearSelection}
                  title="Limpar seleção"
                  aria-label="Limpar seleção"
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <a
                  href={buildSelectedWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-95 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Enviar Pedido</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
