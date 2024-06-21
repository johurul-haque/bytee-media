import { BookACall } from "@/components/book-a-call";
import dreamBig from "@/assets/dream-big.png";
import Image from "next/image";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { FacebookIcon, InstagramIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-6">
      <div>
        <Image
          src={dreamBig}
          className="block mx-auto -mb-4 max-sm:max-w-xs w-full"
          alt=""
          role="presentation"
          quality={100}
        />
        <h2 className="text-2xl max-sm:mt-2 sm:text-3xl md:text-5xl font-semibold text-center mb-6">
          Schedule a call Today!
        </h2>
        <BookACall className="mx-auto" />
      </div>

      <div className="pt-20 mt-10 bg-[#5c3f05] pb-10 [mask-image:linear-gradient(to_bottom,transparent,#000)]">
        <div className="container flex max-sm:flex-col max-sm:items-center max-sm:gap-y-5 justify-between">
          <div>
            <Logo className="max-sm:mx-auto" />
            <p className="text-sm mt-5 opacity-80">
              Copyright © 2024 Bytee Media
            </p>
          </div>

          <div>
            <div className="flex gap-6">
              {[
                ["Services", "#services"],
                ["Portfolio", "/portfolio"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>

            <dl className="flex gap-4 justify-center sm:justify-end mt-5">
              <dt className="sr-only">Facebook handle</dt>
              <dd>
                <SocialLinks href="https://www.facebook.com/profile.php?id=61554929120309&mibextid=ZbWKwL">
                  <FacebookIcon strokeWidth={1.2} size={16} />
                </SocialLinks>
              </dd>

              <dt className="sr-only">Instagram handle</dt>
              <dd>
                <SocialLinks href="https://www.instagram.com/bytee_media?igsh=NGF2bng5OTFhN3Zp">
                  <InstagramIcon strokeWidth={1.2} size={16} />
                </SocialLinks>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
}
