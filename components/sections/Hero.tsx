'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MessageCircle, Star, Users } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export const Hero: React.FC = () => {
  const handleCTAClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.general);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-gradient-to-br from-light via-white to-light-dark"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

      {/* Decorative Text Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <span className="text-[20rem] font-black text-dark">Painting</span>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="bg-light-dark/80 backdrop-blur-sm text-dark px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider border border-dark/10">
                Dando Vida a tus Sueños
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark mb-6 leading-tight"
            >
              Pintores
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-dark to-primary relative inline-block">
                Profesionales
                {/* Decorative brush icon */}
                <motion.div
                  initial={{ rotate: 0, x: 0 }}
                  animate={{ rotate: [-5, 5, -5], x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-12 -top-8 w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-10 h-10 text-secondary transform rotate-45"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" />
                  </svg>
                </motion.div>
              </span>
              <br />
              <span className="text-dark-light text-4xl sm:text-5xl">de Oficio</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-dark-lighter mb-8 leading-relaxed max-w-xl"
            >
              Matías y Emiliano traen{' '}
              <span className="font-bold text-secondary">
                más de {BUSINESS_INFO.yearsExperience} años de experiencia familiar
              </span>
              . Transformamos espacios con precisión, pasión y profesionalismo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button onClick={handleCTAClick} variant="secondary" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Presupuesto
              </Button>
              <Button
                onClick={() => {
                  document
                    .getElementById('servicios')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
              >
                Ver Servicios
              </Button>
            </motion.div>

            {/* Stats/Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-8"
            >
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-secondary"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-dark">Excelente</p>
                  <p className="text-dark-lighter text-xs">Calificación 5 Estrellas</p>
                </div>
              </div>

              {/* Customers */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary-dark border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark border-2 border-white"></div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-dark">800+</p>
                  <p className="text-dark-lighter text-xs">Clientes Satisfechos</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/20 to-transparent rounded-[3rem] transform rotate-6"></div>

              {/* Image */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/imagenes/matyemi.png"
                  alt="Matías y Emiliano - Pintores profesionales de oficio"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">3ra Gen.</p>
                    <p className="text-sm text-dark-lighter">Tradición Familiar</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative paint splash */}
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-32 h-32 opacity-50"
              >
                <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary-dark rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
