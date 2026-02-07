'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GALLERY_IMAGES } from '@/lib/constants';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Galería de Murales"
          subtitle="Arte personalizado que transforma tus espacios"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={GALLERY_IMAGES[selectedImage].src}
                  alt={GALLERY_IMAGES[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-lg font-semibold">
                  {GALLERY_IMAGES[selectedImage].alt}
                </p>
                <p className="text-sm text-white/70">
                  {selectedImage + 1} de {GALLERY_IMAGES.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
};
