import React from 'react'
import Navbar from './Navbar';
import TopBar from './Topbar';

const HeaderComponent = () => {
  return (
    <div className='pt-8'>
      <TopBar />
      <Navbar />
    </div>
  )
}

export default HeaderComponent
