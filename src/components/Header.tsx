import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Tag, Clock, ArrowRight } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { 
      label: 'Início', 
      href: '#inicio', 
      icon: Home,
      description: 'Apresentação e boas-vindas' 
    },
    { 
      label: 'Tabela de Serviços', 
      href: '#precos', 
      icon: Tag,
      description: 'Monte e escolha seus procedimentos' 
    },
    { 
      label: 'Horários de Atendimento', 
      href: '#horarios', 
      icon: Clock,
      description: 'Segunda a Sábado e Domingo' 
    },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo com a imagem oficial */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="flex items-center gap-3 text-white group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/50 shadow-md group-hover:border-amber-400 group-hover:scale-105 transition-all shrink-0 bg-zinc-950">
                <img
                  src="/logo.jpg"
                  alt="Barbearia Samuel Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base sm:text-lg font-extrabold tracking-wider text-white">
                  {BARBERSHOP_CONFIG.name}
                </span>
                <span className="text-[9px] tracking-widest text-zinc-400 uppercase font-medium">
                  Cortes & Estilo Masculino
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs font-semibold tracking-wider text-zinc-300 hover:text-amber-400 transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-amber-400" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-x-4 top-[74px] z-50 rounded-2xl bg-[#121215]/98 border border-zinc-800 shadow-2xl p-5 overflow-hidden backdrop-blur-xl"
            >
              {/* Menu Title with Logo */}
              <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-500/40 shrink-0 bg-zinc-950">
                    <img
                      src="/logo.jpg"
                      alt="Barbearia Samuel Logo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-500">
                    Navegação do Site
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400">
                  {BARBERSHOP_CONFIG.name}
                </span>
              </div>

              {/* Organized Navigation Items */}
              <nav className="flex flex-col gap-1.5 py-1">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.04, duration: 0.2 }}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="group flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/90 border border-zinc-800/60 hover:border-amber-500/40 transition-all cursor-pointer active:scale-[0.99]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 group-hover:bg-amber-500/10 border border-zinc-700/50 group-hover:border-amber-500/30 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                            {link.label}
                          </span>
                          <span className="text-[11px] text-zinc-400">
                            {link.description}
                          </span>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Quick Hours Badge inside Drawer */}
              <div className="mt-4 pt-3.5 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Seg a Sáb: 08h-19h | Dom: 08h-12h</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
