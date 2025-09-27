import React from 'react'
import HoneyMoon from './leftElements/HoneyMoon'
import Carts from './leftElements/Carts'
import ServiceCategories from './leftElements/ServiceCategories'
import SpecialOffer from './leftElements/SpecialOffer'

const HomepageLeft = () => {
  return (
    <div className='col-span-10 h-full  flex flex-col justify-start items-start'>
        <HoneyMoon />
        <SpecialOffer />
        <Carts />
        <ServiceCategories />
    </div>
  )
}

export default HomepageLeft