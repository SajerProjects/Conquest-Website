import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';
import Button from './Button';

const AI_LEVELS = [
  'Complete beginner',
  "I've used AI tools",
  "I've built with AI",
  'Advanced / professional',
];

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  aiExperience: '',
  whyJoin: '',
};

function InputField({ label, required, ...props }) {
  return (
    <div>
      <label className="block text-xs text-text-muted tracking-wider uppercase mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full bg-surface border border-border-light rounded-sm px-4 py-3 text-text-primary text-base placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors duration-300"
      />
    </div>
  );
}

function TextAreaField({ label, required, rows = 3, ...props }) {
  return (
    <div>
      <label className="block text-xs text-text-muted tracking-wider uppercase mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <textarea
        {...props}
        required={required}
        rows={rows}
        className="w-full bg-surface border border-border-light rounded-sm px-4 py-3 text-text-primary text-base placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors duration-300 resize-vertical"
      />
    </div>
  );
}

function SelectField({ label, required, options, ...props }) {
  return (
    <div>
      <label className="block text-xs text-text-muted tracking-wider uppercase mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <select
        {...props}
        required={required}
        className="w-full bg-surface border border-border-light rounded-sm px-4 py-3 text-text-primary text-base focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors duration-300 appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 16px center',
        }}
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ApplicationForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — will be connected to a backend later
    console.log('Application submitted:', form);
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted font-mono mb-12">
            05 / Apply
          </p>
        </SectionReveal>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Thank you.
                </h2>
                <p className="text-lg text-text-secondary">
                  We'll be in touch.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SectionReveal delay={0.1}>
                  <h2 id="apply" className="text-3xl md:text-4xl font-bold text-text-primary mb-4 scroll-mt-24">
                    Apply to Conquest
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-12">
                    We review every application. If you're selected, you'll hear
                    from us within 7 days.
                  </p>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <InputField
                        label="First Name"
                        required
                        type="text"
                        value={form.firstName}
                        onChange={update('firstName')}
                        placeholder="Jane"
                      />
                      <InputField
                        label="Last Name"
                        required
                        type="text"
                        value={form.lastName}
                        onChange={update('lastName')}
                        placeholder="Smith"
                      />
                    </div>

                    <InputField
                      label="Email Address"
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@example.com"
                    />

                    <SelectField
                      label="Experience with AI"
                      required
                      value={form.aiExperience}
                      onChange={update('aiExperience')}
                      options={AI_LEVELS}
                    />

                    <TextAreaField
                      label="Why do you want to join Conquest?"
                      required
                      rows={4}
                      value={form.whyJoin}
                      onChange={update('whyJoin')}
                      placeholder="What draws you to this community..."
                    />

                    <div className="pt-4">
                      <Button type="submit" variant="primary" className="w-full sm:w-auto">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </SectionReveal>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
