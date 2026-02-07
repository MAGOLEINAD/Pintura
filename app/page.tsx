import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Footer } from '@/components/sections/Footer';
import { BUSINESS_INFO } from '@/lib/constants';

export default function Home() {
  // JSON-LD Schema Markup para SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    description: `Pintores profesionales con más de ${BUSINESS_INFO.yearsExperience} años de experiencia familiar. Especialistas en pintura residencial, comercial, fachadas y murales.`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.jpg`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // TODO: Agregar coordenadas reales
      latitude: '-34.6037',
      longitude: '-58.3816',
    },
    url: process.env.NEXT_PUBLIC_SITE_URL,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '-34.6037',
        longitude: '-58.3816',
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Pintura',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pintura Interior Residencial',
            description:
              'Transformamos tu hogar con acabados impecables. Incluye preparación de paredes, aplicación profesional y limpieza total.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pintura Exterior y Fachadas',
            description:
              'Protegemos y embellecemos tu propiedad. Incluye tratamiento anti-humedad y pinturas resistentes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajos Comerciales',
            description:
              'Soluciones profesionales para tu negocio con mínima interrupción de operaciones.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trabajos Especiales',
            description:
              'Técnicas decorativas y acabados premium. Revestimientos texturados y técnicas venecianas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Murales Personalizados',
            description:
              'Arte personalizado para tus espacios. Diseño 100% personalizado.',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Sections */}
      <Hero />
      <About />
      <BeforeAfter />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
}
