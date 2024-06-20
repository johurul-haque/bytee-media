import imanGadhzhi from "@/assets/portfolio/cursive-text/iman-gadhzhi.png";
import { CursiveText } from "@/components/cursive-text";

export function LongFormEdits() {
  return (
    <section>
      <h2 className="text-2xl font-medium text-center mt-6">
        Long Form Video Edits
      </h2>

      <CursiveText title="Iman Gadhzhi Style" textImage={imanGadhzhi} />

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5SClNKuZ9-w?si=xCFnauuenzVYkoFO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KWGgABbcYRs?si=iwBle4rj0aSsPWa8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
