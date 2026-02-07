'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (messageType: keyof typeof WHATSAPP_MESSAGES) => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES[messageType]);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden w-72"
          >
            <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                <span className="font-semibold">Contactanos</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <p className="text-sm text-dark-light mb-3">
                ¿En qué servicio estás interesado?
              </p>

              <button
                onClick={() => handleWhatsAppClick('interior')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-light transition-colors text-sm border border-light-darker"
              >
                🏠 Pintura Interior
              </button>

              <button
                onClick={() => handleWhatsAppClick('exterior')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-light transition-colors text-sm border border-light-darker"
              >
                🏢 Pintura Exterior
              </button>

              <button
                onClick={() => handleWhatsAppClick('comercial')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-light transition-colors text-sm border border-light-darker"
              >
                💼 Trabajo Comercial
              </button>

              <button
                onClick={() => handleWhatsAppClick('especial')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-light transition-colors text-sm border border-light-darker"
              >
                ✨ Técnicas Especiales
              </button>

              <button
                onClick={() => handleWhatsAppClick('mural')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-light transition-colors text-sm border border-light-darker"
              >
                🎨 Murales
              </button>

              <button
                onClick={() => handleWhatsAppClick('general')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-light transition-colors text-sm border border-light-darker font-semibold"
              >
                💬 Consulta General
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
