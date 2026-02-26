"use client";

import { motion } from "framer-motion";
import { UserX, TrendingDown, EyeOff } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/motion/StaggerContainer";
import { PAIN_POINTS } from "@/lib/constants";

const icons = [UserX, TrendingDown, EyeOff];

export default function Problem() {
  return (
    <Section id="problem">
      <div className="text-center max-w-[680px] mx-auto mb-16">
        <FadeUp>
          <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
            THE PROBLEM
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] mb-6 text-balance">
            Most Traders Lose Because They Trade Alone
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-body text-[clamp(1rem,1.15vw,1.1rem)] text-text-secondary leading-[1.65]">
            You&apos;ve probably been there. Anonymous Telegram groups pumping coins
            they&apos;ve already bought. Twitter threads from people who never show
            their losses. Signal services that disappear in a bear market. The
            crypto industry has a trust problem — and it costs traders real money.
          </p>
        </FadeUp>
      </div>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        staggerDelay={0.15}
      >
        {PAIN_POINTS.map((point, index) => {
          const Icon = icons[index];
          return (
            <motion.div key={point.title} variants={staggerItemVariants}>
              <div className="group bg-bg-secondary border border-white/[0.04] rounded-xl p-7 h-full transition-all duration-300 hover:border-accent-primary/20 hover:bg-[#171B19]">
                <div className="w-11 h-11 rounded-lg bg-accent-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-accent-primary/[0.12] transition-colors">
                  <Icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="font-display font-semibold text-[1.15rem] text-text-primary mb-3 leading-[1.3]">
                  {point.title}
                </h3>
                <p className="text-[0.95rem] text-text-secondary leading-[1.6]">
                  {point.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
