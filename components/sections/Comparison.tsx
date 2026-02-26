"use client";

import { Check, X } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import { COMPARISON } from "@/lib/constants";

export default function Comparison() {
  return (
    <Section>
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <FadeUp>
          <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] text-balance">
            Why Tall Poppy?
          </h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
        {/* With Tall Poppy */}
        <FadeUp delay={0.1}>
          <div className="rounded-2xl bg-bg-secondary border border-[#4CAF50]/20 p-8 h-full">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-7 rounded-full bg-[#4CAF50]/15 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#4CAF50]" />
              </div>
              <h3 className="font-display font-bold text-[1.1rem] text-text-primary uppercase tracking-[0.06em]">
                With Tall Poppy
              </h3>
            </div>
            <ul className="space-y-4">
              {COMPARISON.with.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-text-primary leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Without Tall Poppy */}
        <FadeUp delay={0.2}>
          <div className="rounded-2xl bg-bg-secondary border border-white/[0.04] p-8 h-full opacity-75">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-7 rounded-full bg-[#EF4444]/15 flex items-center justify-center">
                <X className="w-4 h-4 text-[#EF4444]" />
              </div>
              <h3 className="font-display font-bold text-[1.1rem] text-text-tertiary uppercase tracking-[0.06em]">
                Without Tall Poppy
              </h3>
            </div>
            <ul className="space-y-4">
              {COMPARISON.without.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-text-tertiary flex-shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-text-tertiary leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
