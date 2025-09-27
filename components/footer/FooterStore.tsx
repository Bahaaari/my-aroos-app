import React from 'react'
import Link from 'next/link'

const FooterStore = () => {
  return (
    <div className='h-full flex flex-col justify-start items-start'>
        <div>
            <h1 className='text-sm font-semibold mb-4'>
                فروشگاه
            </h1>
        </div>
        <div>
            <Link href='#' className='text-xs'>لباس عروس و داماد</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>جهیزیه</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>زیورآلات عروس و داماد</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>تهیه کیک - کارت</Link>
        </div>
    </div>
  )
}

export default FooterStore