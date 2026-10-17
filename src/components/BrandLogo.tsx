import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Insignia / Ícone AB */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm tracking-tight shadow-sm shrink-0 transition-transform hover:scale-105 ${
          isDark
            ? 'bg-[#18683B] text-white border border-emerald-400/30'
            : 'bg-[#0B3B24] text-white'
        }`}
        aria-hidden="true"
      >
        <span className="text-[#65B72E]">A</span>
        <span className="text-white">B</span>
      </div>

      {/* Tipografia da Marca */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span
            className={`font-black tracking-tight text-xl ${
              isDark ? 'text-white' : 'text-[#0B3B24]'
            }`}
          >
            AGRO
          </span>
          <span
            className={`font-black tracking-tight text-xl relative ${
              isDark ? 'text-[#84E045]' : 'text-[#1B8044]'
            }`}
          >
            Brasil
            {/* Folhas decorativas sutis como no logo oficial */}
            <svg
              className="w-3.5 h-3.5 absolute -top-1.5 -left-1 inline-block text-[#65B72E]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[9.5px] font-semibold tracking-wider uppercase mt-0.5 ${
              isDark ? 'text-emerald-200/80' : 'text-slate-500'
            }`}
          >
            Insumos Agrícolas Ltda
          </span>
        )}
      </div>
    </div>
  );
};
