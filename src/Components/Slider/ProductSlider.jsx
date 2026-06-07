import React from 'react';
import './ProductSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ProductSlider({ images = [] }) {
  return (
    <div className="slider-container">
      <Swiper
        className="product-swiper"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 2300, disableOnInteraction: false }} // Added autoplay configuration
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`preview-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
