/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingTable } from './components/PricingTable';
import { OpeningHours } from './components/OpeningHours';
import { FloatingSocialCorner } from './components/FloatingSocialCorner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-amber-500 selection:text-zinc-950 font-sans">
      {/* 1. Header Fixo com Menu Hamburger Mobile */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Tabela de Serviços com Seleção Interativa */}
        <PricingTable />

        {/* 4. Horário de Funcionamento */}
        <OpeningHours />
      </main>

      {/* 5. Rodapé */}
      <Footer />

      {/* 6. Símbolos do Instagram e WhatsApp no Canto da Tela */}
      <FloatingSocialCorner />
    </div>
  );
}
