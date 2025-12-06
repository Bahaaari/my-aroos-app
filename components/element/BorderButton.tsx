import React from 'react'

const BorderButton = ({title}:any) => {
  return (
    <div className='w-full' >
        <button className='w-full border border-[#EE4466] text-xs rounded-full p-1'>{title}</button>
    </div>
  )
}

export default BorderButton
