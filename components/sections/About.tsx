"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import { ABOUT_CREDENTIALS } from "@/lib/constants";

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Photo placeholder */}
        <FadeUp>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[3/4] rounded-2xl border border-white/[0.04] overflow-hidden max-w-[420px] mx-auto lg:mx-0"
          >
            <Image
              src="/dayaan.jpg"
              alt="Dayaan OnChain"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </motion.div>
        </FadeUp>

        {/* Text content */}
        <div>
          <FadeUp>
            <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
              MEET YOUR MENTOR
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] mb-6">
              Dayaan OnChain
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="space-y-4 mb-8">
              <p className="text-[0.95rem] text-text-secondary leading-[1.65]">
                I started trading crypto over six years ago — not with a finance
                degree or a trust fund, but with curiosity and a stubborn refusal
                to stay broke. I taught myself everything: technical analysis,
                risk management, market psychology.
              </p>
              <p className="text-[0.95rem] text-text-secondary leading-[1.65]">
                I&apos;ve survived three full market cycles. I&apos;ve made great
                trades, and I&apos;ve blown up accounts. The difference is I built
                a system so I don&apos;t repeat those mistakes — and I teach that
                system to others.
              </p>
              <p className="text-[0.95rem] text-text-secondary leading-[1.65]">
                Tall Poppy started when I began sharing my trades with a few
                mates. They started making money. Their mates wanted in. Now
                we&apos;re 100+ strong and growing — a proper community of traders
                who back each other.
              </p>
              <p className="text-[0.95rem] text-text-secondary leading-[1.65]">
                I&apos;m not selling you a dream. I&apos;m inviting you into a
                room full of people who take trading seriously, led by someone who
                puts his own money on the line every single day.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-2.5">
              {ABOUT_CREDENTIALS.map((cred) => (
                <span
                  key={cred}
                  className="px-3.5 py-1.5 rounded-full bg-accent-primary/[0.1] text-accent-primary text-[0.8rem] font-display font-medium border border-accent-primary/[0.15]"
                >
                  {cred}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
