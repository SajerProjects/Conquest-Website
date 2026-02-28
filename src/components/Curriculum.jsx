import SectionReveal from './SectionReveal';

const GROUPS = [
  {
    label: 'Thinking',
    topics: [
      {
        title: 'The World',
        desc: 'The systems, incentives, and power structures that drive markets, technology, and opportunity.',
      },
      {
        title: 'AI',
        desc: 'Deep understanding of the most important technology in human history. How it works, where it\'s going, and what it makes possible.',
      },
      {
        title: 'Situational Awareness',
        desc: 'The ability to read what\'s actually happening in a conversation, a market, or a system before anyone has to explain it to you.',
      },
    ],
  },
  {
    label: 'Doing',
    topics: [
      {
        title: 'Building with AI',
        desc: 'Convert first principles knowledge into creative, non-trivial projects. Learn by shipping.',
      },
      {
        title: 'Leverage',
        desc: 'AI is redistributing leverage across every industry. Learn to read the map.',
      },
      {
        title: 'Distribution',
        desc: 'Creation is easy now. Distribution is the skill. Learn to build and scale content that compounds over time.',
      },
    ],
  },
];

export default function Curriculum() {
  let cardIndex = 0;

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            03 / Curriculum
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16 max-w-lg">
            What you'll learn.
          </h2>
        </SectionReveal>

        <div className="space-y-14">
          {GROUPS.map((group, gi) => (
            <div key={group.label}>
              <SectionReveal delay={0.1 + gi * 0.15}>
                <p className="text-xs tracking-[0.25em] uppercase text-accent font-mono mb-6">
                  {group.label}
                </p>
              </SectionReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.topics.map((topic) => {
                  const i = cardIndex++;
                  return (
                    <SectionReveal key={topic.title} delay={0.15 + i * 0.06}>
                      <div className="p-6 border border-border-light rounded-sm hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300 h-full">
                        <h3 className="text-base font-semibold text-text-primary mb-3">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {topic.desc}
                        </p>
                      </div>
                    </SectionReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
