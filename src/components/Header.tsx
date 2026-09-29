import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Scissors } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nome da Barbearia */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-white group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/30 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:border-amber-400 group-hover:scale-105 transition-all">
              <Scissors className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-wider text-white">
                {BARBERSHOP_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">
                Barbearia & Estilo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-orange-500 hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>Agendar Agora</span>
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menu"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0e]/98 backdrop-blur-xl border-b border-zinc-800 p-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-lg text-base font-medium text-zinc-200 hover:text-amber-400 hover:bg-zinc-900/80 transition-all border-b border-zinc-900/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-lg text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-zinc-950 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Agendar Agora</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
