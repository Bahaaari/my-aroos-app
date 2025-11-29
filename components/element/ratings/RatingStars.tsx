import React from 'react'
import Image from 'next/image'
import star from '../../../public/images/star.png'

const RatingStars = () => {
  return (
    <div>
        <Image src={star} alt='star' />
    </div>
  )
}

export default RatingStars