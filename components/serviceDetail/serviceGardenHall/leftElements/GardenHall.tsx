'use client'

import React, { useRef} from 'react'
import {Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData} from 'next/image';
import salon from '../../../../public/images/services/salon.jpg';
import salon1 from '../../../../public/images/services/salon1.jpg';
import salon2 from '../../../../public/images/services/salon2.jpg';


interface Card {
  id: number;
  image: StaticImageData;
}

const GardenHall = () => {
  const swiperRef = useRef<any>(null);

  const cards: Card[] = [
    { id: 1,  image: salon },
    { id: 2,  image: salon1 },
    { id: 3,  image: salon2 },
    { id: 4, image: salon },
  ];
  return (
    <div className='w-full h-[750px] bg-white mb-2'>
     <div className="max-w-5xl flex justify-center items-center rounded-lg shadow-xl"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()} 
     >
        
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="rounded-lg w-full"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="w-full h-[500px]">
                <Image
                  src={card.image}
                  alt="beauty salon"
                  fill
                  className="object-cover"
                  
                />
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
     </div>
     
    </div>
  )
}

export default GardenHall