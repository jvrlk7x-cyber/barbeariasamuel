import React from 'react';
import { Scissors, MessageCircle, Instagram, Clock, MapPin, ArrowUp } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#08080a] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 text-white mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-white">
                {BARBERSHOP_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              {BARBERSHOP_CONFIG.shortDescription}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BARBERSHOP_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 hover:border-emerald-500 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={BARBERSHOP_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-pink-400 hover:border-pink-500 hover:scale-105 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-sm">
              {BARBERSHOP_CONFIG.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    className="hover:text-amber-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários e Contato */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-300 font-medium">
                    {BARBERSHOP_CONFIG.openingHours.weekdays.days}:
                  </span>
                  <span className="text-xs text-zinc-400">
                    {BARBERSHOP_CONFIG.openingHours.weekdays.hours}
                  </span>
                  <span className="block text-zinc-300 font-medium mt-1">
                    {BARBERSHOP_CONFIG.openingHours.sunday.days}:
                  </span>
                  <span className="text-xs text-zinc-400">
                    {BARBERSHOP_CONFIG.openingHours.sunday.hours}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900 text-xs">
                <span className="block text-zinc-400 font-semibold mb-0.5">WhatsApp:</span>
                <a
                  href={BARBERSHOP_CONFIG.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline"
                >
                  {BARBERSHOP_CONFIG.whatsapp.displayNumber}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} {BARBERSHOP_CONFIG.name}. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Voltar ao topo</span>
            <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
