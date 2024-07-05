import { useState } from "react";
import { SwiperClass } from "swiper/react";

export const useSlideIndex = (): { activeIndex: number; handleSlideChange: (swiper: SwiperClass) => void } => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return { activeIndex, handleSlideChange };
};
