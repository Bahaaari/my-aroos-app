import React from 'react'
import Tabs from './tabs/Tabs'
import SenseSalon from './SenseSalon'

const ExpertsProfileLeft = () => {
  return (
    <div className='col-span-10  w-full flex flex-col justify-start items-start'>
        <SenseSalon />
        <Tabs />
    </div>
  )
}

export default ExpertsProfileLeft