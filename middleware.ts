// ⚙️ MIDDLEWARE DESACTIVADO PARA MODO LIVIANO DE DESARROLLO
// Para reactivarlo, descomentar el código y configurar next-intl correctamente
// Esto elimina detección de idioma y redirecciones, permitiendo carga directa en /

export const config = { matcher: [] };

export default function middleware() {
  // Middleware desactivado - carga directa en / sin redirecciones
}

// CÓDIGO COMENTADO PARA FUTURA REACTIVACIÓN:
// import createMiddleware from 'next-intl/middleware';
// import { locales, defaultLocale } from './i18n';
// 
// export default createMiddleware({
//   locales,
//   defaultLocale,
//   localeDetection: true,
// });
// 
// export const config = {
//   matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
// };
