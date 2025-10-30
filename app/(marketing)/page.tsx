import HeroSection from '@/components/hero-section';
import { FormatSection } from '@/components/format-section';
import { ArchitectureSection } from '@/components/architecture-section';
import { FAQAccordion } from '@/components/faq-accordion';
import { FadeInOnScroll } from '@/components/fade-in-on-scroll';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FormatSection />
      <ArchitectureSection />
      
      {/* Place Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <FadeInOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Los Andes mágicos, en plena regeneración.
            </h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              Entre bosques nubosos y cielos despejados…
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center text-text/60">
                <div className="text-6xl mb-4">🏔️</div>
                <p className="text-lg">Paisaje de los Andes</p>
                <p className="text-sm">(Imagen placeholder)</p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <FAQAccordion />
    </>
  );
}
