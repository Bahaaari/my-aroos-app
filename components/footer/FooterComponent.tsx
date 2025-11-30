import React from 'react'
import FooterInformation from './FooterInformation'
import FooterServices from './FooterServices'
import FooterStore from './FooterStore'
import FooterNews from './FooterNews'

const FooterComponent = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-72 grid grid-cols-5 bg-gray-200 p-8'>
          <div className='flex col-span-1'>
            <FooterInformation />
          </div>
          <div className='flex col-span-1'>
            <FooterServices />
          </div>
          <div className='flex col-span-1'>
            <FooterStore />
          </div>
          <div className='flex col-span-2'>
            <FooterNews />
          </div>
        </div>
        <div className='w-full h-12 text-sm text-white bg-[#6d6e71] flex items-center justify-center'>
          <span>
            کلیه حقوق مادی و معنوی سایت عروس استور متعلق به شرکت نوآوران سیستم می باشد (کپی رایت 2016)
          </span>
        </div>
    </div>
  )
}

export default FooterComponent
