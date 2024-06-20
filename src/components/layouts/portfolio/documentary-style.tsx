import { CursiveText } from "@/components/cursive-text";
import documentary from "@/assets/portfolio/cursive-text/documentary.png";

export function DocumentaryStyle() {
  return (
    <section className="py-10">
      <CursiveText title="Documentary Style" textImage={documentary} />

      <div className="mt-4 aspect-video max-w-6xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/E45DEPe5RQU?si=y2SNAUINro1TESE-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
