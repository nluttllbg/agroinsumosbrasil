import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants/company';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B3B24] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Localização da Sede */}
        <div className="flex items-center gap-1.5 text-emerald-100/90 font-medium tracking-tight">
          <MapPin className="w-3.5 h-3.5 text-[#65B72E] shrink-0" aria-hidden="true" />
          <span>{COMPANY_INFO.address.fullFormatted}</span>
        </div>

        {/* Telefone e WhatsApp Comercial */}
        <div className="flex items-center gap-4">
          <a
            href={COMPANY_INFO.phone.telLink}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#84E045] transition-colors"
            title="Ligar para Agro Brasil"
          >
            <Phone className="w-3.5 h-3.5 text-[#65B72E]" aria-hidden="true" />
            <span>{COMPANY_INFO.phone.formatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
