import React from 'react'
import CustomerProfile, { ProfileData } from '@/components/element/CustomerProfile';
import taherian from '../../../public/images/profile/customers/taherian.jpg'

const Taherian = () => {
    const userData: ProfileData = {
    firstName: "المیرا",
    lastName: "طاهریان",
    email: "taherian.elmira@gmail.com",
    landline: "021-88888722",
    mobile: "09127715653",
    birthDate: "1373/02/17",
    gender: "زن",
    address: "تهران - طرشت - خیابان بیست - کوچه لادنی - ساختمان صراف - واحد 65",
    image: taherian,
  };

  return (
    <div className=''>
        <CustomerProfile data={userData}/>
    </div>
  )
}

export default Taherian