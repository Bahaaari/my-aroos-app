import FooterComponent from '@/components/footer/FooterComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import Register from '@/components/shoppingCart/Register'
import React from 'react'

const page = () => {
  return (
    <main className="p-4 mx-4">
        <HeaderComponent />
        <div className='bg-gray-100'>
        <Register />
        </div>
        <FooterComponent />
    </main>
  )
}

export default page