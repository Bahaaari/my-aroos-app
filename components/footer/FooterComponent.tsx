import React from 'react'
import FooterInformation from './FooterInformation'
import FooterServices from './FooterServices'
import FooterStore from './FooterStore'
import FooterNews from './FooterNews'

const FooterComponent = () => {
  return (
    <div className='w-screen grid grid-rows-6 bg-gray-200 px-8 py-1'>
        <div className='row-span-5 h-72 grid grid-cols-5 pt-8'>
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
        <div className='row-span-1 bg-#gdge71'>
          <span>
            کلیه حقوق مادی و معنوی سایت عروس استور متعلق به شرکت نوآوران سیستم می باشد (کپی رایت 2016)
          </span>
        </div>
    </div>
  )
}

export default FooterComponent