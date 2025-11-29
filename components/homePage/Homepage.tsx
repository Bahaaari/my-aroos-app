import React from 'react'
import HomepageRight from './HomepageRight'
import HomepageLeft from './HomepageLeft'

const Homepage = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className='grid grid-cols-12 px-12 pb-1 mx-4'>
        <HomepageRight />
        <HomepageLeft />
      </div>
    </div>
  )
}

export default Homepage