"use client";

import { useState } from "react";
import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import Accordion from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" bg="secondary">
      <div className="max-w-text mx-auto">
        <div className="text-center mb-12">
          <FadeUp>
            <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
              FAQ
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] text-balance">
              Frequently Asked Questions
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="border-t border-white/[0.06]">
            {FAQ_ITEMS.map((item, index) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
