import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-24 md:py-36">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 tracking-wider uppercase mb-12 inline-block"
              >
                &larr; Back
              </Link>

              <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
                About
              </p>
            </motion.div>

            <div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="w-full aspect-square bg-surface border border-border-light rounded-sm flex items-center justify-center">
                  <span className="text-sm text-text-muted tracking-wider uppercase">
                    Photo
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="pt-2"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  [Your Name]
                </h1>
                <p className="text-sm text-accent tracking-wider uppercase mb-10">
                  Founder, Conquest
                </p>
                <div className="space-y-6 max-w-xl">
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Bio coming soon. This section will include the founder's
                    background, why they built Conquest, and their approach to AI
                    education.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    The founder's story will connect their personal experience with
                    AI to the mission of Conquest — building a community where
                    ambitious people learn by doing, not by watching.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Additional bio content, personal philosophy, background story,
                    and vision for Conquest will go here.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
