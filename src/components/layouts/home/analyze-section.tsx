import { TextGradient } from "@/components/text-gradient";
import comment from "@/assets/comment.png";
import Image from "next/image";

export function AnalyzeSection() {
  return (
    <section className="py-14">
      <h2 className="text-center text-3xl mb-2 font-medium">
        <TextGradient>Analyze now</TextGradient>
      </h2>
      <p className="text-center max-w-md mx-auto font-light leading-relaxed">
        What if there was a team who spoke fluent <em>{'"algorithm"'}</em> and
        understood your creative vision too?
      </p>

      <div className="py-16 grid md:grid-cols-2 max-md:justify-items-center items-center gap-8">
        <div className="space-y-5">
          <p className="text-center">
            <span className="tracking-wide block mb-2 text-neutral-400">
              Imagine getting comments like this..
            </span>
            <TextGradient className="uppercase font-black text-4xl">
              Every single day
            </TextGradient>
          </p>

          <Image
            src={comment}
            className="border-8 border-amber-light"
            alt="A youtube comment engaging with the video by appreciating about the content."
            width={800}
            height={450}
          />
        </div>
        <p className="max-w-lg leading-relaxed tracking-wide">
          Feeling lost in the labyrinth of YouTube algorithms? You’re not alone.
          With only 7.6% of channels exceeding 1,000 subscribers,  navigating
          the platform’s success formula can be a daunting task. But what if
          there was a team who spoke fluent <em>{'"algorithm"'}</em> and
          understood your creative vision too?
        </p>
      </div>
    </section>
  );
}
