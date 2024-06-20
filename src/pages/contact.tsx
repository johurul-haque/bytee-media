import { inter } from "@/lib/fonts";
import { TextGradient } from "@/components/text-gradient";
import Image, { StaticImageData } from "next/image";
import { address, email, phone } from "@/assets/contact";

export default function Contact() {
  return (
    <main className={`container flex-1 ${inter.className} py-20`}>
      <TextGradient asChild>
        <h1 className="text-center text-3xl mb-2 font-medium">Contact Us</h1>
      </TextGradient>

      <dl className="text-center py-16 flex justify-center max-sm:flex-wrap max-w-4xl mx-auto sm:divide-x-2 divide-amber-dark [&>div]:p-10 sm:[&>div]:p-14">
        <div>
          <DtTitle title="Phone" icon={phone} />
          <dd className="[&>a]:block space-y-1 [&>a]:max-w-fit [&>a]:mx-auto mt-2">
            <a href="tel:+8801759670492"> +8801759670492</a>
            <a href="tel:+881303129907">+881303129907</a>
          </dd>
        </div>

        <div>
          <DtTitle title="Address" icon={address} />
          <dd className="mt-2">
            <address className="not-italic">Dhaka, Bangladesh</address>
          </dd>
        </div>

        <div>
          <DtTitle title="Email" icon={email} />
          <dd className="mt-2">
            <a href="mailto:ayan@bytemedia.com">ayan@bytemedia.com</a>
          </dd>
        </div>
      </dl>
    </main>
  );
}

function DtTitle({ title, icon }: { title: string; icon: StaticImageData }) {
  return (
    <dt className="flex flex-col items-center">
      <Image
        src={icon}
        className="size-10"
        alt=""
        role="presentation"
        width={100}
        height={100}
      />
      <TextGradient className="text-lg font-medium">{title}</TextGradient>
    </dt>
  );
}
