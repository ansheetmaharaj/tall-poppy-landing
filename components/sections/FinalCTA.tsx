"use client";

import FadeUp from "@/components/motion/FadeUp";

export default function FinalCTA() {
  return (
    <section className="py-[var(--section-py)] px-[var(--section-px)]">
      <FadeUp>
        <div className="mx-auto max-w-content rounded-2xl bg-gradient-accent p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] mb-5">
              Ready to Stand Tall?
            </h2>
            <p className="text-[clamp(1.05rem,1.3vw,1.2rem)] text-text-primary/80 leading-[1.6] mb-10 max-w-[520px] mx-auto">
              Join 100+ traders who chose to trade different.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 rounded-full bg-text-primary text-bg-primary font-display font-semibold text-[1rem] hover:bg-text-primary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Join Tall Poppy &rarr;
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
