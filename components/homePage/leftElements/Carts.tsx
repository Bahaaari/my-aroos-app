import React from 'react'
import Image from 'next/image'
import cake1 from '../../../public/images/homepage/cake1.jpg'
import jewellery from '../../../public/images/homepage/jewellery.jpg'
import catering3 from '../../../public/images/homepage/catering3.jpg'
import microphone2 from '../../../public/images/homepage/microphone2.jpg'

const Carts = () => {
  return (
    <div className='w-full mb-2'>
        <div className='w-full h-60 grid grid-cols-6 mb-2'>
        <div className='col-span-2 relative shadow-md me-2'>
            <Image src={cake1} alt='cake'
            className='mask-l-from-40% mask-l-to-90% mask-b-from-75% mask-b-to-90% shadow-gray-500' />
            <div className='absolute top-20 left-10'>
                <span className='text-lg font-semibold'>
                    سفارش انواع کیک
                </span>
            </div>
        </div>
        <div className='col-span-4 relative shadow-md'>
            <Image src={jewellery} alt='cake'
            className='mask-l-from-65% mask-l-to-95% mask-b-from-55% mask-b-to-90% shadow-2xl' />
            <div className='absolute top-20 left-10'>
                <span className='text-lg font-semibold'>
                    جواهرات عروس و داماد
                </span>
            </div>
        </div>
        </div>
        <div className='w-full h-60 grid grid-cols-6'>
            <div className='col-span-4 relative shadow-md me-2'>
            <Image src={catering3} alt='cake'
            className='mask-l-from-40% mask-l-to-80% mask-b-from-65% mask-b-to-90% shadow-2xl' />
            <div className='absolute top-20 left-10'>
                <span className='text-lg font-semibold'>
                    خدمات کترینگ عروسی
                </span>
            </div>
        </div>
        <div className='col-span-2 relative shadow-md'>
            <Image src={microphone2} alt='cake'
            className='mask-l-from-40% mask-l-to-90% mask-b-from-75% mask-b-to-90% shadow-gray-500' />
            <div className='absolute top-20 left-10'>
                <span className='text-lg font-semibold'>
                    معرفی گروههای موسیقی
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Carts