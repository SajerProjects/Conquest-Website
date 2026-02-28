import SectionReveal from './SectionReveal';

const PRINCIPLES = [
  {
    title: 'Build, don\'t just learn',
    text: 'Knowledge without application is entertainment. Everything here leads to output.',
  },
  {
    title: 'Earn your access',
    text: 'The best communities are the ones you have to prove yourself to join. Conquest is selective by design.',
  },
  {
    title: 'Think independently',
    text: 'We teach you to use AI as a tool, not a crutch. Cognitive sovereignty matters.',
  },
  {
    title: 'Understand the real world',
    text: 'We ground everything in how the world actually works — economics, systems, leverage — so you know what\'s coming and how to prepare.',
  },
];

export default function Principles() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            05 / Principles
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16 max-w-md">
            What we believe.
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {PRINCIPLES.map((p, i) => (
            <SectionReveal key={p.title} delay={0.1 + i * 0.08}>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  {p.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
