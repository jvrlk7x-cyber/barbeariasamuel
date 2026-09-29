/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HighlightSection } from './components/HighlightSection';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { OpeningHours } from './components/OpeningHours';
import { BookingCta } from './components/BookingCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ServiceItem } from './config/barbershop';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setSelectedService(null);
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-orange-600 selection:text-white">
      {/* 1. Fixed Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Nossos Serviços */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Seção de Destaque */}
        <HighlightSection onOpenBooking={handleOpenBooking} />

        {/* 5. Galeria (Transformações) */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* 6. Sobre (Mais que um corte. Uma experiência.) */}
        <About />

        {/* 7. Horário de Funcionamento */}
        <OpeningHours onOpenBooking={handleOpenBooking} />

        {/* 8. Agendamento CTA */}
        <BookingCta />

        {/* 9. Contato */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* 12. Modal de Agendamento */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedService={selectedService}
      />
    </div>
  );
}
