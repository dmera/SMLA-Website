// ⚙️ STORYBLOK PROVIDER DESACTIVADO PARA MODO LIVIANO DE DESARROLLO
// Para reactivarlo, descomentar y asegurar que lib/storyblok.ts también esté activo

"use client"

// import { useStoryblokState } from '@storyblok/react';
// import { StoryblokComponent } from '@/lib/storyblok';

interface StoryblokProviderProps {
  children: React.ReactNode;
  story?: any;
}

export function StoryblokProvider({ children, story }: StoryblokProviderProps) {
  // Storyblok desactivado - renderiza contenido local directamente
  return <>{children}</>;

  // CÓDIGO COMENTADO PARA FUTURA REACTIVACIÓN:
  // const storyblokState = useStoryblokState(story);
  // if (storyblokState) {
  //   return <StoryblokComponent blok={storyblokState} />;
  // }
  // return <>{children}</>;
}
