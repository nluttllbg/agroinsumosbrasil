import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { getWhatsAppUrl } from '../constants/company';

interface FieldCard {
  tag: string;
  image: string;
  title: string;
  description: string;
  linkText: string;
}

const FIELD_CARDS: FieldCard[] = [
  {
    tag: 'Orientação Técnica',
    image: 'tecnico-no-campo.jpeg',
    title: 'Assistência e Diálogo no Campo',
    description:
      'Presença técnica qualificada para orientar o manejo adequado e responder aos desafios de cada ciclo produtivo.',
    linkText: 'Diálogo direto com o produtor',
  },
  {
    tag: 'Diagnóstico Fisiológico',
    image: 'planta-soja.jpeg',
    title: 'Acompanhamento e Avaliação da Planta',
    description:
      'Inspeção minuciosa de nós, radicelas, sanidade foliar e carga reprodutiva para máxima produtividade.',
    linkText: 'Análise de sanidade e raízes',
  },
  {
    tag: 'Trabalho Técnico',
    image: 'analise-tecnica.jpeg',
    title: 'Trabalho Técnico e Tomada de Decisão',
    description:
      'Avaliação conjunta de dados de campo para recomendações assertivas no momento exato de cada aplicação.',
    linkText: 'Decisão técnica consistente',
  },
  {
    tag: 'Parceria de Campo',
    image: 'lavoura-equipe.jpeg',
    title: 'Visitas Técnicas e Relacionamento',
    description:
      'Troca constante de experiências com os agricultores em grandes áreas cultivadas em Mato Grosso.',
    linkText: 'Relacionamento contínuo',
  },
];

interface FieldWorkSectionProps {
  onPhotoClick?: (filename: string) => void;
}

export const FieldWorkSection: React.FC<FieldWorkSectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="atuacao" className="py-20 md:py-28 bg-[#F8FAF7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B8044]">
            Conexão Prática
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
            Conhecimento que{' '}
            <span className="text-[#1B8044] underline decoration-[#65B72E] decoration-4 underline-offset-4">
              acompanha a lavoura.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Da germinação ao enchimento de grãos: nossa equipe técnica alia conhecimento agronômico,
            observação rigorosa e proximidade diária com o produtor rural.
          </p>
        </div>

        {/* Grid de 4 Cards Técnicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FIELD_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Imagem com Tag Flutuante */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onPhotoClick?.(card.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onPhotoClick?.(card.image)}
                title="Clique para ampliar fotografia"
              >
                <SafeImage
                  filename={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle={card.title}
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#0B3B24]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {card.tag}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1B8044] transition-colors leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Link de Contato contextual para o WhatsApp */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de saber mais sobre "${card.title}" com a equipe técnica da Agro Brasil.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B8044] hover:text-[#0B3B24] transition-colors group/link"
                  >
                    <span>{card.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
