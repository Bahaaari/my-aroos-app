import React from 'react'
import "./ChoosingButton.css"

const ChoosingButton = ({title}:any) => {
  return (
    <div>
        <button className='text-sm p-4 relative tab'>{title}</button>
    </div>
  )
}

export default ChoosingButton