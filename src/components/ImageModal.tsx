import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { OFFICIAL_PHOTOS, GalleryPhoto } from '../constants/company';
import { SafeImage } from './SafeImage';

interface ImageModalProps {
  currentPhoto: GalleryPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  currentPhoto,
  onClose,
  onSelectPhoto,
}) => {
  const currentIndex = OFFICIAL_PHOTOS.findIndex((p) => p.id === currentPhoto?.id);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectPhoto(OFFICIAL_PHOTOS[currentIndex - 1]);
    } else {
      onSelectPhoto(OFFICIAL_PHOTOS[OFFICIAL_PHOTOS.length - 1]);
    }
  }, [currentIndex, onSelectPhoto]);

  const handleNext = useCallback(() => {
    if (currentIndex < OFFICIAL_PHOTOS.length - 1) {
      onSelectPhoto(OFFICIAL_PHOTOS[currentIndex + 1]);
    } else {
      onSelectPhoto(OFFICIAL_PHOTOS[0]);
    }
  }, [currentIndex, onSelectPhoto]);

  // Gerenciamento de teclas Escape, Seta Esquerda e Seta Direita
  useEffect(() => {
    if (!currentPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentPhoto, onClose, handlePrev, handleNext]);

  if (!currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-image-title"
      onClick={onClose}
    >
      {/* Botão Fechar */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Fechar visualização da imagem"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Botão Anterior */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Botão Próximo */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Conteúdo Central */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagem Ampliada */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black/50 min-h-[350px] sm:min-h-[500px]">
          <SafeImage
            filename={currentPhoto.filename}
            alt={currentPhoto.alt}
            className="w-full h-full max-h-[70vh] object-contain"
            priority={true}
            fallbackTitle={currentPhoto.title}
          />
        </div>

        {/* Rodapé da Imagem com Legenda */}
        <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#84E045] block mb-1">
              {currentPhoto.category}
            </span>
            <h2 id="modal-image-title" className="text-base sm:text-lg font-bold text-white">
              {currentPhoto.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {currentPhoto.caption}
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-400 shrink-0 self-end sm:self-center">
            {currentIndex + 1} de {OFFICIAL_PHOTOS.length}
          </div>
        </div>
      </div>
    </div>
  );
};
