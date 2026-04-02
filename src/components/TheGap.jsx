import SectionReveal from './SectionReveal';
import KShapeAnimation from './KShapeAnimation';

export default function TheGap() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p id="the-gap" className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12 scroll-mt-28">
            01 / The Divide
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <SectionReveal delay={0.1}>
            <div>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
                AI is creating a K-shaped split — one group is using it to
                multiply their leverage, income, and opportunity. The other is
                watching their skills become commoditized in real time.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Most people won't adapt. Not because they can't — because they
                won't make the choices that compound. The few with real agency
                are forming tribes and pulling away fast — and the distance
                is growing every day.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                That environment barely exists. Most AI communities are flooded
                with beginners recycling the same surface-level tactics. No
                filter for quality. No cost of entry that selects for
                seriousness. No room where being a member actually means
                something.
              </p>
              <p className="text-lg text-text-primary leading-relaxed">
                Conquest was built for the people going up.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <KShapeAnimation />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
