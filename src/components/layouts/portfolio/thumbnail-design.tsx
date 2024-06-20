import { thumbnails } from "@/assets/portfolio/thumbnails";
import Image from "next/image";

export function ThumbnailDesign() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-medium text-center">Thumbnail Design</h2>

      <div className="grid gap-6 sm:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] sm:max-w-6xl mx-auto mt-10">
        {thumbnails.map((thumbnail) => (
          <Image
            key={thumbnail.src}
            src={thumbnail}
            width={1920}
            height={1080}
            quality={100}
            alt=""
            role="presentation"
          />
        ))}
      </div>
    </section>
  );
}
