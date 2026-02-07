'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.general);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-dark text-white">
      <Container className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-light-dark mb-4">{BUSINESS_INFO.tagline}</p>
            <p className="text-light-dark">
              Pintores profesionales con más de {BUSINESS_INFO.yearsExperience} años
              de experiencia familiar. Cada proyecto recibe nuestra máxima dedicación
              y compromiso.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <button
                onClick={handlePhoneClick}
                className="flex items-center text-light-dark hover:text-white transition-colors w-full text-left"
              >
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <span>{BUSINESS_INFO.phone}</span>
              </button>

              <div className="flex items-center text-light-dark">
                <MapPin className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                <span>{BUSINESS_INFO.coverageArea}</span>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg transition-colors mt-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Escribinos por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              <a
                href="#inicio"
                className="block text-light-dark hover:text-white transition-colors"
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="block text-light-dark hover:text-white transition-colors"
              >
                Sobre Nosotros
              </a>
              <a
                href="#servicios"
                className="block text-light-dark hover:text-white transition-colors"
              >
                Servicios
              </a>
              <a
                href="#galeria"
                className="block text-light-dark hover:text-white transition-colors"
              >
                Galería
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light-dark text-sm text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.
            </p>
            <p className="text-light-dark text-sm text-center md:text-right">
              Diseñado con dedicación para mostrar nuestro compromiso profesional
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
