import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import telegrm from '../../public/images/telegram.png'
import eNamad from '../../public/images/eNamad.jpg'
import samandehi from '../../public/images/samandehi.png'

const FooterNews = () => {
  return (
    <div className='h-full flex flex-col justify-start items-start'>
      <div className='text-sm font-semibold mb-4'>
        عضویت در خبرنامه
      </div>
      <div className='flex h-7 text-xs mb-4'>
        <input type="text" placeholder='ثبت آدرس ایمیل' id="name" name="name" 
               className='border border-gray-400 text-gray-400 bg-white w-56 ps-2'/>
        <button className='bg-gray-600 py-1 flex items-center text-white px-4'>
          عضویت
        </button>
      </div>
      <div className='flex mb-8'>
        <span className='text-xs'>
          مارا در شبکه های اجتماعی دنبال کنید
        </span>
        <Link href='#'>
          <Image src={telegrm} alt='Icon' height={25} width={25} />
        </Link>
        <Link href='#'>
          <Image src={telegrm} alt='Icon' height={25} width={25} />
        </Link>
        <Link href='#'>
          <Image src={telegrm} alt='Icon' height={25} width={25} />
        </Link>
        <Link href='#'>
          <Image src={telegrm} alt='Icon' height={25} width={25} />
        </Link>
      </div>
      <div className='flex'>
        <Image src={samandehi} alt='Icon' height={60} width={80}/>
        <Image src={eNamad} alt='Icon' height={60} width={80}/>
      </div>
    </div>
  )
}

export default FooterNews
