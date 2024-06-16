import { cn } from "@/lib/cn";

export function TextGradient({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-b from-amber-dark from-20% via-amber-light via-50% to-amber-medium to-80%",
        className,
      )}
    >
      {children}
    </span>
  );
}
