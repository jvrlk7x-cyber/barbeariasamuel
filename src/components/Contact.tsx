import React, { useState } from 'react';
import { MessageCircle, Clock, MapPin, Instagram, Copy, Check, ExternalLink } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyWhatsApp = () => {
    navigator.clipboard.writeText(BARBERSHOP_CONFIG.whatsapp.displayNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-3">
            <span className="w-6 h-px bg-amber-500" />
            <span>Fale Conosco</span>
            <span className="w-6 h-px bg-amber-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            CONTATO & LOCALIZAÇÃO
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Estamos prontos para atender você. Entre em contato ou tire dúvidas diretamente pelo canal oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: WhatsApp */}
          <div className="bg-[#121215] border border-zinc-800 hover:border-emerald-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Atendimento Direto
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-sm font-semibold text-zinc-200 mb-1">
                {BARBERSHOP_CONFIG.whatsapp.displayNumber}
              </p>
              <p className="text-xs text-zinc-400 mb-4">
                Envie mensagem para agendar ou tirar dúvidas sobre procedimentos.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/80">
              <a
                href={BARBERSHOP_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-center bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
              >
                Abrir Conversa
              </a>
              <button
                onClick={copyWhatsApp}
                title="Copiar número"
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Horário de Funcionamento */}
          <div className="bg-[#121215] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                Horários
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Funcionamento
              </h3>
              <div className="space-y-1.5 text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Seg a Sáb:</span>
                  <span className="font-semibold text-white">{BARBERSHOP_CONFIG.openingHours.weekdays.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Domingo:</span>
                  <span className="font-semibold text-white">{BARBERSHOP_CONFIG.openingHours.sunday.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <span className="text-[11px] text-zinc-400 block">
                Agendamento prévio recomendado
              </span>
            </div>
          </div>

          {/* Card 3: Campo preparado para Endereço */}
          <div className="bg-[#121215] border border-dashed border-zinc-700/80 hover:border-amber-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                Localização
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Endereço
              </h3>
              <p className="text-xs text-amber-400/90 font-mono bg-zinc-900/90 p-2.5 rounded-lg border border-zinc-800 leading-relaxed mb-3">
                {BARBERSHOP_CONFIG.address.text}
              </p>
              <p className="text-xs text-zinc-400">
                Campo pronto para receber seu endereço e link do Google Maps no arquivo de configuração.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <span className="text-[11px] text-zinc-400 block">
                Configurável em <code className="text-amber-400">barbershop.ts</code>
              </span>
            </div>
          </div>

          {/* Card 4: Campo preparado para Instagram */}
          <div className="bg-[#121215] border border-dashed border-zinc-700/80 hover:border-amber-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-pink-500 mb-5 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                Rede Social
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Instagram
              </h3>
              <p className="text-xs text-pink-300/90 font-mono bg-zinc-900/90 p-2.5 rounded-lg border border-zinc-800 leading-relaxed mb-3">
                {BARBERSHOP_CONFIG.instagram.handle}
              </p>
              <p className="text-xs text-zinc-400">
                Campo pronto para vincular seu perfil e fotos oficiais do Instagram.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <span className="text-[11px] text-zinc-400 block">
                Configurável em <code className="text-amber-400">barbershop.ts</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
