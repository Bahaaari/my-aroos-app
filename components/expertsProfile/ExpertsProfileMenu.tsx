import React from 'react'
import Link from 'next/link'

const ExpertsProfilelMenu = () => {
  return (
    <div className='shadow-sm h-12 w-full flex items-center justify-start bg-white mb-2 text-[10px]'>
        <Link href='#' className='px-4'>صفحه اصلی</Link>
        <span className='px-2'>›</span>
        <Link href='#' className='px-4'>سالن زیبایی سنس</Link>
        <span className='px-2'>›</span>
        <Link href='#' className='px-4'>متخصصان</Link>
        <span className='px-2'>›</span>
        <Link href='#' className='px-4'>علی آشتیانی</Link>
    </div>
  )
}

export default ExpertsProfilelMenu