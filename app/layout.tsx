import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Navbar } from '@/components/Navbar';
import { BUSINESS_INFO, SEO_KEYWORDS } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Pintura Profesional Interior y Exterior`,
  description: `${BUSINESS_INFO.name} - Pintores de oficio con más de ${BUSINESS_INFO.yearsExperience} años de experiencia familiar. Especialistas en pintura residencial, comercial, fachadas, murales y técnicas decorativas. Presupuesto sin cargo en ${BUSINESS_INFO.coverageArea}.`,
  keywords: SEO_KEYWORDS,
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'
  ),
  openGraph: {
    title: `${BUSINESS_INFO.tagline}`,
    description: `Tradición familiar en pintura profesional. Más de ${BUSINESS_INFO.yearsExperience} años de experiencia. Trabajos garantizados.`,
    type: 'website',
    locale: 'es_AR',
    siteName: BUSINESS_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: BUSINESS_INFO.tagline,
    description: `Pintores profesionales con ${BUSINESS_INFO.yearsExperience} años de experiencia familiar`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    // TODO: Agregar códigos de verificación cuando estén disponibles
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
