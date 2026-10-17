import React from 'react';
import { ZoomIn } from 'lucide-react';
import { OFFICIAL_PHOTOS, GalleryPhoto } from '../constants/company';
import { SafeImage } from './SafeImage';

interface GallerySectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPhotoClick }) => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Galeria */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B8044] block mb-2">
              Registro em Imagens
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
              Nosso Dia a Dia no Campo e na Empresa
            </h2>
            <div className="h-1 w-20 bg-[#65B72E] mt-4 rounded-full" />
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
            Fotos reais que ilustram nossa presença em Sorriso - MT, da infraestrutura de atendimento
            ao coração das lavouras.
          </p>
        </div>

        {/* Grid de Fotos Reais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFICIAL_PHOTOS.map((photo, index) => {
            const isWide = photo.id === 'equipe-lavoura';

            return (
              <div
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onPhotoClick(photo)}
                aria-label={`Ver imagem ampliada: ${photo.title}`}
              >
                {/* Imagem com Proporção Adequada */}
                <div className={`w-full overflow-hidden ${isWide ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                  <SafeImage
                    filename={photo.filename}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    fallbackTitle={photo.title}
                  />
                </div>

                {/* Efeito de Overlay Suave ao Passar o Cursor */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                {/* Ícone de Zoom Flutuante */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 pointer-events-none">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Informações da Fotografia */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#84E045] block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-emerald-200 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
