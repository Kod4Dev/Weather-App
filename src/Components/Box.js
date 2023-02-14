import React from 'react'

function Box({ title, body, classes, isImg }) {
  return (
    <div className={`w-[259px] h-[259px] bg-borders border border-hover flex flex-col justify-center text-white font-bold md:w-[500px] ${classes}`}>
      <div className='w-full text-center text-[32px] first-letter:uppercase'>
        {title}
      </div>
      <div className='w-full text-center text-[48px] flex justify-center'>
        {
          isImg ? 
            <img src={body} alt={`Imagem dizendo que está ${title}`} className='text-center flex justify-center fill-hover' /> :
          body
        }
      </div>
    </div>
  )
}

export default Box