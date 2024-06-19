import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import styles from "../styles/styles.module.scss";
import clsx from "clsx";

export const Slider = ({ basePath, items, cart, onProductChecked }) => {
  return (
    <Swiper
      modules={[Mousewheel]}
      className={(styles.swiper, styles.slider)}
      direction={"vertical"}
      mousewheel={true}
      centeredSlides={true}
      spaceBetween={25}
      slidesOffsetBefore={-125}
      breakpoints={{
        320: {
          slidesPerView: 3.5,
        },
        450: {
          slidesPerView: 3.1,
        },
        550: {
          slidesPerView: 2.75,
        },
        650: {
          slidesPerView: 2.25,
        },
        850: {
          slidesPerView: 1.9,
        },
        1000: {
          slidesPerView: 1.5,
        },
        1500: {
          slidesPerView: 1.6,
        },
        2100: {
          slidesPerView: 2.1,
        },
      }}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.id} className={clsx(styles.swiperWrapper, styles.sliderWrapper)}>
            <SliderItem
              basePath={basePath}
              item={item}
              isChecked={cart.some((prod) => prod.id === item.id)}
              onChecked={onProductChecked}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const SliderItem = ({ basePath, item, onChecked, isChecked }) => {
  return (
    <div className={clsx(styles.swiperSlide, styles.sliderItem)}>
      <article style={{ opacity: isChecked && 1 }} className={styles.card}>
        <div className={styles.cardImg}>
          <Image className={styles.img} width={200} height={200} src={`${basePath}${item.image}`} alt="alt" />
        </div>
        <div className={styles.cardDescription}>
          <h3 className={styles.cardDescriptionTitle}>{item.title}</h3>
          <p className={clsx(styles.cardDescriptionText, "font-rock")}>{item.text}</p>
          <div className={styles.cardDescriptionBottom}>
            <span className={clsx(styles.cardDescriptionPrice, "font-lies")}>
              Price <i>{item.price}</i>$
            </span>
            <label className={styles.cardDescriptionLable}>
              <input
                checked={isChecked}
                onChange={(e) => onChecked(e, item)}
                className={styles.realCheckbox}
                name="checkbox-btn"
                type="checkbox"
              />
              <div
                className={styles.customCheckbox}
                style={{ backgroundImage: `url(${basePath}/images/burgers/check.svg)`, opacity: 0 }}
              ></div>
            </label>
          </div>
        </div>
      </article>
    </div>
  );
};
