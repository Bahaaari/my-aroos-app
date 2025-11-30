"use client";
import React from 'react'
import Link from 'next/link';
import SearchBax from '../element/SearchBax';
import Image from 'next/image'
import phoneIcon from '../../public/images/phoneIcon.png'
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return(
    <div className='w-full h-12 grid grid-cols-12 bg-gray-200'>
      <div className='col-span-8 h-full flex items-center justify-start ms-12'>
          <ul className='flex flex-row space-x gap-x-12 text-xs'>
            <li><Link href="#home">صفحه اصلی</Link></li>
            <li><Link href="#news">خدمات مجالس <ChevronDown size={15} className='inline-block' /></Link></li>
            <li><Link href="#contact">فروشگاه</Link></li>
            <li><Link href="#about">باشگاه نوعروسان</Link></li>
            <li><Link href="#contact">مشاوره</Link></li>
            <li><Link href="#about">مد و زیبایی</Link></li>
          </ul>
      </div>
      <div className='col-span-4 h-full flex items-center justify-center gap-8 ps-6'>
        <div className='w-[35%]'>
          <SearchBax />
        </div>
        <div className='w-[28%]'>
          <button className='bg-gray-600 py-1 px-2 h-12 flex items-center text-xs text-white gap-2'>
            <span dir='ltr'>(021)8884000</span>
            <Image src={phoneIcon} width={20} height={20} alt='icon'/>
          </button>
        </div>
      </div>
    </div>
  );
}
