import React, { useState } from 'react';
import { useAppImages } from '../context/ImageContext';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  filename: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  filename,
  alt,
  className = '',
  fallbackTitle,
  priority = false,
  ...props
}) => {
  const { getImageSrc } = useAppImages();
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const src = getImageSrc(filename);

  return (
    <div className={`relative overflow-hidden bg-slate-900/10 ${className}`}>
      {/* Skeleton / Fallback placeholder background */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" aria-hidden="true" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0B3B24] to-[#164D31] text-white text-center">
          <svg className="w-10 h-10 text-emerald-400 mb-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Agro Brasil Insumos</span>
          <span className="text-sm font-medium mt-1 text-white/90">{fallbackTitle || alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
