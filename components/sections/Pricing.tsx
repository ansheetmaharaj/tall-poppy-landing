"use client";

import { Star } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import { PRICING_TIERS } from "@/lib/constants";

const FilledCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="8" className="fill-accent-primary" />
    <path
      d="M5.5 8.5L7 10L11 6"
      stroke="#0D0F0E"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OutlinedCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.5" className="stroke-text-tertiary" />
    <path
      d="M5.5 8.5L7 10L11 6"
      stroke="#F2EDE6"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Pricing() {
  return (
    <Section id="pricing" bg="secondary">
      <div className="text-center max-w-[600px] mx-auto mb-16">
        <FadeUp>
          <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
            MEMBERSHIP
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] text-balance">
            Choose Your Trading Level
          </h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
        {PRICING_TIERS.map((tier, index) => {
          const isPrimary = tier.accentColor === "primary";

          return (
            <FadeUp key={tier.name} delay={index * 0.2}>
              {/* Outer glassy shell */}
              <div
                className={[
                  "rounded-3xl p-2 h-full flex flex-col",
                  isPrimary
                    ? "bg-bg-secondary/60 backdrop-blur-md border border-white/[0.06] shadow-[0_12px_40px_-15px_rgba(224,62,45,0.15)] ring-1 ring-inset ring-white/[0.04]"
                    : "bg-bg-tertiary/60 backdrop-blur-md border border-white/[0.04] shadow-[0_12px_50px_-15px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.03]",
                ].join(" ")}
              >
                {/* Top section: name, price, CTA */}
                <div
                  className={[
                    "rounded-2xl p-8 mb-2",
                    isPrimary
                      ? "bg-bg-secondary/80 backdrop-blur-sm border border-white/[0.06] ring-1 ring-inset ring-accent-primary/10"
                      : "bg-bg-tertiary/70 backdrop-blur-sm border border-white/[0.05] ring-1 ring-inset ring-white/[0.06]",
                  ].join(" ")}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-[1.6rem] tracking-tight text-text-primary leading-[1.2]">
                        {tier.name}
                      </h3>
                    </div>
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold tracking-[0.02em] backdrop-blur whitespace-nowrap flex-shrink-0",
                        isPrimary
                          ? "border border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                          : "border border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary",
                      ].join(" ")}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <div className="flex items-baseline mb-8">
                    <span className="font-display font-bold text-[3.2rem] tracking-tighter text-text-primary leading-none">
                      {tier.price}
                    </span>
                    <span className="text-text-tertiary text-[1rem] ml-1.5">
                      {tier.period}
                    </span>
                  </div>

                  <a
                    href={tier.ctaHref}
                    className={[
                      "w-full rounded-xl font-display font-semibold text-[1rem] py-4",
                      "flex items-center justify-center gap-2.5",
                      "transition-all duration-200",
                      isPrimary
                        ? "bg-accent-primary text-text-primary hover:opacity-95 shadow-[0_4px_18px_-6px_rgba(224,62,45,0.4)] ring-1 ring-inset ring-accent-primary/20"
                        : "bg-text-primary text-bg-primary hover:opacity-95 shadow-[0_4px_18px_-6px_rgba(242,237,230,0.25)] ring-1 ring-inset ring-white/20",
                    ].join(" ")}
                  >
                    {tier.cta} &rarr;
                  </a>
                </div>

                {/* Bottom section: features */}
                <div
                  className={[
                    "px-6 pb-6 pt-5 flex-1 rounded-2xl",
                    isPrimary
                      ? "bg-bg-secondary/50 backdrop-blur-sm border border-white/[0.04] ring-1 ring-inset ring-white/[0.02]"
                      : "bg-bg-tertiary/50 backdrop-blur-sm border border-white/[0.04] ring-1 ring-inset ring-white/[0.04]",
                  ].join(" ")}
                >
                  <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        {isPrimary ? (
                          <FilledCheckIcon className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <OutlinedCheckIcon className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span
                          className={[
                            "text-[0.85rem] font-medium",
                            isPrimary ? "text-text-secondary" : "text-text-secondary",
                          ].join(" ")}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {tier.rating && (
                    <div className="flex items-center gap-1.5 mt-6 pt-5 border-t border-white/[0.04]">
                      <Star className="w-4 h-4 text-accent-secondary fill-accent-secondary" />
                      <span className="text-[0.8rem] text-text-tertiary">
                        {tier.rating}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>

      <FadeUp delay={0.4}>
        <p className="text-center text-[0.8rem] text-text-tertiary mt-10 max-w-text mx-auto leading-[1.6]">
          Not financial advice. All trading involves risk. Past performance does
          not guarantee future results. Please trade responsibly.
        </p>
      </FadeUp>
    </Section>
  );
}
