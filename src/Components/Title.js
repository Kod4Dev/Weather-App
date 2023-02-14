import React from 'react'

function Title({ text }) {
  return (
    <div className='text-center w-full absolute top-[29px] font-medium mb-16'>
        <span className='text-[40px] text-white'>{text}</span>
    </div>
  )
}

export default Title