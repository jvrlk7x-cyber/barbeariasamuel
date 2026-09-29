import React, { useState } from 'react';
import { MessageCircle, Check, Calendar, Scissors, Sparkles, Send } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const BookingCta: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Corte');
  const [preferredPeriod, setPreferredPeriod] = useState('Sem preferência');
  const [customerName, setCustomerName] = useState('');

  // Handle WhatsApp action with pre-configured parameters
  const handleCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de agendar um horário na barbearia.`;
    if (customerName.trim()) {
      text = `Olá! Meu nome é ${customerName.trim()} e gostaria de agendar um horário.`;
    }
    text += `\n- Serviço desejado: ${selectedService}`;
    if (preferredPeriod !== 'Sem preferência') {
      text += `\n- Período de preferência: ${preferredPeriod}`;
    }
    text += `\nQuais os horários disponíveis?`;

    const url = `https://wa.me/5561996556761?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/10 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#121215] border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle amber corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Agendamento Rápido & Sem Complicação</span>
            </div>

            {/* Exactly as requested in prompt */}
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              PRONTO PARA RENOVAR SEU VISUAL?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto mb-10">
              Escolha seu serviço e fale diretamente com nossa equipe para agendar seu horário.
            </p>

            {/* Quick interactive assistant to prepare the WhatsApp message */}
            <form onSubmit={handleCustomWhatsApp} className="mb-10 text-left bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Serviço Desejado
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#16161a] border border-zinc-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {BARBERSHOP_CONFIG.services.map((s) => (
                      <option key={s.id} value={s.name} className="bg-zinc-900 text-white">
                        {s.name}
                      </option>
                    ))}
                    <option value="Combo Corte + Barba" className="bg-zinc-900 text-white">
                      Combo Corte + Barba
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Período de Preferência
                  </label>
                  <select
                    value={preferredPeriod}
                    onChange={(e) => setPreferredPeriod(e.target.value)}
                    className="w-full bg-[#16161a] border border-zinc-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Sem preferência" className="bg-zinc-900 text-white">Sem preferência</option>
                    <option value="Manhã (08h às 12h)" className="bg-zinc-900 text-white">Manhã (08h às 12h)</option>
                    <option value="Tarde (12h às 17h)" className="bg-zinc-900 text-white">Tarde (12h às 17h)</option>
                    <option value="Final do dia (17h às 19h)" className="bg-zinc-900 text-white">Final do dia (17h às 19h)</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Seu Nome (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Carlos Oliveira"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#16161a] border border-zinc-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
                <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-500" />
                  Sem cadastro ou senhas. Conversa direta no WhatsApp.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-amber-500 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Enviar Preferência</span>
                </button>
              </div>
            </form>

            {/* Direct Official Button requested by prompt */}
            <div className="flex flex-col items-center">
              <a
                href={BARBERSHOP_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-base sm:text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-xl shadow-emerald-950/40 hover:shadow-emerald-600/30 active:scale-[0.98] transition-all cursor-pointer group"
              >
                <MessageCircle className="w-6 h-6 fill-white text-emerald-600 transition-transform group-hover:scale-110" />
                <span>AGENDAR PELO WHATSAPP</span>
              </a>

              <p className="mt-4 text-xs text-zinc-500">
                Número oficial: {BARBERSHOP_CONFIG.whatsapp.displayNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
