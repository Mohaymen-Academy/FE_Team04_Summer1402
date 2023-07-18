import { Card } from "./Card";
import { data } from "../data/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Swip() {
  return (
    <section className="py-8 bg-gradient-to-b from-gray-800 to-neutral-950">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="flex w-10/12 text-center"
      >
        {...data.map((data) => (
          <SwiperSlide className="mb-10 w-full hover:cursor-grabbing">
            <Card
              img={data.img}
              header={data.header}
              details={data.details}
              alt={data.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export { Swip };
