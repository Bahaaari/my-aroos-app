import React from 'react'
import Link from 'next/link'

const FooterServices = () => {
  return (
    <div className='h-full flex flex-col justify-start items-start'>
        <div>
            <h1 className='text-sm font-semibold mb-4'>
                خدمات
            </h1>
        </div>
        <div>
            <Link href='#' className='text-xs'>تالار - باغ</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>عکاسی و فیلمبرداری</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>موسیقی و نورپردازی</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>آرایشگاه</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>کترینگ عروس</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>کرایه اتومبیل</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>سفره عقد</Link>
        </div>
    </div>
  )
}

export default FooterServices