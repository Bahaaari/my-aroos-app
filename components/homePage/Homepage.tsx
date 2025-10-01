import React from 'react'
import HomepageRight from './HomepageRight'
import HomepageLeft from './HomepageLeft'

const Homepage = () => {
  return (
    <div className='grid grid-cols-12 w-screen px-8 py-1'>
        <HomepageRight />
        <HomepageLeft />
    </div>
  )
}

export default Homepage