"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const baseClasses =
  "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 rounded-full";

const variantClasses = {
  primary:
    "bg-accent-primary text-text-primary hover:bg-accent-primary-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/20",
  secondary:
    "bg-bg-tertiary text-text-primary border border-[#ffffff10] hover:border-accent-secondary/30 hover:scale-[1.02]",
  outline:
    "border border-accent-secondary text-accent-secondary hover:bg-accent-secondary/10 hover:scale-[1.02]",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

const sizeClasses = {
  sm: "px-4 py-2 text-caption",
  md: "px-6 py-3 text-body",
  lg: "px-8 py-4 text-body-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
