import SectionReveal from './SectionReveal';

export default function TheGap() {
  return (
    <section id="the-gap" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            01 / The Gap
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
              The economy is splitting. AI is creating a K-shaped divide — one
              group is using it to multiply their leverage, income, and
              opportunity. The other is watching their skills become commoditized
              in real time.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              The gap between these two groups is accelerating. The people
              pulling ahead are compounding their advantage daily while
              everyone else falls further behind.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              The internet is drowning in AI noise — recycled slop, shallow
              tutorials, and hype disguised as education. No real filter for
              quality. No community selecting for the people who actually want to
              build. No environment where the bar is high enough that being in
              the room means something.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              Conquest exists to make sure you're on the side that's going up.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
