import Profile from '@/components/element/ExpertProfile'
import React from 'react'
import ashtianiPhoto from '../../../../public/images/expertProfile/experts/ashtianiPhoto.jpg'

const Ashtiani = () => {
  return (
    <main>
        <Profile
           src={ashtianiPhoto}
           alt='عکس نمونه'
           description={[
            "امیرعلی آشتیانی",
            "تهران",
            "آرایشگر"
           ]} />
    </main>
  )
}

export default Ashtiani