/* import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(undefined);
  const swiper = useSwiper();
  return (
    <div className="min-h-screen">
      <Swiper
        loop={true}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bg-slider"
      >
        <SwiperSlide className="dark-layer">
          <img src="newoslo.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Oslo</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-layer">
          <img src="opera3.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Oslo</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-layer">
          <img src="barcode.jpg" alt="landing page" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Oslo</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="dark-layer">
          <video src="palace.mp4" />
          <div className="text-content">
            <h2 className="title">
              Faith Baptist Church <span>Oslo</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="read-btn">Join us</button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => console.log(swiper)}
        onClick={() => {
          swiper.slideNext();
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bg-slider-thumbs"
      >
        <SwiperSlide className="thumbs-container">
          <img src="norway.jpg" alt="landing page" className="thumbs-slide" />
        </SwiperSlide>
        <SwiperSlide className="thumbs-container">
          <img src="opera3.jpg" alt="landing page" className="thumbs-slide" />
        </SwiperSlide>
        <SwiperSlide className="thumbs-container">
          <img src="barcode.jpg" alt="landing page" className="thumbs-slide" />
        </SwiperSlide>
        <SwiperSlide className="thumbs-container">
          <video src="palace.mp4" className="thumbs-slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
 */
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Slider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="newoslo.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="barcode.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="norway.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="opera1.jpg" alt="landing page" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="newoslo.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="barcode.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="norway.jpg" alt="landing page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="opera1.jpg" alt="landing page" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
