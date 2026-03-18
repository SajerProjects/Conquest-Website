import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const STEPS = ['Apply', 'Discovery', 'Learn', 'Build', 'Community', 'Level Up'];

export default function TheProgram() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="program" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            04 / The Program
          </p>
        </SectionReveal>

        {/* Desktop — horizontal roadmap */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[6px] left-0 right-0 h-px bg-border-light" />
          <motion.div
            className="absolute top-[6px] left-0 h-px bg-accent/40 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            style={{ width: '100%' }}
          />

          <div className="flex justify-between">
            {STEPS.map((title, i) => {
              const isHovered = hovered === i;
              return (
                <motion.div
                  key={title}
                  className="flex flex-col items-center cursor-pointer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <motion.div className="relative">
                    <motion.div
                      className="absolute -inset-3 rounded-full bg-accent/20"
                      animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.15 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-accent relative z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.12 + 0.1 }}
                      animate={{ scale: isHovered ? 1.5 : 1 }}
                    />
                  </motion.div>
                  <motion.span
                    className="mt-4 text-sm md:text-base font-medium tracking-wide"
                    animate={{ color: isHovered ? '#7B5EA7' : '#F5F5F5' }}
                    transition={{ duration: 0.15 }}
                  >
                    {title}
                  </motion.span>
                  <span className="text-[10px] font-mono text-text-muted tracking-[0.2em] mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical roadmap */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-border-light" />
          <motion.div
            className="absolute left-[5px] top-0 w-px bg-accent/40 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            style={{ height: '100%' }}
          />

          <div className="flex flex-col gap-8">
            {STEPS.map((title, i) => (
              <motion.div
                key={title}
                className="flex items-center gap-6 relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <motion.div
                  className="absolute -left-8 w-3 h-3 rounded-full bg-accent shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.1 }}
                />
                <div>
                  <span className="text-[10px] font-mono text-text-muted tracking-[0.2em]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="ml-3 text-base text-text-primary font-medium tracking-wide">
                    {title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
