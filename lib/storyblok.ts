// ⚙️ STORYBLOK DESACTIVADO PARA MODO LIVIANO DE DESARROLLO
// Para reactivarlo, descomentar y configurar STORYBLOK_TOKEN en .env

// import { storyblokInit, apiPlugin } from '@storyblok/react';
// import { StoryblokComponent } from '@storyblok/react';

// Initialize Storyblok
// storyblokInit({
//   accessToken: process.env.STORYBLOK_TOKEN,
//   use: [apiPlugin],
//   components: {
//     hero: StoryblokComponent,
//     section: StoryblokComponent,
//     material_card: StoryblokComponent,
//     faq: StoryblokComponent,
//     comparison_table: StoryblokComponent,
//   },
// });

// export { StoryblokComponent };

// MOCK PARA DESARROLLO
export const StoryblokComponent = ({ blok }: { blok: any }) => null;
