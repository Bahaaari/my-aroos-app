
import CustomersProfile from '@/components/customersProfil/CustomersProfile'
import FooterComponent from '@/components/footer/FooterComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import React from 'react'

const page = () => {
  return (
    <main className=''>
      <HeaderComponent/>
      <CustomersProfile />
      <FooterComponent />
    </main>
  )
}

export default page