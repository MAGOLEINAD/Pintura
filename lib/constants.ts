// Configuración del negocio
export const BUSINESS_INFO = {
  name: 'Matías y Emiliano Pintores',
  tagline: 'Pintores Profesionales de Tercera Generación',
  phone: '+54 9 11 6020-0138',
  email: 'contacto@pinturaprofesional.com', // TODO: Reemplazar con email real
  whatsappNumber: '5491160200138', // Número de WhatsApp (sin el + ni espacios)
  coverageArea: 'Buenos Aires y alrededores',
  yearsExperience: 25,
};

// Mensajes predefinidos para WhatsApp según el servicio
export const WHATSAPP_MESSAGES = {
  general: '¡Hola! Me gustaría solicitar un presupuesto.',
  interior: '¡Hola! Me interesa un presupuesto para pintura interior.',
  exterior: '¡Hola! Necesito cotización para pintura exterior/fachada.',
  comercial: '¡Hola! Busco presupuesto para un trabajo comercial.',
  especial: '¡Hola! Me interesan las técnicas especiales de pintura.',
  mural: '¡Hola! Quisiera consultar por un mural personalizado.',
};

// Información de los servicios
export const SERVICES = [
  {
    id: 'interior',
    title: 'Pintura Interior Residencial',
    description: 'Transformamos tu hogar con acabados impecables',
    features: [
      'Preparación profesional de paredes',
      'Aplicación con técnicas de oficio',
      'Limpieza total al finalizar',
      'Garantía de trabajo',
    ],
    icon: 'Home',
  },
  {
    id: 'exterior',
    title: 'Pintura Exterior y Fachadas',
    description: 'Protegemos y embellecemos tu propiedad',
    features: [
      'Tratamiento anti-humedad',
      'Pinturas resistentes a la intemperie',
      'Trabajos en altura certificados',
      'Impermeabilización incluida',
    ],
    icon: 'Building2',
  },
  {
    id: 'comercial',
    title: 'Trabajos Comerciales',
    description: 'Soluciones profesionales para tu negocio',
    features: [
      'Trabajos nocturnos y fines de semana',
      'Cronogramas ajustados a tu operación',
      'Mínima interrupción del negocio',
      'Acabados de alta durabilidad',
    ],
    icon: 'Store',
  },
  {
    id: 'especial',
    title: 'Trabajos Especiales',
    description: 'Técnicas decorativas y acabados premium',
    features: [
      'Revestimientos texturados',
      'Técnicas venecianas',
      'Efectos especiales y decorativos',
      'Acabados de lujo',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'mural',
    title: 'Murales Personalizados',
    description: 'Arte personalizado para tus espacios',
    features: [
      'Diseño 100% personalizado',
      'Murales infantiles',
      'Arte decorativo corporativo',
      'Técnicas artísticas profesionales',
    ],
    icon: 'Palette',
  },
];

// Testimonios (opcional)
export const TESTIMONIALS = [
  {
    name: 'María González',
    text: 'Excelente trabajo. Muy prolijos y atentos a cada detalle. Recomendados 100%.',
    rating: 5,
  },
  {
    name: 'Carlos Fernández',
    text: 'Pintaron mi local comercial en tiempo récord y sin interrumpir el negocio. Profesionales de primera.',
    rating: 5,
  },
  {
    name: 'Laura Martínez',
    text: 'El mural que hicieron en el cuarto de mis hijos quedó hermoso. Superaron mis expectativas.',
    rating: 5,
  },
];

// Galería de imágenes - Murales de M&E Pintores
export const GALLERY_IMAGES = [
  {
    src: '/images/imagenes/murales/mural1.png',
    alt: 'Mural artístico personalizado - M&E Pintores',
    category: 'mural',
  },
  {
    src: '/images/imagenes/murales/mural2.png',
    alt: 'Diseño de mural único - M&E Pintores',
    category: 'mural',
  },
  {
    src: '/images/imagenes/murales/mural3.png',
    alt: 'Arte mural decorativo - M&E Pintores',
    category: 'mural',
  },
  {
    src: '/images/imagenes/murales/mural4.png',
    alt: 'Mural infantil creativo - M&E Pintores',
    category: 'mural',
  },
  {
    src: '/images/imagenes/murales/mural5.png',
    alt: 'Pintura mural artística - M&E Pintores',
    category: 'mural',
  },
];

// Imágenes de antes y después para sección especial
export const BEFORE_AFTER_IMAGES = [
  {
    before: '/images/imagenes/cambioestiloantes1.png',
    after: '/images/imagenes/cambioestilodespues1.png',
    title: 'Transformación de Ambiente',
  },
  {
    before: '/images/imagenes/cambioestiloantes2.png',
    after: '/images/imagenes/cambioestilodespues2.png',
    title: 'Renovación Completa',
  },
  {
    before: '/images/imagenes/cambioestiloantes3.png',
    after: '/images/imagenes/cambioestilodespues3.png',
    title: 'Cambio de Estilo',
  },
];

// SEO Keywords
export const SEO_KEYWORDS = [
  'pintores profesionales',
  'pintura interior',
  'pintura exterior',
  'pintura de fachadas',
  'murales personalizados',
  'pintura comercial',
  'pintores Buenos Aires',
  'presupuesto pintura',
];
