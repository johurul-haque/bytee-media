import Image from "next/image";
import banner from "@/assets/banner.png";
import { TextGradient } from "@/components/text-gradient";
import { BookACall } from "@/components/book-a-call";

export function HeroSection() {
  return (
    <section className="flex max-lg:flex-col items-center justify-between lg:h-[clamp(35rem,90svh,45rem)]">
      <div className="mt-20 mb-10 max-lg:text-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl xs:leading-[2.8rem] xs:tracking-wide font-medium">
          Tired of editing?
          <br />
          <TextGradient>Focus on</TextGradient> creating
        </h1>

        <p className="max-w-xs xs:max-w-sm mt-4 mb-6 max-xs:text-sm tracking-wider">
          One Stop Solution for content creators. Say goodbye to average content
          and {"Hello to excellence"}
        </p>

        <BookACall className="max-lg:mx-auto" />
      </div>

      <Image
        src={banner}
        className="max-h-full max-w-fit [mask-image:linear-gradient(to_bottom,#000_75%,transparent)] max-lg:w-full"
        alt=""
        role="presentation"
        width={800}
        height={800}
        quality={100}
      />
    </section>
  );
}
