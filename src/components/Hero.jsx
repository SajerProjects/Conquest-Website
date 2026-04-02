import { motion } from 'framer-motion';
import Button from './Button';
import NeuralNetwork from './NeuralNetwork';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 120;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Bottom border line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />
      </div>

      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,245,245,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-center">
          {/* Left — Copy */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-text-primary mb-6 uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                There is No Demand
              </motion.span>
              <motion.span
                className="block overflow-hidden text-text-secondary"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                for the Average.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mb-10"
            >
              The people who will define what comes next are already in
              motion. This is where they converge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button
                onClick={() => scrollToSection('apply')}
                variant="primary"
              >
                Apply Now
              </Button>
              <Button
                onClick={() => scrollToSection('the-gap')}
                variant="secondary"
              >
                Learn more ↓
              </Button>
            </motion.div>
          </div>

          {/* Right — Neural Network Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.2, ease: 'easeOut' }}
            className="h-[280px] sm:h-[360px] lg:h-[480px]"
          >
            <NeuralNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
