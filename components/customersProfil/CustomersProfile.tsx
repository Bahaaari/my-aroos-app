import React from 'react'
import Taherian from './customers/Taherian'
import Tabs from './tabs/Tabs'

const CustomersProfile = () => {
  return (
    <div className='bg-gray-100'>
        <div className=' mx-16'>
          <Taherian />
          <Tabs />
        </div>
    </div>
  )
}

export default CustomersProfile