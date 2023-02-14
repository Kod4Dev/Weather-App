import React from 'react'

import Box from './Box'
import Button from './Button'

function ResultComponent({ infos = {}, changePage, page }) {
  return (
    <>
        <div className='absolute top-28 w-full m-auto text-center md:top-48'>
            <div className='text-textColor font-bold text-[36px] mb-4 md:w-full'>{infos.name}</div>
            <div className='flex flex-col justify-center items-center m-auto w-full md:flex-row md:w-[70%] md:flex md:flex-wrap'>
                <Box title="Temperatura" body={`${infos.temp} ° C`} classes={"mb-4 mx-4"} />
                <Box title="Sensação Térmica" body={`${infos.feels_like} ° C`} classes={"mb-4 mx-4"} />
                <Box title="Velocidade do Vento" body={`${infos.wind} m/s`} classes={"mb-4 mx-4"} />
                <Box title={infos.weather} body={infos.icon} classes={"mb-4 mx-4"} isImg={true} />
            </div>
        </div>
        <Button text="Realizar nova busca" onClick={changePage} page={page} />
    </>
  )
}

export default ResultComponent