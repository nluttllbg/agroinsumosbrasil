import React, { useState } from 'react';
import { Camera, Upload, CheckCircle2, RotateCcw, X, Info } from 'lucide-react';
import { OFFICIAL_PHOTOS } from '../constants/company';
import { useAppImages } from '../context/ImageContext';

export const PhotoUploadAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { customImages, setCustomImage, resetImages } = useAppImages();

  const handleFileUpload = (filename: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        setCustomImage(filename, e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const customCount = Object.keys(customImages).length;

  return (
    <>
      {/* Botão de Atalho para Gerenciamento de Fotos */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-semibold shadow-lg backdrop-blur-md border border-slate-700/60 transition-all duration-200 hover:scale-105"
          title="Ver arquivos de imagem oficiais ou carregar fotos originais"
        >
          <Camera className="w-3.5 h-3.5 text-[#65B72E]" />
          <span>Fotos Oficiais {customCount > 0 && `(${customCount}/7)`}</span>
        </button>
      </div>

      {/* Modal de Arquivos e Fotos */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-50 text-[#1B8044]">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Arquivos de Fotos Reais da Agro Brasil
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pasta oficial no repositório: <code className="text-emerald-700 font-mono">public/images/</code>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Aviso explicativo */}
            <div className="my-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-xs text-emerald-950 leading-relaxed">
              <Info className="w-4 h-4 text-[#1B8044] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Hospedagem estática (GitHub Pages):</strong>
                O site lê as fotos diretamente da pasta <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200">public/images/</code>. Caso queira substituir os arquivos para visualização imediata nesta sessão, você pode carregar os arquivos correspondentes abaixo:
              </div>
            </div>

            {/* Lista dos 7 Arquivos Oficiais */}
            <div className="space-y-3">
              {OFFICIAL_PHOTOS.map((photo) => {
                const hasCustom = !!customImages[photo.filename];

                return (
                  <div
                    key={photo.filename}
                    className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 shrink-0 border border-slate-200">
                        <img
                          src={customImages[photo.filename] || `${import.meta.env.BASE_URL || './'}images/${photo.filename}`}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="font-mono font-bold text-slate-900">{photo.filename}</code>
                          {hasCustom && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-100 font-semibold px-2 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3 h-3" /> Personalizada
                            </span>
                          )}
                        </div>
                        <span className="text-slate-500 block mt-0.5">{photo.title}</span>
                      </div>
                    </div>

                    {/* Botão de upload para teste local */}
                    <label className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-medium border border-slate-300 cursor-pointer transition-colors shrink-0">
                      <Upload className="w-3.5 h-3.5 text-[#1B8044]" />
                      <span>Trocar foto</span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(photo.filename, file);
                        }}
                      />
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Ações inferiores */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              {customCount > 0 ? (
                <button
                  type="button"
                  onClick={resetImages}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restaurar padrões</span>
                </button>
              ) : (
                <span className="text-xs text-slate-400">7 arquivos configurados</span>
              )}

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
