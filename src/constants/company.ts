/**
 * Informações oficiais da Agro Brasil Insumos Agrícolas Ltda.
 */

export const COMPANY_INFO = {
  name: 'Agro Brasil Insumos Agrícolas Ltda.',
  shortName: 'Agro Brasil',
  segment: 'Atacado de produtos e insumos agrícolas',
  address: {
    street: 'Perimetral Sudeste, 11107',
    neighborhood: 'Centro Sul',
    city: 'Sorriso',
    state: 'MT',
    stateFullName: 'Mato Grosso',
    cep: '78896-084',
    country: 'Brasil',
    fullFormatted: 'Perimetral Sudeste, 11107, Centro Sul, Sorriso – MT, CEP 78896-084',
  },
  phone: {
    raw: '5566999805400',
    formatted: '(66) 99980-5400',
    telLink: 'tel:+5566999805400',
  },
  whatsapp: {
    number: '5566999805400',
    defaultMessage:
      'Olá! Conheci a Agro Brasil Insumos Agrícolas pelo site e gostaria de obter mais informações sobre os produtos e insumos agrícolas. Poderiam me atender, por favor?',
  },
  googleMaps: {
    query: 'Perimetral Sudeste, 11107, Centro Sul, Sorriso - MT, 78896-084, Brasil',
    getUrl: () =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        'Perimetral Sudeste, 11107, Centro Sul, Sorriso - MT, 78896-084, Brasil'
      )}`,
  },
};

/**
 * Retorna o link oficial do WhatsApp com a mensagem codificada
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || COMPANY_INFO.whatsapp.defaultMessage;
  return `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper para resolver caminhos de imagem compatíveis com GitHub Pages e caminhos base relativos
 */
export function resolveImagePath(filename: string): string {
  // Garante que o caminho funcione com Vite base relativa './' ou caminho absoluto
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  return `${cleanBase}images/${cleanFilename}`;
}

export interface GalleryPhoto {
  id: string;
  filename: string;
  title: string;
  category: string;
  caption: string;
  alt: string;
  gridSpan?: string;
}

export const OFFICIAL_PHOTOS: GalleryPhoto[] = [
  {
    id: 'fachada',
    filename: 'fachada-agrobrasil.jpeg',
    title: 'Sede e Fachada Comercial em Sorriso - MT',
    category: 'Infraestrutura',
    caption: 'Prédio comercial moderno localizado estrategicamente na Perimetral Sudeste, em Sorriso – MT.',
    alt: 'Fachada moderna da sede da Agro Brasil Insumos Agrícolas na Perimetral Sudeste em Sorriso MT',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'logo-recepcao',
    filename: 'logo-agrobrasil.jpeg',
    title: 'Identidade Visual e Recepção',
    category: 'Sede Comercial',
    caption: 'Espaço interno planejado para recepcionar produtores rurais, parceiros comerciais e consultores.',
    alt: 'Recepção interna com sofá de couro preto e logotipo em relevo Agro Brasil Insumos Agrícola na parede',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'analise-coletiva',
    filename: 'analise-tecnica.jpeg',
    title: 'Avaliação Técnica Coletiva na Lavoura',
    category: 'Campo & Diagnóstico',
    caption: 'Equipe de campo avaliando conjuntamente o vigor vegetativo e sanidade do sistema radicular.',
    alt: 'Equipe de agrônomos e produtores analisando o desenvolvimento radicular de plantas de soja em Sorriso',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'planta-soja',
    filename: 'planta-soja.jpeg',
    title: 'Monitoramento Radicular e Desenvolvimento da Soja',
    category: 'Fisiologia Vegetal',
    caption: 'Avaliação visual direta de nós reprodutivos, formação de vagens e sanidade do enraizamento.',
    alt: 'Mão de técnico segurando planta inteira de soja com raízes expostas e vagens em formação na lavoura',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'visitas-campo',
    filename: 'lavoura-equipe.jpeg',
    title: 'Visitas de Campo e Integração Técnica',
    category: 'Dia de Campo',
    caption: 'Troca de experiências em larga escala em áreas de cultivo em Mato Grosso.',
    alt: 'Dia de campo com produtores e equipe técnica reunidos em ampla lavoura de soja em Sorriso MT',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'tecnico-campo',
    filename: 'tecnico-no-campo.jpeg',
    title: 'Conhecimento e Recomendação Assertiva',
    category: 'Assistência Técnica',
    caption: 'Agrônomo em meio à lavoura transmitindo orientações de manejo adequadas ao ciclo da cultura.',
    alt: 'Especialista agrônomo com chapéu de proteção explicando recomendações técnicas dentro da lavoura de soja',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3',
  },
  {
    id: 'equipe-lavoura',
    filename: 'equipe-na-lavoura.jpeg',
    title: 'Presença e Parceria com o Produtor Rural',
    category: 'Parceria no Campo',
    caption: 'Profissionais alinhados com a realidade da lavoura para assegurar produtividade máxima ao produtor.',
    alt: 'Quatro integrantes da equipe técnica da Agro Brasil perfilados em meio ao cultivo verde de soja',
    gridSpan: 'col-span-12 lg:col-span-6',
  },
];
