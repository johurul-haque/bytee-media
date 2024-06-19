import { SectionHeader } from "@/components/layouts/section-header";
import experience from "@/assets/experience.png";
import Image from "next/image";

export function WhyUs() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Why Choose Us"
        description="Bytee Media isn't just another editing service. We're a passionate team dedicated to empowering your video content to achieve its full potential."
      />

      <Image
        src={experience}
        className="aspect-video max-w-4xl w-full mx-auto"
        alt=""
        quality={100}
        width={1920}
        height={1080}
        role="presentation"
      />

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto sm:text-lg">
        {getInfo().map((info) => (
          <p
            key={info}
            className="px-8 py-6 rounded-2xl border-4 border-[#F9C662]"
          >
            {info}
          </p>
        ))}
      </div>
    </section>
  );
}

function getInfo() {
  return [
    "Storytelling Savvy: We go beyond basic editing. We understand the power of narrative and use our expertise to craft compelling stories that resonate with your audience",
    "Creative Flair Meets Technical Expertise: We seamlessly blend cutting-edge editing techniques with an artistic eye. This ensures your videos are not only technically flawless but also visually stunning and impactful",
    "Seamless Collaboration: Clear communication is key. We prioritize working closely with you throughout the editing process to ensure your vision is delivered flawlessly",
    "Results You Can Trust: We're committed to your satisfaction. Our team is dedicated to exceeding your expectations and delivering high-quality edits that get results",
  ];
}
