import FooterComponent from '@/components/footer/FooterComponent'
import HeaderComponent from '@/components/header/HeaderComponent'
import ExpertsProfile from '@/components/expertsProfile/ExpertsProfile'
import React from 'react'

const page = () => {
  return (
    <main className="mx-4">
        <HeaderComponent />
        <ExpertsProfile />
        <FooterComponent />
    </main>
  )
}

export default page