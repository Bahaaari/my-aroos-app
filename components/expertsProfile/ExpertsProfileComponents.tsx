import React from 'react'
import ExpertsProfileLeft from './leftElements/ExpertsProfileLeft'
import ExpertsProfilelMenu from './ExpertsProfileMenu'
import ExpertsProfileRight from './rightElements/ExpertsProfileRight'

const ExpertsProfileComponents = () => {
  return (
    <div className='bg-gray-100 w-full mb-2'>
        <ExpertsProfilelMenu />
      <div className='grid grid-cols-12 mb-2'>
        <ExpertsProfileRight />
        <ExpertsProfileLeft />
      </div>
    </div>
  )
}

export default ExpertsProfileComponents