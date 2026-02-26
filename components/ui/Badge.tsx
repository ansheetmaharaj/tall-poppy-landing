interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "red";
  className?: string;
}

const variantClasses = {
  default: "bg-bg-tertiary text-text-secondary border-[#ffffff08]",
  gold: "bg-accent-secondary-muted text-accent-secondary border-accent-secondary/20",
  red: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-caption font-medium border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
