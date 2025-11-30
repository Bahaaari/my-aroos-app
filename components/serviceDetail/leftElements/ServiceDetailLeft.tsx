import React from 'react'
import BeautySalon from './BeautySalon'
import TabBar from './tabs/TabBar'


const ServiceDetailLeft = () => {
  return (
    <div className='col-span-10  w-full flex flex-col justify-start items-start'>
      <div className=''><BeautySalon /></div>
        
        <TabBar />
    </div>
  )
}

export default ServiceDetailLeft