import React from 'react'
import GardenHall from './GardenHall'

const GardenLeft = () => {
  return (
    <div className='col-span-10  w-full flex flex-col justify-start items-start'>
        <div className=''>
            <GardenHall />
        </div>
    </div>
  )
}

export default GardenLeft