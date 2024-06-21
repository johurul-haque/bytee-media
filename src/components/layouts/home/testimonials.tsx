import { SectionHeader } from "@/components/layouts/section-header";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { first, second, third } from "@/assets/testimonials";

export function Testimonials() {
  return (
    <section className="py-16">
      <SectionHeader
        title="What Our Clients Are Saying"
        description="At Bytee Media, your satisfaction is our top priority. Here's what some of our happy clients have to say about our video editing services"
      />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mt-12 max-w-xl h-96"
      >
        {[first, second, third].map((image) => (
          <SwiperSlide key={image.src}>
            <Image
              src={image}
              alt=""
              width={1920}
              height={1080}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
