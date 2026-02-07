'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CheckCircle2, Heart, Target, Shield, Award } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const values = [
  {
    icon: Heart,
    title: 'Pasión por el Oficio',
    description:
      'Crecimos rodeados de brochas y rodillos, la pintura está en nuestra sangre.',
  },
  {
    icon: Target,
    title: 'Atención al Detalle',
    description:
      'Cada rincón, cada terminación, cada pincelada recibe nuestra máxima atención.',
  },
  {
    icon: Shield,
    title: 'Trabajo Garantizado',
    description:
      'Respaldamos cada proyecto con nuestra garantía y compromiso profesional.',
  },
];

const stats = [
  { number: `${BUSINESS_INFO.yearsExperience}+`, label: 'Años de Experiencia' },
  { number: '800+', label: 'Espacios Transformados' },
  { number: '100%', label: 'Satisfacción' },
  { number: '3ra', label: 'Generación Familiar' },
];

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        <SectionTitle
          title="Una Tradición Familiar"
          subtitle="Tres generaciones dedicadas al arte de la pintura profesional"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/imagenes/cambioestilodespues1.png"
                  alt="Trabajo de pintura interior profesional - M&E Pintores"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Two smaller images */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/imagenes/cambioestilodespues2.png"
                  alt="Resultado profesional de pintura - M&E Pintores"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/imagenes/murales/mural1.png"
                  alt="Mural artístico personalizado - M&E Pintores"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-2xl"
            >
              <Award className="w-12 h-12 mb-2" />
              <p className="text-sm font-semibold">Certificados</p>
              <p className="text-xs opacity-90">Profesionales</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Sobre Nosotros
              </span>
            </div>

            <h3 className="text-4xl font-black text-dark mb-6">
              Matías y Emiliano:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Pintores de Oficio
              </span>
            </h3>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-dark-lighter leading-relaxed">
                Somos la{' '}
                <span className="font-bold text-primary">tercera generación</span>{' '}
                de una familia de pintores. Desde chicos, aprendimos el oficio de
                nuestros padres y abuelos, quienes nos enseñaron que la pintura no
                es solo cubrir paredes, sino{' '}
                <span className="font-bold">crear espacios que las personas amen habitar</span>.
              </p>

              <p className="text-lg text-dark-lighter leading-relaxed">
                Con más de {BUSINESS_INFO.yearsExperience} años de experiencia
                familiar, dominamos cada técnica, conocemos cada material y entendemos
                cada detalle que hace la diferencia entre un trabajo común y uno
                excepcional.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              {[
                'Formación desde la infancia en técnicas profesionales',
                'Dominio completo de todas las técnicas de pintura',
                'Uso exclusivo de materiales de primera calidad',
                'Compromiso con plazos y presupuestos acordados',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start bg-light p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-dark-light font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-light via-white to-light-dark shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.number}
              </p>
              <p className="text-dark-lighter font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-white border-2 border-light-darker hover:border-primary hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">{value.title}</h4>
              <p className="text-dark-lighter leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
