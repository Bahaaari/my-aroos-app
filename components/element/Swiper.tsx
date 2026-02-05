'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

interface ImageSliderProps {
  images: StaticImageData[];
  height?: number; // px
  autoplayDelay?: number;
  showPagination?: boolean;
  overlay?: React.ReactNode;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  height = 500,
  autoplayDelay = 3000,
  showPagination = true,
  overlay,
}) => {
  const swiperRef = useRef<any>(null);

  return (
    <div
      className="relative w-full rounded-lg shadow-xl"
      style={{ height }}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 z-10 pointer-events-none">{overlay}</div>}

      <Swiper
        className="w-full h-full"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={showPagination ? { clickable: true } : false}
        onSwiper={swiper => (swiperRef.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`slide-${index}`}
                fill
                className="object-cover rounded-lg"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
