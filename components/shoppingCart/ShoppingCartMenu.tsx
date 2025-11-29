import React from 'react'
import Link from 'next/link'

const ShoppingCartMenu = () => {
  return (
    <div className='shadow-sm h-12 flex items-center justify-start bg-white mx-16 mb-2'>
        <Link href='#' className='px-4'>عروس استور</Link>
        <span>›</span>
        <Link href='#' className='px-4'>سبد خرید</Link>
        <span>›</span>
        <Link href='#' className='px-4'>بازبینی نهایی</Link>
    </div>
  )
}

export default ShoppingCartMenu