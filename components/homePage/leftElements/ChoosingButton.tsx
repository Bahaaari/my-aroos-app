import { title } from 'process'
import React from 'react'

const ChoosingButton = ({title}:any) => {
  return (
    <div>
        <button className='text-sm p-4'>{title}</button>
    </div>
  )
}

export default ChoosingButton