/**
 * Configuração central da Barbearia
 * Edite facilmente os dados de contato, redes sociais, endereço e serviços nesta seção.
 */

import heroInteriorImg from '@/src/assets/images/hero_barber_interior_1790640804100.jpg';
import barberCutImg from '@/src/assets/images/barber_cut_precision_1790640815193.jpg';
import gentlemanImg from '@/src/assets/images/gentleman_haircut_beard_1790640825438.jpg';
import barberToolsImg from '@/src/assets/images/barber_craft_tools_1790640835043.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Corte' | 'Barba' | 'Freestyle' | 'Química' | 'Ambiente';
  image: string;
  alt: string;
}

export const BARBERSHOP_CONFIG = {
  // Nome e identidade da barbearia
  name: "Barbearia Samuel",
  slogan: "SEU ESTILO. NOSSO TRABALHO.",
  shortDescription: "Precisão, estilo e cuidado em cada detalhe. Transforme seu visual com um atendimento profissional na Barbearia Samuel.",
  
  // Contato & WhatsApp
  // URL solicitada: https://wa.me/5561996556761
  whatsapp: {
    rawNumber: "5561996556761",
    displayNumber: "(61) 99655-6761",
    url: "https://wa.me/5561996556761",
    defaultMessage: "Olá! Gostaria de agendar um horário na Barbearia Samuel.",
    buildUrlWithService: (serviceName: string) => 
      `https://wa.me/5561996556761?text=${encodeURIComponent(`Olá! Gostaria de agendar um horário na Barbearia Samuel para o serviço: ${serviceName}. Quais os horários disponíveis?`)}`
  },

  // Campos preparados para fácil edição posterior (sem dados inventados)
  instagram: {
    handle: "[@suabarbearia - Adicione seu Instagram]",
    url: "https://instagram.com/",
    isConfigured: false // Indica que é um placeholder para edição
  },

  address: {
    text: "[Endereço não informado - Adicione aqui sua localização]",
    cityState: "Brasília - DF",
    mapsUrl: "#contato",
    isConfigured: false // Indica que é um placeholder para edição
  },

  // Horários oficiais solicitados
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

  // Serviços solicitados com descrições sem inventar preços
  services: [
    {
      id: "corte",
      name: "Corte",
      description: "Cortes modernos e personalizados de acordo com seu estilo.",
      tag: "Clássico & Moderno"
    },
    {
      id: "barba",
      name: "Barba",
      description: "Acabamento preciso para deixar sua barba alinhada e bem cuidada.",
      tag: "Alinhamento & Toalha Quente"
    },
    {
      id: "sobrancelha",
      name: "Sobrancelha",
      description: "Design e alinhamento sob medida para valorizar a expressão do seu rosto.",
      tag: "Design Masculino"
    },
    {
      id: "pigmentacao",
      name: "Pigmentação",
      description: "Disfarce de falhas e realce de contornos para um efeito denso e natural.",
      tag: "Definição & Densidade"
    },
    {
      id: "freestyle",
      name: "Freestyle",
      description: "Desenhos artísticos e linhas personalizadas com extrema precisão.",
      tag: "Arte & Identidade"
    },
    {
      id: "luzes",
      name: "Luzes",
      description: "Mechas e clareamentos masculinos com técnicas e acabamento profissional.",
      tag: "Estilo & Tom"
    },
    {
      id: "quimica",
      name: "Química em geral",
      description: "Alisamentos, relaxamentos e tratamentos capilares com produtos de alto padrão.",
      tag: "Cuidado & Textura"
    }
  ] as ServiceItem[],

  // Imagens principais do projeto
  images: {
    hero: heroInteriorImg,
    barberCut: barberCutImg,
    gentleman: gentlemanImg,
    tools: barberToolsImg
  },

  // Galeria de transformações
  gallery: [
    {
      id: "gal-1",
      title: "Corte Degradê & Acabamento Navalhado",
      category: "Corte",
      image: gentlemanImg,
      alt: "Corte masculino moderno com fade alinhado"
    },
    {
      id: "gal-2",
      title: "Barboterapia & Alinhamento de Fios",
      category: "Barba",
      image: barberCutImg,
      alt: "Barba desenhada com precisão profissional"
    },
    {
      id: "gal-3",
      title: "Estrutura & Ambiente Exclusivo",
      category: "Ambiente",
      image: heroInteriorImg,
      alt: "Espaço premium com cadeiras clássicas e iluminação aconchegante"
    },
    {
      id: "gal-4",
      title: "Instrumentos & Produtos Nobres",
      category: "Química",
      image: barberToolsImg,
      alt: "Ferramentas tradicionais de alta qualidade"
    },
    {
      id: "gal-5",
      title: "Precisão & Simetria em Tesoura",
      category: "Corte",
      image: barberCutImg,
      alt: "Ajuste milimétrico de corte masculino"
    },
    {
      id: "gal-6",
      title: "Linhas Artísticas & Freestyle",
      category: "Freestyle",
      image: gentlemanImg,
      alt: "Trabalho detalhado de linhas e contorno"
    }
  ] as GalleryItem[]
};
