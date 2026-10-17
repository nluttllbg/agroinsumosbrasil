import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../constants/company';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip informativo */}
      <div
        className={`hidden sm:flex items-center mr-3 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-slate-700/50 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
      >
        <span>Fale com a Agro Brasil no WhatsApp</span>
      </div>

      {/* Botão Flutuante */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa52] text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
        aria-label="Abrir conversa no WhatsApp com a Agro Brasil Insumos Agrícolas"
      >
        {/* Anel de pulso sutil */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <MessageCircle className="w-8 h-8 fill-white text-transparent relative z-10" aria-hidden="true" />
      </a>
    </aside>
  );
};
