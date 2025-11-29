"use client";

import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
//import { useEffect, useState } from "react";
import type { StaticImageData } from 'next/image';
import weddingServices from '../../public/images/homepage/hero/weddingServices.jpg';
//import dynamic from "next/dynamic";




interface Card {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

const cards: Card[] = [
  {
    title: "تالار مجلل بریان",
    subtitle: "ظرفیت باقی‌مانده برای آبان ماه",
    image: weddingServices,
  },
  {
    title: "خدمات عروسی رمِس",
    subtitle: "۲ ظرفیت باقی‌مانده برای این ماه",
    image: weddingServices,
  },
  {
    title: "مزون گل‌پوش",
    subtitle: "اجاره لباس عروس • بازدید حضوری",
    image: weddingServices,
  },
];

const HeroSection = () => {
  
  
  return (
    <div className="max-w-6xl mx-auto relative mb-2">
      <div className="absolute -left-10 top-1/2 -translate-y-1/2">
        <button className="swiper-button-prev-custom bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow">
          <span className="text-3xl font-bold">›</span>
        </button>
      </div>
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-20">
        <button className="swiper-button-next-custom bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow">
          <span className="text-3xl font-bold">‹</span>
        </button>
      </div>

      <Swiper
                 modules={[Navigation]}
                 centeredSlides={true}
                 //onSwiper={setSwiperInstance}
                 spaceBetween={10}
                 slidesPerView={1.6}
                 speed={600}
                 navigation={{
                   nextEl: ".swiper-button-next-custom",
                   prevEl: ".swiper-button-prev-custom",
                 }}
                 
                 className="rounded-lg shadow-lg relative w-full"
                 
                 loop={true}
                 
              >
        {cards.map((card, i) => (
          <SwiperSlide
            key={i}
            className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-500"
          >
            <div className="relative w-full h-[420px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                //priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end text-white p-5">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm opacity-90">{card.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSection