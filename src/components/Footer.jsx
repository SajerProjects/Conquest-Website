const SOCIAL_LINKS = [
  { label: 'X', href: 'https://x.com', ariaLabel: 'X (Twitter)' },
  { label: 'LinkedIn', href: 'https://linkedin.com', ariaLabel: 'LinkedIn' },
  { label: 'YouTube', href: 'https://youtube.com', ariaLabel: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Conquest
            </p>
            <p className="text-xs text-text-muted">
              &copy; 2026 Conquest. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@joinconquest.com"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              hello@joinconquest.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
