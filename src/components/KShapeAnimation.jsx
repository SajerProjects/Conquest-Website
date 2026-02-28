import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KShapeAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // K-shape path data — exponential curves diverging from fork
  const stem = 'M 40,200 L 180,200';
  const ascending = 'M 180,200 C 320,200 460,200 460,20';
  const descending = 'M 180,200 C 320,200 460,200 460,380';

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, delay, ease: 'easeInOut' },
    }),
  };

  return (
    <div ref={ref} className="w-full aspect-[5/4] max-w-[500px] mx-auto">
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="k-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="k-gray" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#555555" />
          </linearGradient>
        </defs>

        {/* Stem line */}
        <motion.path
          d={stem}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        />

        {/* Ascending path */}
        <motion.path
          d={ascending}
          stroke="url(#k-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.4}
        />

        {/* Descending path */}
        <motion.path
          d={descending}
          stroke="url(#k-gray)"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.4}
        />
      </svg>
    </div>
  );
}
