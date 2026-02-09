'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.general);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80; // Aproximadamente la altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#antes-despues', label: 'Antes/Después' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white/90 backdrop-blur-md shadow-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group"
          >
            <div className="bg-gradient-to-br from-secondary to-secondary-dark p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark transition-colors">
                M&E Pintores
              </h1>
              <p className="text-xs text-dark-lighter transition-colors">
                Tradición Familiar
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="font-medium text-dark-light hover:text-secondary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-2 font-medium text-dark-light hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
            </a>
            <Button
              onClick={handleWhatsAppClick}
              variant="secondary"
              size="md"
              className="shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Presupuesto Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-dark hover:bg-light transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-dark-light hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-light-darker space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center space-x-2 text-dark-light hover:text-primary"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Presupuesto Gratis
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
