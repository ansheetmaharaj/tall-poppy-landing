"use client";

import { motion } from "framer-motion";
import { Signal, Users, GraduationCap } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import { SOLUTION_FEATURES } from "@/lib/constants";

const icons = [Signal, Users, GraduationCap];

export default function Solution() {
  return (
    <Section id="community" bg="secondary">
      <div className="text-center max-w-[640px] mx-auto mb-16">
        <FadeUp>
          <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
            THE SOLUTION
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] text-balance">
            A Community That Trades Together, Grows Together
          </h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-10">
          {SOLUTION_FEATURES.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="flex gap-5"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-secondary/[0.12] flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[1.15rem] text-text-primary mb-2 leading-[1.3]">
                    {feature.title}
                  </h3>
                  <p className="text-[0.95rem] text-text-secondary leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative aspect-[4/3] rounded-2xl border border-white/[0.04] overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0D0F0E]/30 pointer-events-none" />
        </motion.div>
      </div>
    </Section>
  );
}
