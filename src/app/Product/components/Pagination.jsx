import React from 'react'
import { HiArrowCircleLeft,HiArrowCircleRight } from 'react-icons/hi'

function Pagination() {
  return (
    <div className='flex items-center justify-center gap-1 w-full hidden'>
        <div>
            <HiArrowCircleLeft className='text-2xl text-nutral2 cursor-pointer' />
        </div>
        <div>
            <HiArrowCircleRight className='text-2xl text-nutral2 cursor-pointer' />
        </div>
    </div>
  )
}

export default Pagination