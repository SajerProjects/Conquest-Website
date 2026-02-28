import SectionReveal from './SectionReveal';

export default function Founder() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            05 / Founder
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          <SectionReveal delay={0.1}>
            <div className="w-full aspect-square bg-surface border border-border-light rounded-sm flex items-center justify-center">
              <span className="text-sm text-text-muted tracking-wider uppercase">
                Photo
              </span>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="pt-2">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                [Your Name]
              </h2>
              <p className="text-sm text-accent tracking-wider uppercase mb-8">
                Founder, Conquest
              </p>
              <div className="space-y-4 max-w-lg">
                <p className="text-text-secondary leading-relaxed">
                  Bio coming soon. This section will include the founder's
                  background, why they built Conquest, and their approach to AI
                  education.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  The founder's story will connect their personal experience with
                  AI to the mission of Conquest — building a community where
                  ambitious people learn by doing, not by watching.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
