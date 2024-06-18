import { TextGradient } from "@/components/text-gradient";
import { cn } from "@/lib/cn";

export function SectionHeader({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: {
    h2?: string;
    p?: string;
  };
}) {
  return (
    <>
      <TextGradient asChild>
        <h2
          className={cn(
            "sm:text-center text-3xl mb-2 font-medium",
            className?.h2,
          )}
        >
          {title}
        </h2>
      </TextGradient>

      <p
        className={cn(
          "sm:text-center max-w-md sm:mx-auto font-light leading-relaxed",
          className?.p,
        )}
      >
        {description}
      </p>
    </>
  );
}
