import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Slider.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bg-slider"
      >
        <SwiperSlide>
          <img src="newoslo.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Oslo</span>
            </h2>
            <p>
              Faith Baptist Church welcomes everyone irrespective of the
              language, culture and religion. We love God. We are a group of
              tamil christians come together to worship Jesus and have
              fellowship. We would like to transform people and their lives by
              teaching them about Jesus.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="barcode.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Sandnes</span>
            </h2>
            <p>
              Faith Baptist Church welcomes everyone irrespective of the
              language, culture and religion. We love God. We are a group of
              tamil christians come together to worship Jesus and have
              fellowship. We would like to transform people and their lives by
              teaching them about Jesus.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="norway.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Cyprus</span>
            </h2>
            <p>
              Faith Baptist Church welcomes everyone irrespective of the
              language, culture and religion. We love God. We are a group of
              tamil christians come together to worship Jesus and have
              fellowship. We would like to transform people and their lives by
              teaching them about Jesus.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="opera1.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>India</span>
            </h2>
            <p>
              Faith Baptist Church welcomes everyone irrespective of the
              language, culture and religion. We love God. We are a group of
              tamil christians come together to worship Jesus and have
              fellowship. We would like to transform people and their lives by
              teaching them about Jesus.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bg-slider-thumbs"
      >
        <SwiperSlide className="thumbs-container">
          <img src="newoslo.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide className="thumbs-container">
          <img src="barcode.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide className="thumbs-container">
          <img src="norway.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide className="thumbs-container">
          <img src="opera1.jpg" alt="landing page" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
