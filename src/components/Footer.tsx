import React from 'react';
import { Clock, ArrowUp } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { FadeIn } from './FadeIn';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Tabela de Serviços', href: '#precos' },
    { label: 'Horários de Atendimento', href: '#horarios' },
  ];

  return (
    <footer className="bg-[#08080a] border-t border-zinc-800/80 pt-12 pb-10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" distance={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
            {/* Brand Col */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-white mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/50 shadow-md shrink-0 bg-black">
                  <img
                    src="/logo.jpg"
                    alt="Barbearia Samuel Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display text-lg font-bold tracking-wider text-white">
                  {BARBERSHOP_CONFIG.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                {BARBERSHOP_CONFIG.shortDescription}
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs">
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

            {/* Horários */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Horário de Atendimento
              </h4>
              <div className="space-y-1.5 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Seg a Sáb: 08h às 19h</span>
                    <span className="text-zinc-400 block">Domingo: 08h às 12h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar with copyright and scroll to top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
            <p>
              © {new Date().getFullYear()} {BARBERSHOP_CONFIG.name}. Todos os direitos reservados.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Voltar ao topo</span>
              <div className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
