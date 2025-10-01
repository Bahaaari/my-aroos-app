import React from 'react'
import Image from 'next/image'
import SubmitButton from '../element/SubmitButton'
import Luxury from '../../public/images/Luxury.png'
import BorderButton from '../element/BorderButton'

const TopBar = () => {
  return (
    <div className='w-screen h-20 grid grid-cols-12'>
      <div className='col-span-3 h-full  flex flex-col justify-center items-start px-4'>
        <h1 className='text-2xl'>عروس استور</h1>
        <span>فروشگاه و بانک اطلاعاتی خدمات مجالس عروسی</span>
        <span>دانلود نسخه موبایل</span>
      </div>
      <div className='col-span-6 h-full flex items-center justify-center'>
        <Image src={Luxury} width={130} height={70} alt='logo'/>
      </div>
      <div className='col-span-3 h-full flex gap-4 items-center'>
        <div className='w-[25%]'>
          <SubmitButton title={'ثبت نام'} />
        </div>

        <div className='w-[25%]'>
          <BorderButton title={'ورود'} />
        </div>
        
      </div>
    </div>
    
  )
}

export default TopBar




{/* <div className="grid grid-cols-3 gap-4">
      <div>
        <h1 className="text-2xl font-bold">
            سایت عروس استور
        </h1>
        <p className='text-xs'>
          فروشگاه و بانک اطلاعاتی خدمات مجالس عروسی
        </p>
        <div>
        <span className='inline-flex'>
          دانلود نسخه موبایل
        </span>
        <span className="ios"><a href="/" target='_blank'>
        <Image src='/images/MobileIcone.png' width={60}
      height={10}
      alt="Mobile icones"/>
        </a>
        </span>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image src='/images/Luxury.png' height={50} width={150} alt="Logo"/>
      </div>
      <div className='justify-items-center'>
        <a href="/" className='border-2 border-[var(--second-color)] rounded-full px-6 py-2'>
        ورود</a>
        <a href="/" className='border-2 border-[var(--second-color)] bg-[var(--second-color)] text-white rounded-full px-6 py-2 mr-2'>ثبت نام
        </a>
      </div>
    </div> */}