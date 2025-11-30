import FooterComponent from '@/components/footer/FooterComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import ServiceDetail from '@/components/serviceDetail/ServiceDetail'
import React from 'react'

const page = () => {
  return (
    <main className="p-4 mx-4">
        <HeaderComponent />
        <ServiceDetail />
        <FooterComponent />
    </main>
  )
}

export default page