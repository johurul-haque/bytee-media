import Image from "next/image";
import banner from "@/assets/banner.png";
import { TextGradient } from "@/components/text-gradient";
import { BookACall } from "@/components/book-a-call";

export function HeroSection() {
  return (
    <section className="flex items-center justify-between h-[clamp(35rem,90svh,min(90svh,45rem))]">
      <div>
        <h1 className="text-4xl md:text-5xl leading-[2.8rem] tracking-wide font-medium">
          Tired of editing?
          <br />
          <TextGradient>Focus on</TextGradient> creating
        </h1>

        <p className="max-w-sm mt-4 mb-6 tracking-wider">
          One Stop Solution for content creators. Say goodbye to average content
          and {"Hello to excellence"}
        </p>

        <BookACall />
      </div>

      <Image
        src={banner}
        className="max-h-full max-w-fit [mask-image:linear-gradient(to_bottom,#000_75%,transparent)] max-lg:hidden"
        alt=""
        role="presentation"
        width={800}
        height={800}
        quality={100}
      />
    </section>
  );
}
