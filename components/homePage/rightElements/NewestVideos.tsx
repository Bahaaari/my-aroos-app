import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gardenHall1 from '../../../public/images/homepage/gardenHall1.jpg'
import play from '../../../public/images/homepage/play.png'

const NewestVideos = () => {
  return (
    <div className='shadow-sm pb-4 mb-2'>
        <div className='bg-gray-200 w-55 h-8 text-xs flex items-center justify-start ps-4'>
         <span >
            جدیدترین ویدئوها
         </span>
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <div className='relative'>
              <Link href='#'>
                <Image src={gardenHall1} alt='gardenHall' className='rounded-tr-xs' />
                    <Image src={play} alt='playIcon' className='absolute w-10 h-10 top-6 left-6' />
                    <span className='absolute right-0.5 bottom-0.5 text-xs text-amber-50'>2:37</span>
              </Link>
            </div>
            <span className='text-xs text-gray-400 ms-2'>
              تالار فراهانی
            </span>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <hr className="border-0 h-px bg-gray-200" />
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <div className='relative'>
              <Link href='#'>
                <Image src={gardenHall1} alt='gardenHall' className='rounded-tr-xs' />
                    <Image src={play} alt='playIcon' className='absolute w-10 h-10 top-6 left-6' />
                    <span className='absolute right-0.5 bottom-0.5 text-xs text-amber-50'>2:37</span>
              </Link>
            </div>
            <span className='text-xs text-gray-400 ms-2'>
              تالار فراهانی
            </span>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <hr className="border-0 h-px bg-gray-200" />
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <div className='relative'>
              <Link href="#">
                <Image src={gardenHall1} alt='gardenHall' className='rounded-tr-xs' />
                    <Image src={play} alt='playIcon' className='absolute w-10 h-10 top-6 left-6' />
                    <span className='absolute right-0.5 bottom-0.5 text-xs text-amber-50'>2:37</span>
              </ Link>
            </div>
            <span className='text-xs text-gray-400 ms-2'>
              تالار فراهانی
            </span>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <hr className="border-0 h-px bg-gray-200" />
        </div>
        <div className='mx-6'>
          <div className='flex my-6 relative'>
            <div className='relative'>
              <Link href='#'>
                <Image src={gardenHall1} alt='gardenHall' className='rounded-tr-xs' />
                    <Image src={play} alt='playIcon' className='absolute w-10 h-10 top-6 left-6' />
                    <span className='absolute right-0.5 bottom-0.5 text-xs text-amber-50'>2:37</span>
              </Link>
            </div>
            <span className='text-xs text-gray-400 ms-2'>
              تالار فراهانی
            </span>
            <span className='text-xs text-gray-400 absolute left-0 bottom-0'>29 بازدید</span>
          </div>
          <button className='text-sm text-gray-400 underline underline-offset-4'>
            مشاهده همه
          </button>
        </div>
    </div>
  )
}

export default NewestVideos