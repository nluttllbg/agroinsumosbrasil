/**
 * Agro Brasil Insumos Agrícolas Ltda.
 * Site Institucional Oficial
 * Sorriso - Mato Grosso
 */

import { useState } from 'react';
import { ImageProvider } from './context/ImageContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FieldWorkSection } from './components/FieldWorkSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageModal } from './components/ImageModal';
import { PhotoUploadAssistant } from './components/PhotoUploadAssistant';
import { OFFICIAL_PHOTOS, GalleryPhoto } from './constants/company';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const handleOpenPhotoByFilename = (filename: string) => {
    const photo = OFFICIAL_PHOTOS.find((p) => p.filename === filename);
    if (photo) {
      setSelectedPhoto(photo);
    }
  };

  return (
    <ImageProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-[#1B8044] selection:text-white">
        {/* Barra Superior com Endereço e Telefone Direto */}
        <TopBar />

        {/* Cabeçalho Fixo com Logotipo Oficial e Navegação */}
        <Header />

        {/* Conteúdo Principal */}
        <main className="flex-1">
          {/* Banner Principal / Hero */}
          <Hero />

          {/* Seção Institucional: Sobre Nós & Compromisso */}
          <AboutSection onPhotoClick={handleOpenPhotoByFilename} />

          {/* Atuação e Presença no Campo: Cards Técnicos */}
          <FieldWorkSection onPhotoClick={handleOpenPhotoByFilename} />

          {/* Galeria de Fotos Oficiais: Registro em Imagens */}
          <GallerySection onPhotoClick={(photo) => setSelectedPhoto(photo)} />

          {/* Seção de Contato, Endereço e Google Maps */}
          <ContactSection onPhotoClick={handleOpenPhotoByFilename} />
        </main>

        {/* Rodapé Completo */}
        <Footer />

        {/* Botão Flutuante do WhatsApp */}
        <FloatingWhatsApp />

        {/* Modal / Lightbox de Ampliação de Fotografias */}
        <ImageModal
          currentPhoto={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        />

        {/* Assistente de Fotos Oficiais e Substituição */}
        <PhotoUploadAssistant />
      </div>
    </ImageProvider>
  );
}
