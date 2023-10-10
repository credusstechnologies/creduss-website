import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();

  return (
    <button
      style={{ width: "40px", height: "40px" }}
      className="next bg-white p-5 rounded-full flex items-center justify-center"
      onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

export default SwiperButtonNext;
