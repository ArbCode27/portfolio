// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({
  images,
}: {
  images: { title: string; img: string; link: string }[];
}) {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={2}
      loop
      className="custom-swiper"
    >
      {images.map((item) => (
        <SwiperSlide key={item.title}>
          <a href={item.link}>
            <figure>
              <img src={item.img} alt={item.title} className="rounded-2xl" />
            </figure>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
