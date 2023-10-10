import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();

  return (
    <button
      style={{ width: "40px", height: "40px" }}
      className="prev bg-white p-5 rounded-full flex items-center justify-center"
      onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

export default SwiperButtonPrev;
