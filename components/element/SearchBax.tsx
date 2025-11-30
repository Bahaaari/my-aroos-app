import React from 'react'
import Image from 'next/image'
import searchIcon from '../../public/images/searchIcon.png'

const SearchBax = () => {
  return (
    <div className='flex border border-gray-300 h-8 items-center px-1 bg-white gap-5'>
        <input type="text" placeholder='جستجو خدمات یا کالا' id="name" name="name" className='border-none text-xs w-[75%]'/>
        <Image src={searchIcon} width={16} height={16} alt='search'/>
    </div>
  )
}

export default SearchBax
