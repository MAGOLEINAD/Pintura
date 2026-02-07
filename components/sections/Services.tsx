'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES } from '@/lib/constants';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-light">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones profesionales para cada necesidad de pintura"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              serviceId={service.id as any}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿No encontrás lo que buscás?
          </h3>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Consultanos por trabajos especiales o personalizados. Siempre encontramos
            la mejor solución.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                '¡Hola! Tengo una consulta sobre un trabajo personalizado.'
              );
              window.open(
                `https://wa.me/5491XXXXXXXX?text=${message}`,
                '_blank'
              );
            }}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-light transition-colors shadow-lg hover:scale-105 transform duration-200"
          >
            Hacer una Consulta
          </button>
        </div>
      </Container>
    </section>
  );
};
