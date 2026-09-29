import React from 'react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { Award, Compass, Sparkles, Target, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: "Qualidade",
      description: "Utilizamos instrumentos de alta precisão e cosméticos masculinos selecionados para garantir saúde capilar e durabilidade ao corte."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-amber-500" />,
      title: "Atendimento",
      description: "Uma experiência individual e acolhedora. Ouvimos suas preferências para alinhar expectativas antes de iniciar qualquer procedimento."
    },
    {
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      title: "Estilo",
      description: "Harmonização de corte e barba com a sua rotina e traços faciais, transitando do refinamento clássico às tendências modernas."
    },
    {
      icon: <Target className="w-5 h-5 text-amber-500" />,
      title: "Precisão",
      description: "Atenção cirúrgica aos ângulos, simetria e graduação do fade. Cada detalhe é trabalhado com lâminas e tesouras afiadas."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      title: "Cuidado com cada cliente",
      description: "Higiene rigorosa de todos os instrumentos, toalha quente relaxante e dedicação integral durante todo o tempo de cadeira."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative line */}
              <div className="absolute -inset-2 rounded-2xl border border-amber-500/20 -rotate-1 hidden sm:block pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src={BARBERSHOP_CONFIG.images.barberCut}
                  alt="Atenção aos detalhes em corte de cabelo e barba"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/60">
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
                    Tradição & Contemporaneidade
                  </p>
                  <p className="text-sm text-zinc-300 font-medium">
                    Ambiente pensado para o bem-estar do homem moderno, unindo conforto e técnicas de excelência.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-500 mb-3">
              <span className="w-6 h-px bg-amber-500" />
              <span>Nossa Filosofia</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 text-balance">
              MAIS QUE UM CORTE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                UMA EXPERIÊNCIA.
              </span>
            </h2>

            <p className="text-base text-zinc-300 font-normal leading-relaxed mb-8">
              Acreditamos que cuidar do próprio estilo é uma forma de confiança e respeito próprio. Cada atendimento em nossa barbearia é conduzido com calma, escuta e dedicação absoluta para que você saia não apenas com um corte impecável, mas renovado.
            </p>

            {/* The 5 Pillars requested */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className={`p-4 rounded-xl bg-[#121215] border border-zinc-800/80 hover:border-amber-500/30 transition-all ${
                    idx === pillars.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center shrink-0">
                      {pillar.icon}
                    </div>
                    <h3 className="font-display font-bold text-sm text-white tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-11">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
