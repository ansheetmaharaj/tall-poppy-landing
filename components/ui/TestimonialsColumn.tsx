"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

export default function TestimonialsColumn({
  testimonials,
  className = "",
  duration = 15,
}: TestimonialsColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const duplicated = [...testimonials, ...testimonials];

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        translateY: "-50%",
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop" as const,
        },
      });
    };
    startAnimation();
  }, [controls, duration]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={columnRef}
        animate={controls}
        className="flex flex-col gap-4"
      >
        {duplicated.map((testimonial, i) => (
          <div
            key={`${testimonial.name}-${i}`}
            className="bg-bg-secondary border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:border-accent-primary/20"
          >
            <p className="text-[0.95rem] text-text-secondary leading-[1.6] mb-4">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent-primary/[0.1] flex items-center justify-center flex-shrink-0">
                <span className="text-[0.8rem] font-semibold text-accent-primary">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-[0.85rem] text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-[0.7rem] text-text-tertiary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
