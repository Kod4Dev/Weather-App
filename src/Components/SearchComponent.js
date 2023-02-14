import React from 'react'

import SearchInput from './SearchInput'
import Button from './Button'

function SearchComponent({ changeCity, messageError, city, getCityInfos }) {
  return (
    <>
        <SearchInput text="Digite o nome da cidade" onChange={changeCity} messageError={messageError} city={city} />
        <Button text="Buscar" onClick={getCityInfos} />
    </>
  )
}

export default SearchComponent