"use client"

import { FadeInOnScroll } from '@/components/fade-in-on-scroll';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

export default function HotelPage() {
  const { locale } = useLocale();
  
  const heroContent = {
    es: {
      headingLines: [
        'Tu pedazo de montaña.',
        'Genera vida.',
        'E ingresos.'
      ],
      subheading:
        'Sé copropietario de un hotel boutique en los Andes. Disfrútalo cuando quieras y deja que genere ingresos el resto del tiempo. Todo mientras contribuyes a regenerar el bosque nativo.',
      cta: 'Así es cómo funciona'
    },
    en: {
      headingLines: [
        'Your piece of the mountain.',
        'It gives life.',
        'And generates income.'
      ],
      subheading:
        'Become a co-owner of a boutique hotel in the Andes. Enjoy it whenever you want, and let it earn income the rest of the year — all while helping to restore the native forest.',
      cta: 'Here is how it works'
    }
  } as const;

  return (
    <>
      {/* Hero Section */}
      <section id="hero" data-section="hero" className="relative min-h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full">
          <div className="container h-full py-24 flex items-center">
            <div className="max-w-4xl text-left text-white">
          <h1 data-element="heading" className="text-4xl md:text-6xl font-bold mb-8 md:mb-10 leading-tight">
            {heroContent[locale].headingLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p data-element="subheading" className="text-xl md:text-2xl mb-10 md:mb-12 text-gray-200 leading-relaxed">
            {heroContent[locale].subheading}
          </p>
          <Button data-element="cta" size="lg" className="bg-accent hover:bg-accent/90 text-white dark:text-gray-900">
            {heroContent[locale].cta}
          </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-bg">
        <div className="container">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Tu inversión de altura.
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto mb-8">
              Una oportunidad única de ser parte de un proyecto regenerativo mientras generas retornos sostenibles.
            </p>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInOnScroll delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Propiedad real</h3>
                <p className="text-text/80">Titularidad registrada y transferible</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Retorno proyectado</h3>
                <p className="text-text/80">8-12% anual estimado</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Impacto medible</h3>
                <p className="text-text/80">Conservación cuantificable</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">Sin burocracia</h3>
                <p className="text-text/80">Gestión profesional incluida</p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* USP Sections */}
      <section className="py-20 bg-mui-background-paper">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeInOnScroll>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text">
                  Una inversión tan sólida como la montaña.
                </h2>
                <p className="text-text/80 text-lg">
                  Propiedad real en una ubicación privilegiada, con demanda turística sostenible y crecimiento proyectado.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center text-text/60">
                    <div className="text-4xl mb-2">🏔️</div>
                    <p className="text-sm">Ubicación privilegiada</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text">
                  Vive en altura, comparte lo esencial.
                </h2>
                <p className="text-text/80 text-lg">
                  Acceso garantizado a tu refugio cuando lo necesites, con servicios compartidos que maximizan el valor.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center text-text/60">
                    <div className="text-4xl mb-2">🏠</div>
                    <p className="text-sm">Refugio personal</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text">
                  Tu refugio, también un ingreso.
                </h2>
                <p className="text-text/80 text-lg">
                  Cuando no estés, tu propiedad genera ingresos a través de un programa de alquiler gestionado profesionalmente.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center text-text/60">
                    <div className="text-4xl mb-2">💰</div>
                    <p className="text-sm">Generación de ingresos</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text">
                  Invertir en belleza, conservar la vida.
                </h2>
                <p className="text-text/80 text-lg">
                  Cada inversión contribuye directamente a la conservación del ecosistema andino y la regeneración del paisaje.
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center text-text/60">
                    <div className="text-4xl mb-2">🌱</div>
                    <p className="text-sm">Conservación activa</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-bg">
        <div className="container">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Comparación de opciones
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              Descubre por qué nuestra propuesta es única en el mercado.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="bg-mui-background-paper rounded-xl shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white dark:text-gray-900">
                    <tr>
                      <th className="px-6 py-4 text-left">Característica</th>
                      <th className="px-6 py-4 text-center">Hotel Copropiedad</th>
                      <th className="px-6 py-4 text-center">Time Sharing</th>
                      <th className="px-6 py-4 text-center">Vivienda Propia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mui-divider">
                    <tr>
                      <td className="px-6 py-4 font-medium text-text">Propiedad real</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text">Retorno económico</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text">Flexibilidad de uso</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text">Impacto ambiental</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text">Gestión incluida</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                      <td className="px-6 py-4 text-center text-primary">✅</td>
                      <td className="px-6 py-4 text-center text-text/60">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg">
        <div className="container">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre la copropiedad del hotel.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  ¿Cómo se calculan los retornos?
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  Los retornos se basan en la ocupación histórica del hotel, tarifas de mercado y proyecciones de demanda turística sostenible en la región.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  ¿Qué garantías tengo como copropietario?
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  Tienes propiedad real registrada, acceso garantizado según el calendario acordado, y participación en las decisiones de la comunidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  ¿Cómo funciona el sistema de reservas?
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  Cada copropietario tiene días garantizados al año y puede reservar fechas adicionales según disponibilidad, todo gestionado a través de nuestra plataforma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  ¿Qué servicios están incluidos?
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  Mantenimiento, limpieza, gestión de reservas, atención al cliente, marketing y administración general del hotel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
