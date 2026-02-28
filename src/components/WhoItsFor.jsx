import SectionReveal from './SectionReveal';

const TRAITS = [
  '...see what\'s coming and refuse to be caught off guard',
  '...want to understand the systems, not just the tools',
  '...are done consuming and ready to build',
  '...know that who you surround yourself with determines where you end up',
  '...are looking for the room they haven\'t found yet',
];

export default function WhoItsFor() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            04 / Who
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
            If you need convincing, it's not for you.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
