import Image from "next/image";
import { TextGradient } from "@/components/text-gradient";
import zunayed from "@/assets/zunayed-with-bg.jpg";
import { BookACall } from "@/components/book-a-call";

export function WorkingSteps() {
  return (
    <section className="flex max-lg:items-center max-lg:flex-col gap-20 pb-16 justify-center">
      <Image
        src={zunayed}
        className="border-8 border-amber-light max-w-md w-full"
        alt="Picture of Md. Zunayed Howlader"
        width={800}
        height={800}
      />

      <div>
        <h2 className="text-2xl font-semibold max-w-lg">
          We have{" "}
          <TextGradient className="uppercase italic font-black inline-block pr-0.5">
            3 Working steps
          </TextGradient>{" "}
          to organize our business projects.
        </h2>

        <ol className="space-y-4 text-xl font-bold mt-6 uppercase mb-8">
          <li>
            <Marker>1</Marker> Craft & cultivate
          </li>
          <li>
            <Marker>2</Marker> Competitor analysis
          </li>
          <li>
            <Marker>3</Marker> Right editing style
          </li>
        </ol>

        <BookACall className="block max-w-fit max-lg:mx-auto" />
      </div>
    </section>
  );
}

function Marker({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-b from-amber-dark via-amber-light to-amber-medium inline-flex items-center aspect-square px-4 rounded-full font-bold [text-shadow:1px_1px_2px_rgba(23_23_23/0.6)] mr-2">
      {children}
    </span>
  );
}
