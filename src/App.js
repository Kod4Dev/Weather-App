import React, {  useState, useEffect } from "react";

import Title from './Components/Title';
import { FooterComponent } from './Footer';
import SearchComponent from "./Components/SearchComponent";
import ResultComponent from "./Components/ResultComponent";

import { getCity } from "./Handler/getCity";


function App() {

  const [city, setCity] = useState("");
  const [infos, setInfos] = useState([]);
  const [page, setPage] = useState(1)
  const [messageError, setMessageError] = useState("")

  const changeCity = e => {
    setMessageError("")
    setCity(e.target.value)
  }

  const getCityInfos = () => {
    if (!city) return setMessageError("Digite o nome de alguma cidade antes de proseguir!");

    getCity(city)
      .then(cityInfos => { setInfos(cityInfos); changePage();  })
      .catch(() => setMessageError("Erro ao buscar a cidade"))
      .finally(() => {
        setCity(""); 
      });
  }

  const changePage = () => {
    if (page == 1) return setPage(2);
    if (page == 2) return setPage(1);
  }

  return (
    <div className={`${(page == 2) ? "h-[150vh] md:h-[100vh]" : "h-[100vh]"} w-full bg-bg-color overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100`}>
      <Title text="Weather App" />
      {
        (page == 2) ? 
          <ResultComponent infos={infos} changePage={changePage} page={page} /> :
          <SearchComponent changeCity={changeCity} getCityInfos={getCityInfos} city={city} messageError={messageError} />
      }
    </div>
  );
}

export default App;
