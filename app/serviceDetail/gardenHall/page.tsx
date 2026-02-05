import FooterComponent from '@/components/footer/FooterComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import ServiceGardenHall from '@/components/serviceDetail/serviceGardenHall/ServiceGardenHall'
import React from 'react'

const page = () => {
  return (
    <main className="p-4 mx-4">
        <HeaderComponent />
        <ServiceGardenHall />
        <FooterComponent />
    </main>
  )
}

export default page