import React from 'react';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  onPhotoClick?: (filename: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Coluna de Texto Institucional */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B8044]">
              <span className="h-0.5 w-6 bg-[#65B72E]" aria-hidden="true" />
              <span>Institucional</span>
            </div>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
              Compromisso com quem faz o agro acontecer.
            </h2>

            {/* Parágrafos Oficiais */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                A <strong className="font-semibold text-slate-900">Agro Brasil Insumos Agrícolas Ltda</strong> atua no comércio atacadista de insumos, oferecendo suporte estratégico ao produtor rural para potencializar o rendimento e a sustentabilidade de suas culturas.
              </p>
              <p>
                Com sede estabelecida estrategicamente em Sorriso – Mato Grosso, polo global da produção de grãos, nossa missão é construir relações duradouras de confiança mútua, fundamentadas na transparência, na ética comercial e na presença técnica constante dentro da lavoura.
              </p>
              <p>
                Acreditamos que o sucesso no agronegócio não se limita à entrega de produtos: nasce do diagnóstico assertivo em campo, da escuta atenta das necessidades de cada propriedade e do fornecimento de insumos com procedência e eficácia comprovada.
              </p>
            </div>

            {/* Cards 01, 02, 03 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-[#0B3B24] font-bold text-xs mb-2.5">
                  01
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Atacado de Insumos</h3>
                <p className="text-xs text-slate-600 leading-snug">
                  Comercialização sólida de insumos agrícolas de alto padrão.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-[#0B3B24] font-bold text-xs mb-2.5">
                  02
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Relacionamento Ético</h3>
                <p className="text-xs text-slate-600 leading-snug">
                  Parceria de longo prazo baseada em integridade e respeito.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-[#0B3B24] font-bold text-xs mb-2.5">
                  03
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Presença Ativa</h3>
                <p className="text-xs text-slate-600 leading-snug">
                  Acompanhamento técnico direto junto ao produtor no campo.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Duas Fotografias Reais Lado a Lado */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Imagem 1: Sede e Recepção */}
            <div
              className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => onPhotoClick?.('logo-agrobrasil.jpeg')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onPhotoClick?.('logo-agrobrasil.jpeg')}
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                <SafeImage
                  filename="logo-agrobrasil.jpeg"
                  alt="Recepção com sofá preto e logotipo da Agro Brasil Insumos Agrícola"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle="Recepção da Sede"
                />
              </div>
              <div className="p-4 bg-white flex flex-col flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B8044] mb-1">
                  Identidade & Estrutura
                </span>
                <p className="text-xs text-slate-600 leading-snug">
                  Sede planejada para bem receber o produtor rural e parceiros.
                </p>
              </div>
            </div>

            {/* Imagem 2: Dia de Campo Coletivo */}
            <div
              className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => onPhotoClick?.('lavoura-equipe.jpeg')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onPhotoClick?.('lavoura-equipe.jpeg')}
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                <SafeImage
                  filename="lavoura-equipe.jpeg"
                  alt="Dia de campo com produtores rurais e equipe técnica da Agro Brasil na lavoura"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle="Dia de Campo"
                />
              </div>
              <div className="p-4 bg-white flex flex-col flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B8044] mb-1">
                  Força do Coletivo
                </span>
                <p className="text-xs text-slate-600 leading-snug">
                  Dias de campo e alinhamentos práticos diretamente no cultivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
