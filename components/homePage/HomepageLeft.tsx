import React from 'react'
import HoneyMoon from './leftElements/HoneyMoon'
import Carts from './leftElements/Carts'
import ServiceCategories from './leftElements/ServiceCategories'
import SpecialOffer from './leftElements/SpecialOffer'
import MostVisitedServices from './leftElements/MostVisitedServices'
import ServiceCategory from './leftElements/ServiceCategory'


const HomepageLeft = () => {
  return (
    <div className='col-span-10 h-full w-full me-12 flex flex-col justify-start items-start'>
        <HoneyMoon />
        <SpecialOffer />
        <MostVisitedServices />
        <Carts />
        <ServiceCategories />
        <ServiceCategory />
    </div>
  )
}

export default HomepageLeft