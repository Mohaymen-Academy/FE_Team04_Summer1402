import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";
import { data } from "../data/swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

function Swip() {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((data) => (
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
  );
}

export { Swip };
