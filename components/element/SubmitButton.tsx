import React from 'react'

const SubmitButton = ({title}:any) => {
  return (
    <div className='w-full' >
        <button className='w-full bg-[#EE4466] text-white rounded-full p-1 text-xs'>{title}</button>
    </div>
  )
}

export default SubmitButton
