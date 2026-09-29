import React, { useState } from 'react';
import { BARBERSHOP_CONFIG, GalleryItem } from '../config/barbershop';
import { Eye, X, MessageCircle, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onOpenBooking: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['Todos', 'Corte', 'Barba', 'Ambiente', 'Freestyle'];

  const filteredItems = activeCategory === 'Todos'
    ? BARBERSHOP_CONFIG.gallery
    : BARBERSHOP_CONFIG.gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-3">
              <span className="w-6 h-px bg-amber-500" />
              <span>Portfólio & Resultados</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              TRANSFORMAÇÕES
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Cortes alinhados, barbas modeladas e técnicas modernas. Veja alguns dos estilos desenvolvidos em nossa cadeira.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-amber-500/60 bg-zinc-900 cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-950/20"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Accent Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-zinc-900/90 backdrop-blur-md border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  {item.category}
                </span>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/60">
                  <span>Toque para ampliar</span>
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400">
            Pronto para transformar seu visual com a mesma excelência?
          </p>
          <button
            onClick={onOpenBooking}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
          >
            <span>Falar com barbeiro e reservar horário</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-[#121215] border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#121215] border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                  {selectedPhoto.category}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {selectedPhoto.title}
                </h4>
              </div>

              <a
                href={BARBERSHOP_CONFIG.whatsapp.buildUrlWithService(selectedPhoto.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 hover:from-amber-400 hover:to-orange-400 shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Quero Esse Estilo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
