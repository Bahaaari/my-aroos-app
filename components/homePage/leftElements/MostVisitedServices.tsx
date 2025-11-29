"use client";
import React from 'react'
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight  } from 'lucide-react';


export default function CustomSwiper() {
  const cards = [
    { id: 1, title: "کارت ۱", color: "bg-red-200" },
    { id: 2, title: "کارت ۲", color: "bg-blue-200" },
    { id: 3, title: "کارت ۳", color: "bg-green-200" },
    { id: 4, title: "کارت ۴", color: "bg-yellow-200" },
    { id: 5, title: "کارت ۵", color: "bg-pink-200" },
  ];

  return (
    <div className='w-full bg-white mb-2'>
      <div className='bg-gray-200 w-full h-8 shadow-md text-xs flex items-center justify-start ps-4'>
         <span >
            پربازدیدترین خدمات
         </span>
        </div>
      <div className="relative max-w-5xl p-12">
        <div className="absolute left-1 top-1/2 -translate-y-1/2 z-20">
          <ChevronLeft className='swiper-button-prev-custom text-gray-300
           hover:text-gray-500 text-10xl font-bold select-none
           h-12 w-12 cursor-pointer transition text-3xl' />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
          <ChevronRight className='swiper-button-prev-custom text-gray-300
           hover:text-gray-500 text-10xl font-bold select-none
           h-12 w-12 cursor-pointer transition text-3xl' />
        </div>
      <Swiper
           modules={[Navigation]}
           spaceBetween={10}
           slidesPerView={3.5}
           navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
           }}
           
           className="rounded-lg"
           //onSwiper={(swiper) => console.log(swiper)}
           //onSlideChange={() => console.log('slide change')}
           loop={true}
        >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Link href='#'
              className={`${card.color}  h-48 flex items-center justify-center rounded-xl text-gray-700 font-semibold py-4`}
            >
              {card.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* افکت محوشدگی کناره‌ها */}
      <div className="pointer-events-none absolute left-12 top-5 h-60 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      
    </div>
    </div>
  );
}
