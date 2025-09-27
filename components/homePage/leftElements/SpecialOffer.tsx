"use client";

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SpecialOffer = () => {
  return (
    <div>
        <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={3}
           navigation
           pagination={{ clickable: true }}
           className="rounded-2xl shadow-lg"
           //scrollbar={{ draggable: true }}
         //  onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
           <SwiperSlide>
             <div className="bg-red-400 h-64 flex items-center justify-center text-white text-xl rounded-2xl">
            اسلاید ۱
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <div className="bg-blue-400 h-64 flex items-center justify-center text-white text-xl rounded-2xl">
               اسلاید ۲
              </div>
           </SwiperSlide>
           <SwiperSlide>Slide 3</SwiperSlide>
           <SwiperSlide>Slide 4</SwiperSlide>
           ...
        </Swiper>
    </div>
  )
}

export default SpecialOffer