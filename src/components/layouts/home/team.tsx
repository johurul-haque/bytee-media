import { ayanJoy, zunayed } from "@/assets/team";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { SectionHeader } from "@/components/layouts/section-header";
import { SocialLinks } from "@/components/social-links";

const MEMBERS = [
  {
    name: "Ayan Joy",
    role: "Founder & CEO",
    image: ayanJoy,
    social: {
      facebook: "",
      instagram: "",
    },
  },
  {
    name: "Md. Zunayed Howlader",
    role: "Co-Founder",
    image: zunayed,
    social: {
      facebook: "",
      instagram: "",
    },
  },
];

export function Team() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Meet the team"
        description="We're video enthusiasts, not just editors. We strategize, tell stories, and geek out on marketing to help you win with video"
      />

      <div className="flex max-sm:flex-col max-sm:items-center justify-center gap-6 mt-10">
        {MEMBERS.map((member) => (
          <figure key={member.social.facebook} className="max-w-sm">
            <Image
              src={member.image}
              className="border-4 border-amber-light"
              alt={`Picture of ${member.name}`}
              width={800}
              height={800}
              quality={100}
            />

            <figcaption className="text-center mt-4">
              <h3 className="text-sm">{member.role}</h3>
              <div className="text-xl font-medium mb-3">{member.name}</div>

              <dl className="flex gap-2 justify-center">
                <dt className="sr-only">Facebook handle</dt>
                <dd>
                  <SocialLinks href="https://www.facebook.com">
                    <FacebookIcon strokeWidth={1.2} size={16} />
                  </SocialLinks>
                </dd>

                <dt className="sr-only">Instagram handle</dt>
                <dd>
                  <SocialLinks href="https://www.instagram.com">
                    <InstagramIcon strokeWidth={1.2} size={16} />
                  </SocialLinks>
                </dd>
              </dl>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
