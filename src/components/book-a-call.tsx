import Link from "next/link";
import { cn } from "@/lib/cn";

export function BookACall({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "px-6 py-2 text-lg text-black font-bold bg-gradient-to-b from-amber-dark via-amber-light" +
          " to-amber-medium block max-w-fit rounded-md",
        className,
      )}
    >
      {children || "Book a call"}
    </Link>
  );
}
