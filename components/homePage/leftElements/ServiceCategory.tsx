import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import weddingGarden from '../../../public/images/homepage/weddingGarden.png'
import weddingDress from '../../../public/images/homepage/weddingDress.png'

const images = [
    [weddingGarden, weddingGarden, weddingGarden, weddingGarden, weddingGarden],
    [weddingGarden, weddingGarden, weddingGarden, weddingGarden, weddingGarden],
]

const ServiceCategories = () => {
  return (
    <div className='w-full shadow-sm mb-2'>
        <div className='bg-gray-200 w-full h-12 font-semibold text-xs flex items-center justify-start ps-4'>
         <span >
            دسته بندی خدمات
         </span>
        </div>
        <div className='grid grid-row-2 m-4'>
            {images.map((row, rowIndex) => (
                <div key={rowIndex} className='grid grid-cols-5 h-full'>
                    {row.map((img, colIndex) => (
                        <div key={colIndex}
                        className='group relative col-span-1 box-border size-48 
                        flex items-center justify-center place-content-center border-0 
                        hover:border-2 hover:border-[#ee4466] transition-all duration-200 overflow-hidden rounded-xs'
                        >
                            <Link href='#'>
                                <Image src={img}
                                alt='icon' 
                                
                                />
                                <div className='absolut inset-0 bg-[#ee4466]/30 opacity-0 
                                group-hover:opacity-100  transition-opacity duration-300 pointer-events-none z-10'></div>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default ServiceCategories