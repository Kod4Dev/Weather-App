import React from 'react'

function SearchInput({ text, onChange, messageError, city }) {
  return (
    <div className='absolute top-[350px] flex justify-center w-full flex-col m-auto items-center'>
        <input placeholder={text} value={city} className='w-[319px] bg-transparent border border-borderColor rounded px-[12px] py-3 placeholder:text-scrollbar placeholder:font-[650] outline-none text-white text-[15px]' onChange={onChange} />
        {
            messageError ? 
                <span className='text-red text-[12px] text-center mt-4 font-extrabold'>{messageError}</span> :
                <span className='text-center w-[60%] text-[13px] text-textColor mt-[20px] font-semibold'>Para realizar a busca, basta colocar o nome da cidade e clicar em buscar</span>
        }
    </div>
  )
}

export default SearchInput