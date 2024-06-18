import { SectionHeader } from "@/components/layouts/section-header";
import { BookACall } from "@/components/book-a-call";
import { cn } from "@/lib/cn";

export function Packages() {
  return (
    <section className="py-16">
      <SectionHeader
        title="Our Packages"
        description="Unique projects deserve unique solutions! Bytee Media offers a range of editing packages to fit your budget and video needs."
        className={{
          p: "max-w-lg",
        }}
      />
      <div className="grid justify-center sm:grid-cols-[repeat(auto-fill,22rem)] gap-6 my-10">
        {getPackages().map(({ title, features, isPopular }) => (
          <dl
            key={title}
            className={cn(
              "bg-white rounded-3xl text-black p-6 border-4",
              isPopular
                ? "bg-[#FBDB9E] border-[#FFA900] relative"
                : "border-[#979797]",
            )}
          >
            {isPopular && (
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#FFA900] font-bold max-sm:text-sm max-sm:truncate px-5 py-1 rounded-full text-white [text-shadow:1px_1px_1px_rgba(23_23_23/0.4)]">
                Most Popular
              </div>
            )}

            <dt className="font-black text-3xl text-center">{title}</dt>
            <dd className="mt-4">
              <ul className="list-disc pl-4 space-y-2 font-medium">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
      <BookACall className="mx-auto" />
    </section>
  );
}

function getPackages() {
  return [
    {
      title: "Silver",
      features: [
        "2 long form videos",
        "4 shorts",
        "2 YouTube thumbnails",
        "Raw footage for 10 minutes",
        "Edited video 3 minute",
        "24/7 assistance via WhatsApp",
      ],
    },
    {
      title: "Gold",
      isPopular: true,
      features: [
        "4 long-form videos",
        "8 shorts",
        "4 YouTube thumbnails",
        "YouTube SEO",
        "10x shorts idea",
        "Raw footage for 15 minutes each",
        "Edited video 8-10 minute",
        "24/7 assistance via WhatsApp",
      ],
    },
    {
      title: "Platinum",
      features: [
        "8 long-from videos",
        "16 shorts",
        "8 YouTube thumbnails",
        "YouTube SEO",
        "Raw footage for 20 minutes each",
        "Edited video 15 minute",
        "50x shorts idea",
        "Content strategy calls",
        "24/7 assistance via WhatsApp",
      ],
    },
  ];
}
