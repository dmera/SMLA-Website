"use client"

import { FadeInOnScroll } from '@/components/fade-in-on-scroll';
import { Check } from 'lucide-react';

export function MaterialCard({ 
  title, 
  bullets, 
  description 
}: { 
  title: string; 
  bullets: string[]; 
  description: string; 
}) {
  return (
    <div data-component="material-card" className="bg-mui-background-paper rounded-xl p-8 shadow-soft h-full">
      <h3 data-element="card-title" className="text-xl font-bold text-primary mb-4">{title}</h3>
      
      <ul className="space-y-3 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-text">{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="text-text/80 italic">{description}</p>
    </div>
  );
}

export function ArchitectureSection() {
  const materials = [
    {
      title: "Madera laminada",
      bullets: [
        "Procedente de bosques certificados",
        "Resistente a la humedad",
        "Aislamiento térmico natural"
      ],
      description: "Conectamos con la tradición constructiva local."
    },
    {
      title: "Roca basáltica del sitio",
      bullets: [
        "Extraída responsablemente",
        "Durabilidad milenaria",
        "Integración paisajística"
      ],
      description: "La montaña misma forma parte de tu hogar."
    },
    {
      title: "Paisajismo regenerativo",
      bullets: [
        "Restauración de ecosistemas",
        "Especies nativas prioritarias",
        "Captura de carbono"
      ],
      description: "Cada jardín es un paso hacia la regeneración."
    }
  ];

  return (
    <section id="architecture" data-section="architecture" className="py-20 bg-mui-background-paper">
      <div className="container">
        <FadeInOnScroll className="text-center mb-16">
          <h2 data-element="heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Arquitectura sustentable en armonía con la montaña.
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Cada material cuenta una historia…
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <FadeInOnScroll key={index} delay={index * 0.2}>
              <MaterialCard
                title={material.title}
                bullets={material.bullets}
                description={material.description}
              />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
