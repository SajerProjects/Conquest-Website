import SectionReveal from './SectionReveal';

const BLOCKS = [
  {
    num: '01',
    title: 'Apply',
    text: "Submit your application. We review every one. This isn't open enrollment — we're building a room of the right people.",
  },
  {
    num: '02',
    title: 'Discovery',
    text: "If accepted, we sit down with you. An in-depth conversation to understand your goals, skills, ambitions, and the way you think.",
  },
  {
    num: '03',
    title: 'Learn',
    text: 'Structured training that takes you from wherever you are to building real AI-powered tools and systems. Not theory. Execution.',
  },
  {
    num: '04',
    title: 'Build',
    text: "You don't just learn — you ship. Real projects, real applications, real portfolio pieces that prove what you can do.",
  },
  {
    num: '05',
    title: 'Community',
    text: "You're surrounded by people who think like you. Ambitious, curious, building. The network becomes the asset.",
  },
  {
    num: '06',
    title: 'Level Up',
    text: 'As you prove yourself, new doors open. Deeper access, advanced resources, direct mentorship. The deeper you go, the more you earn.',
  },
];

export default function TheProgram() {
  return (
    <section id="program" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            02 / The Program
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16 max-w-lg">
            Built for builders.
          </h2>
        </SectionReveal>

        <div className="space-y-0">
          {BLOCKS.map((block, i) => (
            <SectionReveal key={block.num} delay={0.1 + i * 0.08}>
              <div className="py-8 border-t border-border-light">
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                  <div>
                    <span className="text-xs font-mono text-accent tracking-[0.2em] block mb-1">
                      {block.num}
                    </span>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-base">
                    {block.text}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
          <div className="border-t border-border-light" />
        </div>
      </div>
    </section>
  );
}
