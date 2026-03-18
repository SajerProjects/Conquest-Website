import SectionReveal from './SectionReveal';

const TRAITS = [
  '...see what\'s coming and don\'t wait for permission to move',
  '...want to continuously learn and compound growth',
  '...are done consuming and ready to build',
  '...have never fit the default path',
  '...are looking for the room that changes everything',
];

export default function WhoItsFor() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            02 / Who
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 max-w-md">
            Who this is for.
          </h2>
        </SectionReveal>

        <div className="max-w-xl space-y-5 mb-12">
          {TRAITS.map((trait, i) => (
            <SectionReveal key={i} delay={0.1 + i * 0.06}>
              <p className="text-lg text-text-secondary leading-relaxed">
                {trait}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.5}>
          <p className="text-lg text-text-primary font-medium">
            You already know if this is you.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
