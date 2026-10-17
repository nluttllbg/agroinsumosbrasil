import React, { createContext, useContext, useState, useEffect } from 'react';
import { resolveImagePath } from '../constants/company';

interface ImageContextType {
  customImages: Record<string, string>;
  setCustomImage: (filename: string, dataUrl: string) => void;
  resetImages: () => void;
  getImageSrc: (filename: string) => string;
}

const ImageContext = createContext<ImageContextType>({
  customImages: {},
  setCustomImage: () => {},
  resetImages: () => {},
  getImageSrc: (filename) => resolveImagePath(filename),
});

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('agrobrasil_custom_images');
      if (stored) {
        setCustomImages(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setCustomImage = (filename: string, dataUrl: string) => {
    setCustomImages((prev) => {
      const updated = { ...prev, [filename]: dataUrl };
      try {
        localStorage.setItem('agrobrasil_custom_images', JSON.stringify(updated));
      } catch {
        // quota exceeded fallback
      }
      return updated;
    });
  };

  const resetImages = () => {
    try {
      localStorage.removeItem('agrobrasil_custom_images');
    } catch {}
    setCustomImages({});
  };

  const getImageSrc = (filename: string): string => {
    if (customImages[filename]) {
      return customImages[filename];
    }
    return resolveImagePath(filename);
  };

  return (
    <ImageContext.Provider value={{ customImages, setCustomImage, resetImages, getImageSrc }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useAppImages = () => useContext(ImageContext);
