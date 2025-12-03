import React from 'react'
import Link from 'next/link'

const ShoppingCartMenu = ({title}:any) => {
  return (
    <div className='shadow-sm h-12 text-xs flex items-center justify-start bg-white mb-2'>
        <Link href='#' className='px-4'>عروس استور</Link>
        <span>›</span>
        <Link href='#' className='px-4'>سبد خرید</Link>
        <span>›</span>
        <Link href='#' className='px-4'>{title}</Link>
    </div>
  )
}

export default ShoppingCartMenu
