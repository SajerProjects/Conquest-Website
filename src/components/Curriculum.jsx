import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const GROUPS = [
  {
    label: 'Thinking',
    topics: ['The World', 'AI', 'Situational Awareness'],
  },
  {
    label: 'Doing',
    topics: ['Building', 'Leverage', 'Distribution'],
  },
];

export default function Curriculum() {
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

        <div className="space-y-10">
          {GROUPS.map((group, gi) => (
            <div key={group.label}>
              <SectionReveal delay={0.1 + gi * 0.3}>
                <p className="text-base tracking-[0.2em] uppercase text-accent font-mono mb-4">
                  {group.label}
                </p>
              </SectionReveal>
              <ul className="space-y-2">
                {group.topics.map((topic, ti) => (
                  <motion.li
                    key={topic}
                    className="text-lg text-text-secondary font-medium flex items-center gap-3 cursor-default"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: gi * 0.3 + 0.15 + ti * 0.1 }}
                    whileHover={{ x: 6, color: '#F5F5F5', transition: { duration: 0.15 } }}
                  >
                    <span className="text-accent text-sm">&#8226;</span>
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
