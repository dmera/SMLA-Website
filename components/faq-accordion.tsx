"use client"

import { FadeInOnScroll } from '@/components/fade-in-on-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQAccordion() {
  const faqs = [
    {
      question: "¿Qué es la copropiedad con retorno?",
      answer: "Es una forma de propiedad real donde compartes la titularidad de un refugio y recibes ingresos cuando no lo usas, mientras contribuyes a la conservación del ecosistema."
    },
    {
      question: "¿Cómo funciona el sistema de retornos?",
      answer: "Los ingresos provienen del alquiler del refugio cuando no lo usas. Estimamos retornos del 8-12% anual basados en la demanda turística sostenible de la zona."
    },
    {
      question: "¿Qué garantías tengo como propietario?",
      answer: "Tienes propiedad real registrada, acceso garantizado a tu refugio según el calendario acordado, y participación en las decisiones de la comunidad."
    },
    {
      question: "¿Cómo contribuyo a la conservación?",
      answer: "Cada propiedad incluye un plan de restauración ecológica, monitoreo de especies, y prácticas regenerativas que revierten el impacto ambiental."
    },
    {
      question: "¿Qué servicios están incluidos?",
      answer: "Mantenimiento, limpieza, gestión de reservas, asesoría ambiental, y acceso a la comunidad regenerativa de propietarios."
    }
  ];

  return (
    <section id="faq" data-section="faq" className="py-20 bg-bg">
      <div className="container">
        <FadeInOnScroll className="text-center mb-16">
          <h2 data-element="heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros refugios regenerativos.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <Accordion data-component="accordion" type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-text hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
