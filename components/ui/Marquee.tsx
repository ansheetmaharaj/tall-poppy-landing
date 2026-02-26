"use client";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden relative group">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center px-8 py-4"
          >
            <span className="text-accent-primary text-2xl mr-3">&ldquo;</span>
            <span className="text-body text-text-secondary whitespace-nowrap">
              {item}
            </span>
            <span className="text-accent-primary text-2xl ml-1">&rdquo;</span>
          </div>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />
    </div>
  );
}
