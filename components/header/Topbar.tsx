import React from 'react'
import Image from 'next/image'
import SubmitButton from '../element/SubmitButton'
import Luxury from '../../public/images/Luxury.png'
import BorderButton from '../element/BorderButton'

const TopBar = () => {
  return (
    <div className='w-full h-24 grid grid-cols-12 mx-4'>
      <div className='col-span-3 h-full flex flex-col justify-around items-start ms-8'>
        <h1 className='text-2xl font-bold'>سایت عروس استور</h1>
        <span className='text-xs mb-2'>فروشگاه و بانک اطلاعاتی خدمات مجالس عروسی</span>
        <span className='text-xs mb-2'>دانلود نسخه موبایل</span>
      </div>
      <div className='col-span-6 h-full flex items-center justify-center'>
        <Image src={Luxury} width={130} height={70} alt='logo'/>
      </div>
      <div className='col-span-3 h-full flex gap-4 items-center justify-center'>
        <div className='w-[25%]'>
          <BorderButton title={'ورود'} />
        </div>
        <div className='w-[25%]'>
          <SubmitButton title={'ثبت نام'} />
        </div>
      </div>
    </div>
  )
}

export default TopBar
