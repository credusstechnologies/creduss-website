import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

const TestimonialsSwiper = () => {
  return (
    <div
      className="testimonials-swiper text-black"
      style={{
        height: "auto",
        margin: "auto",
      }}>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        spaceBetween={80}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {reviewsList.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="">
              <div style={{ height: "40%" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  width={200}
                  height={200}
                  src={item.img}
                  alt="why creduss swiper"
                />
              </div>

              <div className="desc">
                <p>{item.review}</p>
                <h3 className="mt-10 font-bold">- {item.reviewer}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-swiper-controls ">
          <SwiperButtonPrev>
            <i className="fa-solid fa-chevron-left text-[#34C47C]"></i>
          </SwiperButtonPrev>
          <SwiperButtonNext>
            <i className="fa-solid fa-chevron-right text-[#34C47C]"></i>
          </SwiperButtonNext>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;

export const reviewsList = [
  {
    id: "1",
    img: "/icons/testifier2.png",
    review:
      "“The service was absolutely impeccible. I see myself and my family using this app going forward.”",
    reviewer: "John Doe",
  },
  {
    id: "2",
    img: "/icons/testifier2.png",
    review:
      "“The service was absolutely impeccible. I see myself and my family using this app going forward.”",
    reviewer: "John Doe",
  },
  {
    id: "3",
    img: "/icons/testifier2.png",
    review:
      "“The service was absolutely impeccible. I see myself and my family using this app going forward.”",
    reviewer: "John Doe",
  },
  {
    id: "4",
    img: "/icons/testifier2.png",
    review:
      "“The service was absolutely impeccible. I see myself and my family using this app going forward.”",
    reviewer: "John Doe",
  },
  {
    id: "5",
    img: "/icons/testifier2.png",
    review:
      "“The service was absolutely impeccible. I see myself and my family using this app going forward.”",
    reviewer: "John Doe",
  },
];
