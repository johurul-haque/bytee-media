import Link from "next/link";
import Image from "next/image";
import banner from "@/assets/banner.png";
import { TextGradient } from "@/components/text-gradient";

export function HeroSection() {
  return (
    <section className="flex items-center justify-between h-[clamp(35rem,90svh,min(90svh,45rem))]">
      <div>
        <h1 className="text-5xl leading-[2.8rem] tracking-wide font-medium">
          Tired of editing?
          <br />
          <TextGradient>Focus on</TextGradient> creating
        </h1>

        <p className="max-w-sm my-4 tracking-wider">
          One Stop Solution for content creators. Say goodbye to average content
          and {"Hello to excellence"}
        </p>

        <Link
          href="/"
          className="px-6 py-2 text-lg text-black font-bold bg-gradient-to-b from-amber-dark via-amber-light to-amber-medium block max-w-fit rounded-md"
        >
          Book a call
        </Link>
      </div>

      <Image
        src={banner}
        className="max-h-full max-w-fit [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]"
        alt=""
        role="presentation"
        width={800}
        height={800}
        quality={100}
      />
    </section>
  );
}
