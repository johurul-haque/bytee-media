import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";

export function TextGradient({
  children,
  className,
  asChild,
}: {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-b from-amber-dark from-20% via-amber-light via-50% to-amber-medium to-80%",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
