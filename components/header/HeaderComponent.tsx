import React from 'react'
import Navbar from './Navbar';
import TopBar from './Topbar';

const HeaderComponent = () => {
  return (
    <div className='px-8 pt-8 pb-1 '>
    <TopBar />
    <Navbar />
    </ div>
  )
}

export default HeaderComponent