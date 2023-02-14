import React from 'react'

function Button({ text, onClick, page }) {
  return (
    <div className='w-full m-auto flex justify-center h-full'>
        <button className={`${(page != 2) ? "fixed bottom-5": "fixed bottom-1 md:bottom-5"} mx-4 bg-primary w-96 rounded text-center font-bold text-white py-3 hover:bg-hover`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button