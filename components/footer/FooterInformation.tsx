import React from 'react'
import Link from 'next/link'

const FooterInformation = () => {
  return (
    <div className='h-full flex flex-col justify-start items-start ps-4'>
        <div>
            <h1 className='text-sm font-semibold mb-4'>
                اطلاعات
            </h1>
        </div>
        <div>
            <Link href='#' className='text-xs'>آشنایی با سایت عروس استور</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>نحوه استفاده از خدمات</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>قوانین و مقررات</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>سوالات متداول</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>درباره ما</Link>
        </div>
        <div>
            <Link href='#' className='text-xs'>تماس با ما</Link>
        </div>
    </div>
  )
}

export default FooterInformation