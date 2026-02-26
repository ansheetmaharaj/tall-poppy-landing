import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "primary" | "secondary" | "tertiary";
}

const bgClasses = {
  primary: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  tertiary: "bg-bg-tertiary",
};

export default function Section({
  children,
  id,
  className = "",
  bg = "primary",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgClasses[bg]} py-[var(--section-py)] px-[var(--section-px)] ${className}`}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
