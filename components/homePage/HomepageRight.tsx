import React from 'react'
import Link from 'next/link'
import NewestVideos from './rightElements/NewestVideos'
import Image from 'next/image'
import LatestContent from './rightElements/LatestContent'
import watch3 from '../../public/images/homepage/watch3.jpg'
import rings from '../../public/images/homepage/rings.jpg'
import gardenHouse from '../../public/images/homepage/gardenHouse.jpg'

const HomepageRight = () => {
  return (
    <div className='col-span-2 h-full me-2'>
        <div className='mb-2 shadow-md'>
            <Link href='#'>
                  <Image src={watch3} height={150} width={220} 
                  className='bg-[#D7DD8] rounded-t-sm w-full' alt='watch' />
                  <span className='text-center inline-block align-text-middle text-white text-sm bg-amber-900 w-full h-12'>20 درصد تخفیف انواع ساعت</span>
            </Link>
        </div>
        <div className='mb-2 shadow-md'>
            <Link href='#' >
                  <Image src={rings} height={150} width={220} 
                  className='bg-[#7da7b8] rounded-t-sm' alt='watch' />
                  <span className='block text-center text-sm bg-white text-[#7da7b8] px-8 py-4'>حراج جواهرات زمردیان</span>
            </Link>
        </div>
        <div className='mb-2 shadow-md'>
            <Link href='#' >
                  <Image src={gardenHouse} height={150} width={220} className='bg-[#7da7b8] rounded-sm' alt='watch' />
            </Link>
        </div>
        <NewestVideos />
        <LatestContent />
    </div>
  )
}

export default HomepageRight