import { inter } from "@/lib/fonts";
import { TextGradient } from "@/components/text-gradient";
import { LongFormEdits } from "@/components/layouts/portfolio/long-form-edits";
import { DocumentaryStyle } from "@/components/layouts/portfolio/documentary-style";
import { ShortFormEdits } from "@/components/layouts/portfolio/short-form-edits";
import { ThumbnailDesign } from "@/components/layouts/portfolio/thumbnail-design";

export default function Portfolio() {
  return (
    <main className={`container ${inter.className} py-16`}>
      <TextGradient asChild>
        <h1 className="text-4xl font-semibold text-center">Our Portfolio</h1>
      </TextGradient>

      <LongFormEdits />
      <DocumentaryStyle />
      <ShortFormEdits />
      <ThumbnailDesign />
    </main>
  );
}
