"use client";

import Section from "@/components/layout/Section";
import FadeUp from "@/components/motion/FadeUp";
import TestimonialsColumn from "@/components/ui/TestimonialsColumn";
import { TESTIMONIALS } from "@/lib/constants";

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

export default function Testimonials() {
  return (
    <Section id="results" bg="secondary">
      <div className="text-center max-w-[580px] mx-auto mb-12">
        <FadeUp>
          <p className="font-display text-[0.75rem] text-accent-secondary uppercase tracking-[0.1em] font-medium mb-5">
            MEMBER RESULTS
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display font-bold text-h1 text-text-primary leading-[1.1] tracking-[-0.02em] text-balance">
            Don&apos;t Take Our Word For It
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-5 text-[0.95rem] text-text-secondary leading-[1.6]">
            See what our members have to say about Tall Poppy.
          </p>
        </FadeUp>
      </div>

      <div
        className="flex justify-center gap-5 max-h-[740px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </Section>
  );
}
