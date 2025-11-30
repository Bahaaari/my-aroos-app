import React from 'react'
import ServiceDetailMenu from './ServiceDetailMenu'
import ServiceDetailright from './rightElements/ServiceDetailright'
import ServiceDetailLeft from './leftElements/ServiceDetailLeft'



const ServiceDetailComponent = () => {
  return (
    <div className='bg-gray-100 w-full mb-2'>
        <ServiceDetailMenu />
      <div className='grid grid-cols-12 mb-2'>
        <ServiceDetailright />
        <ServiceDetailLeft />
      </div>
    </div>
  )
}

export default ServiceDetailComponent