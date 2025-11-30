import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import weddingGarden from '../../../public/images/homepage/weddingGarden.png'
import weddingDress from '../../../public/images/homepage/weddingDress.png'

const ServiceCategories = () => {
  return (
    <div className='w-full shadow-sm mb-2 bg-white'>
        <div className='bg-gray-200 w-full h-12 font-semibold text-xs flex items-center justify-start ps-4'>
         <span >
            دسته بندی خدمات
         </span>
        </div>
        <div className='grid grid-row-2 m-4'>
            <div className='span-row-1 grid grid-cols-5 h-full'>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
            </div>
            <div className='span-row-1 grid grid-cols-5 h-full'>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-2 border-[#ee4466] place-content-center'>
                    <Link href='#'>
                       <Image src={weddingDress} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
                <div className='col-span-1 box-border 
                size-48 flex items-center justify-center border-none place-content-center'>
                    <Link href='#'>
                       <Image src={weddingGarden} alt='icon' />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCategories
