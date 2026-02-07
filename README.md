# 🎨 Sitio Web - Matías y Emiliano Pintores

Sitio web profesional one-page para servicios de pintura, optimizado para SEO y conversión.

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

## 📋 Configuración Inicial

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env.local` y actualiza los valores:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus datos:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.netlify.app
NEXT_PUBLIC_WHATSAPP_NUMBER=5491XXXXXXXX
```

### 3. Actualizar Información del Negocio

Edita el archivo `lib/constants.ts` y actualiza:

- Nombre del negocio
- Teléfono
- Email
- Número de WhatsApp
- Área de cobertura

### 4. Reemplazar Imágenes Placeholder

Las imágenes actualmente son de Unsplash. Para usar tus propias imágenes:

1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en:
   - `components/sections/Hero.tsx`
   - `components/sections/About.tsx`
   - `components/sections/Gallery.tsx`
   - `lib/constants.ts` (array GALLERY_IMAGES)

## 🛠️ Comandos Disponibles

```bash
# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 🌐 Deploy en Netlify

### Método 1: Via Git (Recomendado)

1. Sube tu código a GitHub/GitLab/Bitbucket
2. Conecta tu repositorio en Netlify
3. Configura las variables de entorno en Netlify:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Netlify detectará automáticamente Next.js y hará el deploy

### Método 2: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login en Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 📱 Estructura del Sitio

El sitio está dividido en las siguientes secciones:

1. **Hero** - Presentación principal con CTA
2. **Nosotros** - Historia familiar y valores
3. **Servicios** - 5 servicios principales con CTAs individuales
4. **Galería** - Muestra de trabajos realizados
5. **Footer** - Información de contacto y enlaces

## ✅ SEO Optimizado

El sitio incluye:

- ✅ Metadata completa (Open Graph, Twitter Cards)
- ✅ Sitemap automático (`/sitemap.xml`)
- ✅ Robots.txt dinámico (`/robots.txt`)
- ✅ Schema.org markup (LocalBusiness)
- ✅ Optimización de imágenes (WebP/AVIF)
- ✅ Responsive y mobile-first

## 🎨 Personalización de Colores

Los colores se configuran en `tailwind.config.ts`:

```typescript
colors: {
  primary: '#FF6B35',    // Naranja principal
  secondary: '#FFA726',  // Naranja secundario
  accent: '#4CAF50',     // Verde de acento
  // ...
}
```

## 📞 Widget de WhatsApp

El widget flotante de WhatsApp permite:

- Acceso rápido desde cualquier página
- Mensajes predefinidos por servicio
- Diseño responsive

## 🔧 Troubleshooting

### Error: Imagen no carga
- Verifica que el dominio esté en `next.config.ts` bajo `remotePatterns`
- Para imágenes locales, colócalas en `/public/images/`

### Error en build
- Ejecuta `npm run build` localmente primero
- Verifica que todas las variables de entorno estén configuradas

## 📊 Performance

Target de métricas Lighthouse:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

## 📝 Próximos Pasos Recomendados

1. ✅ Reemplazar imágenes placeholder con fotos reales
2. ✅ Actualizar número de WhatsApp real
3. ✅ Configurar Google Analytics
4. ✅ Registrar en Google Search Console
5. ✅ Crear favicon personalizado
6. ✅ Agregar testimonios reales de clientes

## 🤝 Soporte

Para cualquier duda o modificación, revisa la documentación de:
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Netlify](https://docs.netlify.com/)

---

**¡Listo para pintar el mundo digital!** 🎨✨
