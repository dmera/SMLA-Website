"use client"

import { FadeInOnScroll } from '@/components/fade-in-on-scroll';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function FormatSection() {
  return (
    <section id="formats" data-section="formats" className="py-20 bg-bg">
      <div className="container">
        <FadeInOnScroll className="text-center mb-16">
          <h2 data-element="heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Dos formas de habitar la montaña.
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Elige cómo quieres ser parte de este proyecto que cuida y regenera los Andes.
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Option 1 */}
          <FadeInOnScroll delay={0.2}>
            <div data-component="format-card" className="bg-mui-background-paper rounded-xl p-8 shadow-soft">
              <h3 data-element="card-title" className="text-2xl font-bold text-primary mb-4">
                Copropiedad con retorno
              </h3>
              <p className="text-text mb-6">
                Propiedad real con retorno estimado y uso flexible.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Propiedad real registrada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Retorno estimado del 8-12% anual</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Uso flexible durante el año</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Asesoría ambiental incluida</span>
                </li>
              </ul>

              <Button data-element="cta" className="w-full bg-primary hover:bg-primary/90 text-white dark:text-gray-900">
                Descubre cómo funciona
              </Button>
            </div>
          </FadeInOnScroll>

          {/* Option 2 */}
          <FadeInOnScroll delay={0.4}>
            <div data-component="format-card" className="bg-mui-background-paper rounded-xl p-8 shadow-soft">
              <h3 data-element="card-title" className="text-2xl font-bold text-primary mb-4">
                Propiedad exclusiva
              </h3>
              <p className="text-text mb-6">
                Tu refugio personal en la montaña.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Uso total y exclusivo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Asesoría en agua y energía</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Comunidad regenerativa</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text">Acceso a servicios premium</span>
                </li>
              </ul>

              <Button data-element="cta" className="w-full bg-primary hover:bg-primary/90 text-white dark:text-gray-900">
                Explora las residencias
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
