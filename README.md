# SMLA Website - Refugios Regenerativos en los Andes

Un proyecto web completo para SMLA, una empresa que construye refugios regenerativos en los Andes, combinando inversión sostenible con conservación ambiental.

## ⚙️ DEVELOPMENT MODE (LIVIANO)

**Este modo está optimizado para iterar rápidamente en el diseño y contenido.**

- ✅ **Sin Storyblok**: Contenido cargado directamente desde `/locales/es.json`
- ✅ **Sin Auth**: Autenticación desactivada temporalmente
- ✅ **Sin middleware complejo**: Sin detección automática de idioma ni redirecciones
- ✅ **Carga directa**: El sitio arranca en `http://localhost:3000` sin rutas `/es` o `/en`
- ✅ **Modo claro/oscuro**: Funcional con `next-themes`
- ✅ **Estilos completos**: Tailwind + shadcn/ui + tokens CSS activos

### Reactivar funciones completas

Para reactivar las funciones desactivadas:

1. **Middleware i18n**: Descomentar código en `middleware.ts` y configurar `next-intl`
2. **Storyblok**: Descomentar código en `lib/storyblok.ts` y `components/storyblok-provider.tsx`, agregar `STORYBLOK_TOKEN` al `.env`
3. **Auth**: Descomentar código en `lib/auth.ts` y configurar variables de entorno de Google OAuth

### Optimización de desarrollo

Si el build con Turbopack es lento, puedes usar el bundler clásico de Next.js:
```bash
npm run dev:classic  # Usa el bundler clásico (más lento pero más estable)
```

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Internacionalización**: next-intl (ES/EN)
- **Autenticación**: Auth.js (NextAuth) con Google OAuth
- **Base de datos**: PostgreSQL + Prisma ORM
- **CMS**: Storyblok (opcional)
- **Analytics**: Plausible (EU-compliant)
- **Temas**: next-themes (claro/oscuro)

## 📁 Estructura del Proyecto

```
D:\Daniel\proyectos_actuales\SMLA\Website\
├── app/
│   ├── (marketing)/[locale]/     # Páginas públicas con i18n
│   │   ├── layout.tsx            # Layout marketing
│   │   ├── page.tsx              # Home
│   │   └── hotel/page.tsx        # Hotel boutique
│   ├── api/auth/[...nextauth]/   # Auth endpoints
│   ├── globals.css               # Estilos globales + tokens
│   ├── layout.tsx                # Root layout
│   ├── robots.txt                # SEO
│   └── sitemap.ts                # Sitemap dinámico
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── navbar.tsx                # Navegación principal
│   ├── footer.tsx                # Footer
│   ├── language-switcher.tsx      # Selector idioma
│   ├── hero-section.tsx          # Sección hero
│   ├── format-section.tsx        # Formatos de propiedad
│   ├── architecture-section.tsx  # Arquitectura sustentable
│   ├── faq-accordion.tsx         # FAQs
│   ├── fade-in-on-scroll.tsx     # Animación fade-in
│   ├── parallax-hero.tsx         # Parallax suave
│   ├── theme-provider.tsx        # Provider temas
│   ├── plausible-provider.tsx    # Analytics
│   └── storyblok-provider.tsx   # CMS provider
├── lib/
│   ├── utils.ts                  # Utilidades (cn, etc.)
│   ├── prisma.ts                 # Cliente Prisma
│   ├── auth.ts                   # Configuración Auth.js
│   └── storyblok.ts              # Configuración Storyblok
├── locales/
│   ├── es.json                   # Contenido español
│   └── en.json                   # Contenido inglés
├── prisma/
│   ├── schema.prisma             # Esquema base de datos
│   └── seed.ts                   # Datos iniciales
├── middleware.ts                 # i18n + auth middleware
├── i18n.ts                       # Configuración next-intl
├── tailwind.config.ts            # Configuración Tailwind
├── .env.example                  # Variables de entorno
└── README.md                     # Este archivo
```

## 🎨 Identidad Visual

### Tokens de Color
```css
:root {
  --color-primary: 34 94 78;    /* verde bosque */
  --color-accent: 184 121 75;   /* cobre suave */
  --color-bg: 244 240 236;      /* beige claro */
  --color-text: 92 92 92;       /* gris piedra */
  --radius: 1rem;
  --shadow-soft: 0 8px 24px rgba(0,0,0,.08);
}
```

### Tipografía
- **Fuente principal**: Inter
- **Estilo**: Sobrio, natural (Patagonia ↔ Airbnb)
- **Voz**: "Esperanza práctica"

## 🌐 Internacionalización

### Detección Automática de Idioma
- **ES**: Si `Accept-Language` contiene "es" O país en lista hispanohablante
- **EN**: Resto de casos
- **Países ES**: ES, MX, AR, CO, CL, PE, UY, PY, BO, EC, VE, GT, SV, HN, NI, CR, PA, DO, PR, CU

### URLs
- `/es/` - Contenido en español
- `/en/` - Contenido en inglés
- Hreflang automático para SEO

## 🔐 Autenticación

### Proveedores
- **Google OAuth**: Configurado con Prisma adapter
- **Email/Password**: Con hashing bcryptjs
- **Roles**: VISITOR, GUEST, COOWNER, ADMIN

### Rutas Protegidas
- `/dashboard` - Requiere autenticación
- Middleware automático para protección

## 🗄️ Base de Datos

### Modelos Prisma
- **User**: Usuarios con roles
- **Account/Session**: Auth.js
- **Profile**: Perfiles extendidos
- **ImpactMetric**: Métricas de impacto ambiental

### Migración
```bash
npm run db:migrate    # Crear migración
npm run db:seed       # Poblar datos iniciales
npm run db:studio     # Abrir Prisma Studio
```

## 📊 CMS y Contenido

### Storyblok (Opcional)
- **Modo dual**: Local (locales/) o CMS
- **Preview**: `?preview=1` para modo preview
- **Componentes mapeados**: hero, section, material_card, faq, comparison_table

### Contenido Local
- `/locales/es.json` - Contenido español completo
- `/locales/en.json` - Contenido inglés completo
- Incluye: Home, Hotel, FAQs, navegación, footer

## 📈 Analytics

### Plausible
- **EU-compliant**: Sin cookies por defecto
- **Configuración**: `PLAUSIBLE_DOMAIN` en .env
- **Desactivado**: Si no se define el dominio

## 🎬 Animaciones

### Framer Motion
- **FadeInOnScroll**: Animación suave al hacer scroll
- **ParallaxHero**: Parallax sutil en hero sections
- **Reduced Motion**: Respeta `prefers-reduced-motion`
- **Performance**: Sin afectar CLS

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- PostgreSQL (Neon/Supabase recomendado)
- Cuenta Google (para OAuth)

### Instalación
```bash
# Clonar y navegar
cd D:\Daniel\proyectos_actuales\SMLA\Website

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# Configurar base de datos
npm run db:migrate
npm run db:seed

# Desarrollo
npm run dev
```

### Variables de Entorno Requeridas
```env
# Base de datos
DATABASE_URL="postgresql://user:pass@host:port/db"

# Auth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Opcional
STORYBLOK_TOKEN=""                    # Para usar CMS
NEXT_PUBLIC_SITE_URL="https://..."    # URL producción
PLAUSIBLE_DOMAIN=""                   # Para analytics
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor desarrollo
npm run build            # Build producción
npm run start            # Servidor producción

# Calidad de código
npm run lint             # ESLint
npm run format           # Prettier
npm run format:check     # Verificar formato

# Base de datos
npm run db:migrate       # Migración
npm run db:seed          # Datos iniciales
npm run db:generate       # Generar cliente Prisma
npm run db:studio         # Prisma Studio

# UI
npm run shadcn:add       # Añadir componente shadcn/ui
```

## 🌍 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio
2. Configurar variables de entorno
3. Deploy automático

### Variables de Producción
- `DATABASE_URL`: URL PostgreSQL producción
- `NEXTAUTH_SECRET`: Secret seguro
- `NEXTAUTH_URL`: URL dominio producción
- `GOOGLE_CLIENT_ID/SECRET`: Credenciales OAuth
- `NEXT_PUBLIC_SITE_URL`: URL sitio
- `PLAUSIBLE_DOMAIN`: Dominio analytics (opcional)

## 🔧 Configuración Storyblok

### Esquema Sugerido
```json
{
  "hero": {
    "heading": "text",
    "subheading": "textarea",
    "cta": "text",
    "background_image": "asset"
  },
  "section": {
    "heading": "text",
    "subheading": "textarea",
    "content": "richtext"
  },
  "material_card": {
    "title": "text",
    "bullets": "bloks",
    "description": "textarea"
  },
  "faq": {
    "question": "text",
    "answer": "textarea"
  },
  "comparison_table": {
    "title": "text",
    "rows": "bloks"
  }
}
```

### Activar Preview
1. Añadir `STORYBLOK_TOKEN` al .env
2. Visitar cualquier página con `?preview=1`
3. Contenido se carga desde Storyblok

## 🎯 Páginas Implementadas

### Públicas
- **Home** (`/`): Hero, formatos, arquitectura, lugar, FAQs
- **Hotel** (`/hotel`): Hero, cómo funciona, USP, comparación, FAQs
- **Stubs**: `/contacto`, `/propiedades`, `/conservacion`

### Protegidas
- **Dashboard** (`/dashboard`): Layout básico (requiere auth)

## 🎨 Componentes UI

### shadcn/ui Incluidos
- **Button**: Variantes y tamaños
- **Accordion**: FAQs accesibles
- **Theme Provider**: Claro/oscuro

### Componentes Custom
- **NavBar**: Navegación sticky con CTA
- **Footer**: Claim + legales + redes
- **LanguageSwitcher**: ES/EN toggle
- **HeroSection**: Con parallax
- **FormatSection**: Dos opciones de propiedad
- **ArchitectureSection**: Materiales sustentables
- **FAQAccordion**: Preguntas frecuentes

## 📱 Responsive Design

- **Mobile-first**: Diseño adaptable
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Navegación**: Hamburger menu móvil
- **Imágenes**: next/image optimizado

## ♿ Accesibilidad

- **ARIA**: Roles y labels correctos
- **Contraste**: Cumple WCAG AA
- **Focus**: Visible y navegable
- **Accordion**: Accesible con teclado
- **Alt text**: Descriptivo en imágenes

## 🔍 SEO

- **Metadata**: Completo por página
- **Hreflang**: ES/EN automático
- **Sitemap**: Dinámico
- **Robots.txt**: Configurado
- **JSON-LD**: Schema.org (Organization, WebSite, FAQPage)

## 🚨 Troubleshooting

### Errores Comunes
1. **Prisma**: Ejecutar `npm run db:generate` después de cambios schema
2. **Auth**: Verificar variables de entorno Google OAuth
3. **i18n**: Verificar que middleware.ts esté en root
4. **Storyblok**: Token vacío usa contenido local automáticamente

### Logs Útiles
```bash
# Ver logs detallados
DEBUG=* npm run dev

# Verificar build
npm run build
```

## 📞 Soporte

Para dudas sobre implementación o configuración, revisar:
1. Este README
2. Logs de consola
3. Documentación Next.js 14
4. Documentación next-intl
5. Documentación Auth.js

---

**SMLA** - Construimos refugios. Regeneramos montañas. 🏔️
