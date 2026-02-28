import SectionReveal from './SectionReveal';

const STEPS = [
  {
    num: '01',
    title: 'Apply',
    text: "Submit your application. We review every one. This isn't open enrollment — we're building a room of the right people.",
  },
  {
    num: '02',
    title: 'Learn & Build',
    text: 'You enter the program and start immediately. Structured training, real projects, direct feedback. You learn AI by using it to ship real things.',
  },
  {
    num: '03',
    title: 'Level Up',
    text: 'As you grow, so does your access. Prove yourself and unlock deeper levels of the community, advanced resources, and direct mentorship opportunities.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            03 / The Process
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16 max-w-md">
            How it works.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step, i) => (
            <SectionReveal key={step.num} delay={0.1 + i * 0.1}>
              <div className="relative">
                <span className="text-xs font-mono text-accent tracking-[0.2em] mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  {step.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
