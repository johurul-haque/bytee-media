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
      href="https://calendly.com/byteemedia-hunv/30min?month=2024-06"
      className={cn(
        "px-5 xs:px-6 py-1.5 xs:py-2 xs:text-lg text-black font-bold bg-gradient-to-b from-amber-dark via-amber-light" +
          " to-amber-medium" +
          " block max-w-fit rounded-md max-sm:truncate",
        className,
      )}
    >
      {children || "Book a call"}
    </Link>
  );
}
