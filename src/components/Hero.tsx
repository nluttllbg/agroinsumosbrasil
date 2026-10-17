import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sprout, Clock } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { getWhatsAppUrl } from '../constants/company';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[#09321E] via-[#0D4428] to-[#082918] text-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden"
    >
      {/* Detalhes de luz de fundo e textura sutil */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#65B72E_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-[#65B72E]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#165B35]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto e Ações */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tag / Kicker de Localização */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#65B72E]" aria-hidden="true" />
              <span>Sorriso – MT • Capital Nacional do Agronegócio</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white text-balance">
              Parceria e confiança para o agronegócio crescer.
            </h1>

            {/* Descrição Oficial */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              A Agro Brasil Insumos Agrícolas está ao lado do produtor rural, valorizando o
              conhecimento técnico, a proximidade no campo e o desenvolvimento de uma agricultura
              cada vez mais produtiva.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-[#0B3B24] bg-[#65B72E] hover:bg-[#72ce34] active:bg-[#58a027] shadow-lg shadow-emerald-950/40 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-[#0B3B24] text-transparent" aria-hidden="true" />
                <span>Fale com nossa equipe</span>
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all duration-200 w-full sm:w-auto"
              >
                <span>Conheça a Agro Brasil</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" aria-hidden="true" />
              </a>
            </div>

            {/* Faixa de Destaques Institucionais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-4 border-t border-emerald-800/60 w-full">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-4 h-4 text-[#65B72E] shrink-0" aria-hidden="true" />
                  <span>Presença Real</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1 leading-snug">
                  Acompanhamento contínuo na lavoura
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                  <Sprout className="w-4 h-4 text-[#65B72E] shrink-0" aria-hidden="true" />
                  <span>Soluções em Insumos</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1 leading-snug">
                  Portfólio para alta produtividade
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                  <Clock className="w-4 h-4 text-[#65B72E] shrink-0" aria-hidden="true" />
                  <span>Atendimento Direto</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1 leading-snug">
                  Agilidade e compromisso em MT
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Fotografia Real em Destaque */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/40 group">
              <div className="aspect-[4/5] w-full">
                <SafeImage
                  filename="analise-tecnica.jpeg"
                  alt="Equipe técnica da Agro Brasil acompanhando o desenvolvimento das lavouras de soja em Sorriso - MT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={true}
                  fallbackTitle="Equipe Técnica no Campo"
                />
              </div>

              {/* Degradê e Legenda Flutuante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded bg-[#65B72E]/90 text-[#0B3B24] text-[10px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
                  Campo & Técnica
                </span>
                <p className="text-sm sm:text-base font-semibold leading-snug text-white/95">
                  Equipe Agro Brasil acompanhando o desenvolvimento de lavouras em Sorriso e região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
