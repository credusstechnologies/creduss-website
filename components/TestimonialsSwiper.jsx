import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

const TestimonialsSwiper = () => {
  return (
    <div className="testimonials-swiper text-black">
      <Swiper
        className="mySwiper"
        centeredSlides={true}
        initialSlide={reviewsList.length / 2}
        // centerInsufficientSlides={false}
        modules={[Autoplay]}
        // navigation={true}
        spaceBetween={41}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        <div>
          {reviewsList.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div>
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

              <div className="desc text-center flex flex-col justify-between max-h-full">
                <p className="text-[#101828] leading-relaxed">{item.review}</p>
                <h3 className=" font-bold text-base">- {item.reviewer}</h3>
              </div>
            </SwiperSlide>
          ))}
        </div>

        <div>
          <SwiperButtonPrev>Prev </SwiperButtonPrev>
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
