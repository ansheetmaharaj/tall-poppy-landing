"use client";

import { motion } from "framer-motion";
import { UserPlus, BookOpen, TrendingUp } from "lucide-react";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import { STEPS } from "@/lib/constants";

const icons = [UserPlus, BookOpen, TrendingUp];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="text-center max-w-[600px] mx-auto mb-16">
        <FadeUp>
          <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
            HOW IT WORKS
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] text-balance">
            From Zero to Trading in 3 Steps
          </h2>
        </FadeUp>
      </div>

      <div className="relative">
        {/* Connecting line (desktop only) */}
        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" as const, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary origin-left"
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {STEPS.map((step, index) => {
            const Icon = icons[index];
            return (
              <FadeUp key={step.number} delay={index * 0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-bg-secondary border-2 border-accent-primary mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div className="text-[0.75rem] text-accent-secondary font-display font-bold mb-2 uppercase tracking-[0.08em]">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-[1.5rem] text-text-primary mb-3 leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] text-text-secondary leading-[1.6] max-w-[300px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      <FadeUp delay={0.6}>
        <div className="text-center mt-14">
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 rounded-full bg-accent-primary text-text-primary font-display font-semibold text-[1rem] hover:bg-accent-primary-hover hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-primary/25 transition-all duration-200"
          >
            Start Your Journey &rarr;
          </a>
        </div>
      </FadeUp>
    </Section>
  );
}
