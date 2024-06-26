import { CursiveText } from "@/components/cursive-text";
import aliAbdal from "@/assets/portfolio/cursive-text/ali-abdal.png";

export function AliAbdalStyle() {
  return (
    <section className="py-10">
      <CursiveText title="Ali Abdal Style" textImage={aliAbdal} />

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_2PeLgT4wiM?si=2dbWqA44pf2F4Hib"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xm94pMGWq3M?si=h_yjF5DkoSt3IELe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
