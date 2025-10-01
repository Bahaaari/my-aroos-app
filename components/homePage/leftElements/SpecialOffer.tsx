"use client";

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SpecialOffer = () => {
  return (
    <div className="w-full max-w-5xl relative">
        <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={15}
           slidesPerView={3.5}
           navigation
           pagination={{ clickable: true }}
           className="rounded-lg shadow-lg"
           scrollbar={{ draggable: true }}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           loop={true}
        >
           <SwiperSlide>
             <div className="bg-red-400 h-64 flex items-center justify-center text-white text-xl rounded-lg">
            اسلاید ۱
             </div>
           </SwiperSlide>
           <SwiperSlide>
             <div className="bg-blue-400 h-64 flex items-center justify-center text-white text-xl rounded-lg">
               اسلاید ۲
              </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className="bg-green-400 h-64 flex items-center justify-center text-white text-xl rounded-lg">
               اسلاید 3
              </div>
           </SwiperSlide>
           <SwiperSlide>
            <div className="bg-gray-400 h-64 flex items-center justify-center text-white text-xl rounded-lg">
               اسلاید 4
              </div>
           </SwiperSlide>
           <SwiperSlide>
              <div className="bg-blue-950 h-64 flex items-center justify-center text-white text-xl rounded-lg">
               اسلاید 5
              </div>
           </SwiperSlide>
           ...
        </Swiper>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-15" />
      
        
    
    </div>
  )
}

export default SpecialOffer