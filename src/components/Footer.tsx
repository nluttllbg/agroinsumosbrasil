import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, getWhatsAppUrl } from '../constants/company';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B3B24] text-white pt-16 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-800/50">
          {/* Coluna 1: Marca e Razão Social */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="dark" />
            <div className="pt-2 text-xs sm:text-sm text-emerald-100/80 space-y-2 leading-relaxed">
              <p>
                <strong className="text-white">Razão Social:</strong> {COMPANY_INFO.name}
              </p>
              <p className="max-w-md">
                Comercialização atacadista de insumos agrícolas com suporte técnico próximo ao produtor rural em Sorriso e em todo o estado de Mato Grosso.
              </p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#84E045] block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm text-emerald-100/90 font-medium">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-white transition-colors">
                  Atuação no Campo
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Endereço & Atendimento */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#84E045] block">
              Endereço & Atendimento
            </span>
            <div className="text-xs sm:text-sm text-emerald-100/90 space-y-2.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#65B72E] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.neighborhood}
                  <br />
                  {COMPANY_INFO.address.city} – {COMPANY_INFO.address.state}, CEP {COMPANY_INFO.address.cep}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-xs text-emerald-200/70 block">WhatsApp e Telefone:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-extrabold text-white hover:text-[#84E045] transition-colors mt-0.5"
                >
                  <Phone className="w-4 h-4 text-[#65B72E]" />
                  <span>{COMPANY_INFO.phone.formatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Final de Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span>{COMPANY_INFO.address.city} – {COMPANY_INFO.address.stateFullName}</span>
            <span>|</span>
            <span>{COMPANY_INFO.address.country}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
