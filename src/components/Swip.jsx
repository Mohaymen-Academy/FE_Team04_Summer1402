import { Card } from "./Card";
import { data } from "../data/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Swip() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="flex w-10/12 text-center"
      >
        {...data.map((data) => (
          <SwiperSlide>
            <Card
              img={data.img}
              header={data.header}
              details={data.details}
              alt={data.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export { Swip };
