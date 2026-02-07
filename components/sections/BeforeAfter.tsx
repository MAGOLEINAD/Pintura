'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BEFORE_AFTER_IMAGES } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % BEFORE_AFTER_IMAGES.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + BEFORE_AFTER_IMAGES.length) % BEFORE_AFTER_IMAGES.length
    );
    setSliderPosition(50);
  };

  const currentImage = BEFORE_AFTER_IMAGES[activeSlide];

  return (
    <section id="antes-despues" className="py-20 bg-gradient-to-br from-light via-white to-light-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <SectionTitle
          title="Antes y Después"
          subtitle="Mirá la transformación que logramos en cada proyecto"
        />

        <div className="max-w-5xl mx-auto">
          {/* Main Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-8"
          >
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-dark mb-8">
              {currentImage.title}
            </h3>

            {/* Image Comparison Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-light-dark">
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <Image
                  src={currentImage.after}
                  alt="Después de la transformación"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg z-20">
                  Después
                </div>
              </div>

              {/* Before Image (Foreground with clip) */}
              <div
                className="absolute inset-0 transition-all duration-100"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={currentImage.before}
                  alt="Antes de la transformación"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
                <div className="absolute top-4 left-4 bg-dark text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg z-20">
                  Antes
                </div>
              </div>

              {/* Slider */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-2xl z-10"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const container = e.currentTarget.parentElement;
                  if (!container) return;

                  const handleMouseMove = (e: MouseEvent) => {
                    const rect = container.getBoundingClientRect();
                    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                    const percent = (x / rect.width) * 100;
                    setSliderPosition(percent);
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };

                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
                onTouchStart={(e) => {
                  const container = e.currentTarget.parentElement;
                  if (!container) return;

                  const handleTouchMove = (e: TouchEvent) => {
                    const rect = container.getBoundingClientRect();
                    const x = Math.max(
                      0,
                      Math.min(e.touches[0].clientX - rect.left, rect.width)
                    );
                    const percent = (x / rect.width) * 100;
                    setSliderPosition(percent);
                  };

                  const handleTouchEnd = () => {
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                  };

                  document.addEventListener('touchmove', handleTouchMove);
                  document.addEventListener('touchend', handleTouchEnd);
                }}
              >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-dark absolute left-1" />
                  <ChevronRight className="w-4 h-4 text-dark absolute right-1" />
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-light hover:bg-light-dark transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-dark" />
              </button>

              <div className="flex gap-2">
                {BEFORE_AFTER_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSlide(index);
                      setSliderPosition(50);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeSlide
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-light-darker hover:bg-primary/50'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-light hover:bg-light-dark transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-dark" />
              </button>
            </div>

            {/* Instruction */}
            <p className="text-center text-dark-lighter text-sm mt-6">
              Arrastrá la línea blanca para comparar antes y después
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-dark mb-6">
              ¿Querés transformar tu espacio? Contactanos para un presupuesto sin cargo.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  '¡Hola! Vi las transformaciones antes/después y me gustaría un presupuesto.'
                );
                window.open(`https://wa.me/5491160200138?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Solicitar Presupuesto Gratis
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
