import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import skin from '../../../public/images/homepage/skin.jpg'

const LatestContent = () => {
  return (
    <div className='shadow-sm pb-4 mb-2'>
        <div className='bg-gray-200 w-55 h-8 text-xs flex items-center justify-start ps-4'>
         <span >
            آخرین مطالب
         </span>
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <Image src={skin} alt='gardenHall' className='rounded-tr-xs' />
            <Link href='#' className='text-xs font-semibold text-gray-400 ms-2'>
              چگونه پوستی شاداب و زیبا داشته باشیم؟
            </Link>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <hr className="border-0 h-px bg-gray-200" />
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <Image src={skin} alt='gardenHall' className='rounded-tr-xs' />
            <Link href='#' className='text-xs font-semibold text-gray-400 ms-2'>
              چگونه پوستی شاداب و زیبا داشته باشیم؟
            </Link>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <hr className="border-0 h-px bg-gray-200" />
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <Image src={skin} alt='gardenHall' className='rounded-tr-xs' />
            <Link href='#' className='text-xs font-semibold text-gray-400 ms-2'>
              چگونه پوستی شاداب و زیبا داشته باشیم؟
            </Link>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <hr className="border-0 h-px bg-gray-200" />
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <Image src={skin} alt='gardenHall' className='rounded-tr-xs' />
            <Link href='#' className='text-xs font-semibold text-gray-400 ms-2'>
              چگونه پوستی شاداب و زیبا داشته باشیم؟
            </Link>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <button className='text-sm text-gray-400 underline underline-offset-4'>
            مشاهده همه
          </button>
        </div>
         
    </div>
  )
}

export default LatestContent