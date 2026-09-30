export interface PriceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  estimatedTime?: string;
  description: string;
  popular?: boolean;
}

export const BARBERSHOP_CONFIG = {
  name: "Barbearia Samuel",
  tagline: "Cortes Modernos & Barba Impecável",
  shortDescription: "Atendimento exclusivo com pontualidade, toalha quente e acabamento na navalha. Venha renovar seu visual.",
  ctaPhrase: "Cansado daquele corte sem graça? Venha para a Barbearia Samuel e renove seu estilo com quem entende do assunto.",
  
  // Contato & Redes Sociais
  whatsapp: {
    rawNumber: "5561996556761",
    displayNumber: "(61) 99655-6761",
    url: "https://wa.me/5561996556761?text=Ol%C3%A1%2C%20Samuel!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia.",
    buildUrlWithService: (serviceName: string) => 
      `https://wa.me/5561996556761?text=Ol%C3%A1%2C%20Samuel!%20Gostaria%20de%20agendar%20o%20servi%C3%A7o%3A%20${encodeURIComponent(serviceName)}.`
  },

  instagram: {
    handle: "@barbearia_samuel",
    url: "https://www.instagram.com/barbearia_samuel/"
  },

  openingHours: {
    weekdays: {
      days: "Segunda a Sábado",
      hours: "08h às 19h",
      openHour: 8,
      closeHour: 19
    },
    sunday: {
      days: "Domingo",
      hours: "08h às 12h",
      openHour: 8,
      closeHour: 12
    }
  },

  // Serviços e Procedimentos individuais (selecionáveis pelo cliente)
  prices: [
    // 1. Corte
    {
      id: "corte",
      name: "Corte",
      category: "Individual",
      price: "R$ 30",
      estimatedTime: "35 min",
      description: "Degradê navalhado (Fade, taper, militar, low/mid/high) ou clássico na tesoura com finalização e pomada.",
      popular: true
    },
    // 2. Barba
    {
      id: "barba",
      name: "Barba",
      category: "Individual",
      price: "R$ 30",
      estimatedTime: "30 min",
      description: "Desenho da barba, toalha quente relaxante, esfoliação facial, navalha afiada e óleo hidratante especial.",
      popular: false
    },
    // 3. Sobrancelha
    {
      id: "sobrancelha",
      name: "Sobrancelha",
      category: "Individual",
      price: "R$ 5",
      estimatedTime: "15 min",
      description: "Limpeza e alinhamento milimétrico na navalha e pinça, mantendo a naturalidade da expressão masculina.",
      popular: false
    },
    // 4. Pigmentação
    {
      id: "pigmentacao",
      name: "Pigmentação",
      category: "Individual",
      price: "R$ 25",
      estimatedTime: "25 min",
      description: "Correção de falhas, realce de contorno e preenchimento de fios para um contraste impecável.",
      popular: false
    },
    // 5. Freestyle
    {
      id: "freestyle",
      name: "Freestyle",
      category: "Individual",
      price: "A partir de R$ 15",
      estimatedTime: "20 min",
      description: "Riscas laterais, desenhos geométricos, tribais ou arte personalizada feita com navalhete de precisão.",
      popular: true
    },
    // 6. Luzes
    {
      id: "luzes",
      name: "Luzes",
      category: "Individual",
      price: "A partir de R$ 80",
      estimatedTime: "90 min",
      description: "Descoloração segura masculina, matização e hidratação profunda para quem busca estilo marcante.",
      popular: false
    },
    // 7. Química em geral
    {
      id: "quimica",
      name: "Química em geral",
      category: "Individual",
      price: "A partir de R$ 60",
      estimatedTime: "60 min",
      description: "Alisamentos, selagem térmica, relaxamento e tratamentos capilares com cosméticos de alto padrão.",
      popular: false
    }
  ] as PriceItem[]
};
