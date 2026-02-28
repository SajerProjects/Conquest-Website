import { motion } from 'framer-motion';

export default function Button({ children, onClick, href, variant = 'primary', className = '', type = 'button' }) {
  const base = 'inline-block font-medium tracking-wide transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'px-8 py-3.5 bg-accent text-bg text-sm uppercase tracking-widest hover:bg-accent/90 hover:scale-[1.02]',
    secondary:
      'text-text-secondary text-sm tracking-wider hover:text-text-primary',
    outline:
      'px-8 py-3.5 border border-accent text-accent text-sm uppercase tracking-widest hover:bg-accent hover:text-bg hover:scale-[1.02]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
