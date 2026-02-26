import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-bg-secondary border border-[#ffffff08] rounded-lg p-6 ${
        hover
          ? "transition-all duration-300 hover:border-accent-primary/20"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
