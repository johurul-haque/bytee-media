import Image, { StaticImageData } from "next/image";

export function CursiveText({
  title,
  textImage,
}: {
  title: string;
  textImage: StaticImageData;
}) {
  return (
    <h3 className="mx-auto max-w-fit mt-4">
      <span className="sr-only">{title}</span>
      <Image
        aria-hidden
        src={textImage}
        className="w-80"
        alt=""
        role="presentation"
      />
    </h3>
  );
}
