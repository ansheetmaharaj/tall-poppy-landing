"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import Counter from "@/components/ui/Counter";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0D0F0E]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0D0F0E]/70" />
      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-[#0D0F0E]/40" />

      <div className="relative z-10 mx-auto max-w-content px-[var(--section-px)] pt-36 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display font-bold text-hero leading-[1.05] tracking-[-0.03em] mb-8 text-balance bg-gradient-to-r from-text-primary via-accent-primary to-accent-secondary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent"
        >
          Tall Poppy University
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-body text-[clamp(1.05rem,1.3vw,1.2rem)] text-text-secondary leading-[1.6] max-w-[540px] mx-auto mb-12"
        >
          Real signals. Real mentorship. One community. Led by Dayaan OnChain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 rounded-full bg-accent-primary text-text-primary font-display font-semibold text-[1rem] hover:bg-accent-primary-hover hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-primary/25 transition-all duration-200"
          >
            Join Tall Poppy &rarr;
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-6 py-4 text-text-secondary font-display font-medium text-[0.95rem] hover:text-text-primary transition-colors"
          >
            See How It Works &darr;
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-[680px] mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#161A18]/60 backdrop-blur-sm border border-white/[0.04] rounded-xl py-5 px-4 text-center"
            >
              <div className="font-display font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-text-primary leading-none mb-1.5">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-[0.75rem] text-text-tertiary font-medium uppercase tracking-[0.06em]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0D0F0E] pointer-events-none" />
    </section>
  );
}
