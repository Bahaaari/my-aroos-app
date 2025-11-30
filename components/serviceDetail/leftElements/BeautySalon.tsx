'use client'

import React, { useRef} from 'react'
import {Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData} from 'next/image';
import salon from '../../../public/images/services/salon.jpg';
import salon1 from '../../../public/images/services/salon1.jpg';
import salon2 from '../../../public/images/services/salon2.jpg';
import discountpng from '../../../public/images/services/discountpng.png'

interface card {
  id: number;
  image: StaticImageData;
}

const BeautySalon = () => {
  const swiperRef = useRef<any>(null);

  const cards = [
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
     <div className='w-full h-[250px]'>
      <div className='grid grid-cols-2'>
        <div className='span-col-1 h-full flex flex-col justify-around items-start p-8'>
          <h1 className='text-2xl font-bold mb-6'>سالن زیبایی پرنسس</h1>
          <span className='text-xs'>انواع خدمات عروس</span>
          <span className='text-xs'>خدمات مو</span>
          <span className='text-xs'>خدمات ناخن</span>
          <span className='text-xs'>ماسکهای صورت</span>
        </div>
        <div className='span-col-1 h-full flex flex-col justify-start items-end pt-8'>
          <Image src={discountpng} alt='logo'
          width={100} height={80} />
        </div>
      </div>
     </div>
    </div>
  )
}

export default BeautySalon