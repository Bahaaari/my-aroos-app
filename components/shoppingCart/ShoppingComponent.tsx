import React from 'react'
import Products from './Products'
import ShoppingCartMenu from './ShoppingCartMenu'
import BillSummary from './elements/BillSummary'

const ShoppingComponent = () => {
  return (
    <div className='bg-gray-100'>
        <ShoppingCartMenu />
        <div className='px-8 py-8 bg-white mx-16'>
          <Products />
          <BillSummary />
        </div>
    </div>
  )
}

export default ShoppingComponent