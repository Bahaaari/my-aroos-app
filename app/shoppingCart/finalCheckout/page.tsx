import FooterComponent from '@/components/footer/FooterComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import FinalCheckout from '@/components/shoppingCart/FinalCheckout'
import React from 'react'

const page = () => {
  return (
    <main className="p-4 mx-4">
        <HeaderComponent />
        <div className='bg-gray-100'>
        <FinalCheckout />
        </div>
        <FooterComponent />
    </main>
  )
}

export default page