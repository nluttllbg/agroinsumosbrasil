import React from 'react';
import { MapPin, Phone, Building2, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../constants/company';
import { SafeImage } from './SafeImage';

interface ContactSectionProps {
  onPhotoClick?: (filename: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#F8FAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Coluna de Dados de Contato e Ações */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B8044] block">
              Atendimento Ágil
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
              Vamos conversar?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Entre em contato com a <strong className="text-slate-900 font-semibold">Agro Brasil Insumos Agrícolas</strong> e fale com nossa equipe. Estamos prontos para atender você com pontualidade e conhecimento das demandas do campo.
            </p>

            {/* Caixas de Informações de Contato */}
            <div className="space-y-4 pt-2">
              {/* Endereço */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-[#1B8044] shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Endereço da Sede
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {COMPANY_INFO.address.fullFormatted}
                  </p>
                </div>
              </div>

              {/* Telefone / WhatsApp */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-[#1B8044] shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Telefone / WhatsApp Comercial
                  </span>
                  <a
                    href={COMPANY_INFO.phone.telLink}
                    className="text-sm sm:text-base font-semibold text-slate-900 hover:text-[#1B8044] transition-colors inline-block"
                  >
                    {COMPANY_INFO.phone.formatted}
                  </a>
                </div>
              </div>

              {/* Segmento */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-[#1B8044] shrink-0">
                  <Building2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Segmento Principal
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    {COMPANY_INFO.segment}
                  </p>
                </div>
              </div>
            </div>

            {/* Botões Funcionais: WhatsApp e Google Maps */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Botão Conversar pelo WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#1B8044] hover:bg-[#156937] active:bg-[#0E4926] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" aria-hidden="true" />
                <span>Conversar pelo WhatsApp</span>
              </a>

              {/* Botão Como Chegar - Google Maps */}
              <a
                href={COMPANY_INFO.googleMaps.getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-[#0B3B24] bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all duration-200 w-full sm:w-auto"
                title="Abrir rota no Google Maps para a sede da Agro Brasil"
              >
                <Navigation className="w-4 h-4 text-[#1B8044]" aria-hidden="true" />
                <span>Como chegar</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Coluna Visual: Fachada Comercial Oficial */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900 cursor-pointer"
              onClick={() => onPhotoClick?.('fachada-agrobrasil.jpeg')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onPhotoClick?.('fachada-agrobrasil.jpeg')}
              title="Clique para ampliar fotografia da fachada"
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full">
                <SafeImage
                  filename="fachada-agrobrasil.jpeg"
                  alt="Fachada do prédio comercial da Agro Brasil Insumos Agrícolas na Perimetral Sudeste em Sorriso MT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackTitle="Fachada da Sede em Sorriso - MT"
                />
              </div>

              {/* Degradê e Card Flutuante de Endereço */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#84E045] block mb-1">
                  Sede Administrativa e Comercial
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                  Agro Brasil Insumos Agrícolas Ltda
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#65B72E] shrink-0" />
                  <span>Perimetral Sudeste, 11107 • Sorriso – MT</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
