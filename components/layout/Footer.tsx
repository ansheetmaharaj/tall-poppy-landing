import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/[0.04] py-16 px-[var(--section-px)]">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent-primary" />
              <span className="font-display font-bold text-[1.1rem] text-text-primary tracking-tight">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-[0.85rem] text-text-tertiary leading-[1.6]">
              The ANZ crypto trading community that refuses to play small.
            </p>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-semibold text-[0.8rem] text-text-primary uppercase tracking-[0.08em] mb-5">
              Community
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-[0.8rem] text-text-primary uppercase tracking-[0.08em] mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-[0.8rem] text-text-primary uppercase tracking-[0.08em] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04]">
          <p className="text-[0.8rem] text-text-tertiary text-center">
            &copy; 2026 {SITE_NAME}. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
