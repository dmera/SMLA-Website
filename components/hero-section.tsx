"use client"

import { Button } from '@/components/ui/button';
import { useLocale } from '@/components/locale-provider';

export default function HeroSection() {
  const { locale } = useLocale();
  
  const content = {
    es: {
      heading: 'Tu casa en la montaña.',
      subheading: 'Sé dueño de un refugio que protege la vida silvestre y genera un futuro regenerativo.',
      cta: 'Explora las formas de habitar la montaña'
    },
    en: {
      heading: 'Your home in the mountains.',
      subheading: 'Own a refuge that protects wildlife and generates a regenerative future.',
      cta: 'Explore ways to live in the mountains'
    }
  };

      return (
        <section id="hero" data-section="hero" className="relative min-h-[80vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

          {/* Content */}
          <div className="relative z-10 w-full">
        <div className="container h-full py-24 flex items-center">
          <div className="max-w-4xl text-left text-white">
            <h1 data-element="heading" className="text-4xl md:text-6xl font-bold mb-8 md:mb-10">
              {content[locale].heading}
            </h1>
            <p data-element="subheading" className="text-xl md:text-2xl mb-10 md:mb-12 text-gray-200">
              {content[locale].subheading}
            </p>
            <Button data-element="cta" size="lg" className="bg-accent hover:bg-accent/90 text-white dark:text-gray-900">
              {content[locale].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
