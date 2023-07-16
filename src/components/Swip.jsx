import { Card } from "./Card";
import { data } from "../data/swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Swip() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((data) => (
        <Card
          img={data.img}
          header={data.header}
          details={data.details}
          alt={data.alt}
        />
      ))}
    </Slider>
  );
}

export { Swip };
