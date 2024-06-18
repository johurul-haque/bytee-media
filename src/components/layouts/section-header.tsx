import { TextGradient } from "@/components/text-gradient";

export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <TextGradient asChild>
        <h2 className="sm:text-center text-3xl mb-2 font-medium">{title}</h2>
      </TextGradient>

      <p className="sm:text-center max-w-md sm:mx-auto font-light leading-relaxed">
        {description}
      </p>
    </>
  );
}
