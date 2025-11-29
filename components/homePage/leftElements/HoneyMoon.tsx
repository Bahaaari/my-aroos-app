import React from 'react'
import Image from 'next/image'
import pool from '../../../public/images/homepage/pool.jpg'
import Tabs from './Tabs'
//import ChoosingButton from './ChoosingButton'

const HoneyMoon = () => {
  return (
    <div className='h-86 w-full grid grid-rows-6 shadow-md mb-2 bg-white'>
        <div className='row-span-5 relative'>
          <Image src={pool} alt='nature' 
          className='mask-l-from-40% mask-l-to-78%' />
        
          <div className='absolute top-10 left-10'>
            <h1 className='text-xl font-semibold h-7'>
                ماه عسل رویایی در سواحل مالیبو
            </h1>
            <h4 className='text-xs text-gray-400 h-4 mb-6'>
                هدیه ویژه عروس شیک به کاربران سایت
            </h4>
            <h4 className='text-xs text-gray-400 h-4'>
                10 روز اقامت در هتل مجلل مالیبو
            </h4>
            <h4 className='text-xs text-gray-400 h-4'>
                بلیط رفت و برگشت رایگان
            </h4>
            <h4 className='text-xs text-gray-400 h-4 mb-8'>
                کروز اختصاصی
            </h4>
            <button className='text-sm text-white p-2 bg-[#EE4466] place-content-center rounded-xs'>شرکت در قرعه کشی</button>
          </div>
        </div>
        <div className='row-span-1 flex justify-start items-center'>
          <Tabs />
        </div>
    </div>
  )
}

export default HoneyMoon