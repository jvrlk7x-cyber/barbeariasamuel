import React, { useState } from 'react';
import { X, MessageCircle, Check, Send, Scissors } from 'lucide-react';
import { BARBERSHOP_CONFIG, ServiceItem } from '../config/barbershop';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService
}) => {
  const [selectedServiceName, setSelectedServiceName] = useState(
    preSelectedService ? preSelectedService.name : 'Corte'
  );
  const [clientName, setClientName] = useState('');
  const [preferredDate, setPreferredDate] = useState('Hoje / O quanto antes');
  const [preferredShift, setPreferredShift] = useState('Qualquer horário');

  // Update if preSelectedService changes
  React.useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceName(preSelectedService.name);
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Olá! Gostaria de agendar um horário na barbearia.`;
    if (clientName.trim()) {
      message = `Olá! Me chamo ${clientName.trim()} e gostaria de agendar um horário.`;
    }
    message += `\n• Serviço: ${selectedServiceName}`;
    if (preferredDate) {
      message += `\n• Dia preferido: ${preferredDate}`;
    }
    if (preferredShift !== 'Qualquer horário') {
      message += `\n• Turno preferido: ${preferredShift}`;
    }
    message += `\nQuais os próximos horários disponíveis?`;

    const url = `https://wa.me/5561996556761?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121215] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Amber Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-zinc-700/80 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
            <Scissors className="w-5 h-5 -rotate-45" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Agendamento Rápido
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Reserve seu Atendimento
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 mb-6">
          Preencha suas preferências para enviar diretamente ao WhatsApp oficial da barbearia.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Serviço
            </label>
            <select
              value={selectedServiceName}
              onChange={(e) => setSelectedServiceName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {BARBERSHOP_CONFIG.services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} - {s.tag}
                </option>
              ))}
              <option value="Combo Corte + Barba">Combo Corte + Barba</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Data Preferida
              </label>
              <select
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Hoje / O quanto antes">Hoje / O quanto antes</option>
                <option value="Amanhã">Amanhã</option>
                <option value="Esta semana">Esta semana</option>
                <option value="Final de semana">Final de semana</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Horário / Turno
              </label>
              <select
                value={preferredShift}
                onChange={(e) => setPreferredShift(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Qualquer horário">Qualquer horário</option>
                <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                <option value="Tarde (12h às 17h)">Tarde (12h às 17h)</option>
                <option value="Final do dia (17h às 19h)">Final do dia (17h às 19h)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Seu Nome (Opcional)
            </label>
            <input
              type="text"
              placeholder="Como prefere ser chamado"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Continuar no WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            Você será direcionado diretamente para o WhatsApp oficial
          </p>
        </form>
      </div>
    </div>
  );
};
