import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

const WhyCredussSwiper = () => {
  return (
    <div className="why-creduss-swiper text-black">
      <Swiper
        className="mySwiper md:w-[90%]"
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {WhyCredussList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="md:w-1/2">
              <h1 className="font-bold mb-3">{item.title}</h1>
              <p className="text-justify text-desc">{item.text}</p>
            </div>

            <div className="md:w-1/2">
              <Image
                width={400}
                height={400}
                src={item.img}
                alt="why creduss swiper"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="controls">
          <SwiperButtonPrev className="prev">Prev</SwiperButtonPrev>
          <SwiperButtonNext>Next </SwiperButtonNext>
        </div> */}
      </Swiper>
    </div>
  );
};

export default WhyCredussSwiper;

export const WhyCredussList = [
  {
    id: "1",
    img: "/icons/whycred.png",
    title: "Receive Packages",
    text: "Creduss Package Delivery Operations are at the forefront of reliable and efficient logistics. We specialize in connecting senders with dedicated couriers to ensure that packages are delivered swiftly and securely. Whether it's a small token of appreciation or a crucial business shipment, Creduss Package Delivery Operations guarantee a seamless experience that prioritizes efficiency, security, and your peace of mind.",
  },
  {
    id: "2",
    img: "/icons/whycred.png",
    title: "Receive Packages",
    text: "Creduss Package Delivery Operations are at the forefront of reliable and efficient logistics. We specialize in connecting senders with dedicated couriers to ensure that packages are delivered swiftly and securely. Whether it's a small token of appreciation or a crucial business shipment, Creduss Package Delivery Operations guarantee a seamless experience that prioritizes efficiency, security, and your peace of mind.",
  },
  {
    id: "3",
    img: "/icons/whycred.png",
    title: "Receive Packages",
    text: "Creduss Package Delivery Operations are at the forefront of reliable and efficient logistics. We specialize in connecting senders with dedicated couriers to ensure that packages are delivered swiftly and securely. Whether it's a small token of appreciation or a crucial business shipment, Creduss Package Delivery Operations guarantee a seamless experience that prioritizes efficiency, security, and your peace of mind.",
  },
];
