import { SectionHeader } from "@/components/layouts/section-header";
import {
  ads,
  headVideo,
  microphone,
  shortVideo,
  vlog,
  vsl,
} from "@/assets/services";
import Image from "next/image";

export function OurServices() {
  return (
    <section id="services" className="py-16">
      <SectionHeader
        title="Our Services"
        description="From Raw Footage to Ranking Rocket: Your One-Stop Shop for Video Editing Magic"
      />

      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6 max-w-7xl max-sm:max-w-md mx-auto mt-10">
        {getServices().map((service) => (
          <article
            className="rounded-lg p-6 xl:p-8 bg-white text-black overflow-hidden"
            key={service.title}
          >
            <Image
              src={service.icon}
              className="size-48 -ml-14 -mt-14 -mb-8"
              alt=""
              role="presentation"
              width={400}
              height={400}
            />
            <h3 className="font-bold text-lg md:text-xl mb-2">
              {service.title}
            </h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function getServices() {
  return [
    {
      title: "Video Sales Letter (VSL)",
      description:
        "Craft persuasive video sales letters that convert viewers into customers. Our team will edit your footage to seamlessly integrate a captivating story with a clear call to action, maximizing your return on investment.",
      icon: vsl,
    },
    {
      title: "Vlogs Edit",
      description:
        "Turn your everyday moments into engaging vlogs. We'll handle all the editing magic, including intros, outros, B-roll cuts, and dynamic transitions, so you can focus on creating captivating content for your audience",
      icon: vlog,
    },
    {
      title: "Talking Head Videos",
      description:
        "We'll transform your talking head videos into polished presentations. Our editing expertise will remove distracting pauses, enhance your message with graphics and overlays, and ensure a professional and engaging delivery.",
      icon: headVideo,
    },
    {
      title: "Short Form Contents",
      description:
        "Bytee Media specializes in crafting captivating short-form edits perfect for capturing viewers" +
        " on social media platforms like TikTok and Instagram Reels. We'll utilize dynamic cuts, trending audio, and eye-catching effects to make your content stand out in the feed.",
      icon: shortVideo,
    },
    {
      title: "Podcast Edit",
      description:
        "We'll handle everything from removing unwanted background noise and awkward pauses to integrating intro/outro segments, background music, and sound effects, resulting in a crisp and engaging listening experience for your audience.",
      icon: microphone,
    },
    {
      title: "Social Media Ads",
      description:
        "Bytee Media can transform your video content into high-converting social media ads. We'll create short, impactful edits with strategic messaging to grab attention, build brand awareness, and drive engagement on your social media platforms.",
      icon: ads,
    },
  ];
}
