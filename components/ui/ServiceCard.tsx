'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Button } from './Button';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  serviceId: keyof typeof WHATSAPP_MESSAGES;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  serviceId,
  delay = 0,
}) => {
  // Obtener el icono dinámicamente
  const IconComponent = (Icons as any)[icon] || Icons.Brush;

  const handleContactClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES[serviceId]);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-light-darker"
    >
      <div className="flex items-center mb-6">
        <div className="bg-primary/10 p-4 rounded-xl mr-4">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-dark">{title}</h3>
      </div>

      <p className="text-dark-lighter mb-6 text-lg">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Icons.Check className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" />
            <span className="text-dark-light">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={handleContactClick}
        variant="primary"
        className="w-full"
        size="md"
      >
        <Icons.MessageCircle className="w-5 h-5 mr-2" />
        Consultar por {title.split(' ')[0]}
      </Button>
    </motion.div>
  );
};
