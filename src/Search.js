import { useState } from "react";

export function Search() {

    const [cidade, setCidade] = useState("");

    function searchInput(e) {
        e.preventDefault();
        let currentValue = document.querySelector('input[name=searchInput]').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=d0cb5901ba0e4e8fa48ee407808f3ac2&units=metric&lang=pt_br`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather, coord, dt } = data
            const dateToday = new Date(dt * 1000);
            if(weather != undefined) {
                const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
                setCidade(`
                    <div class='text-center text-gray-500 flex flex-col items-center justify-center'>
                        <p>Temperatura Atual: <span class='font-bold'>${main.temp} ºC</span></p>
                        <p>Lat: <span class='font-bold'>${coord.lat} | Long: ${coord.lon}</span></p>
                        <p>Data: <span class='font-bold'>${dateToday.toLocaleDateString('pt-br')}</span></p>
                        <p>Nome da Cidade: <span class='font-bold'>${name} - ${sys.country}</span></p>
                        <p>Descrição do Clima: <span class='font-bold'>${weather[0]['description']}</span></p>
                        <img src="${icon}" />
                    </div>
                `);
            } else {
                setCidade("")
            }
        })
    }

    return(
        <div>
            <div className="text-center flex justify-center flex-col w-[30%] m-auto ">
                <h2 className="font-sans text-gray-400 mt-[40px] text-xl">Weather App</h2>
                <p className="font-sans text-gray-400 mb-4 tex-md">Digite abaixo a cidade que deseja procurar...</p>
                <form onSubmit={(e) => searchInput(e)} className="flex flex-col justify-center items-center mb-10">
                    <input type="text" name="searchInput" placeholder="Digite a cidade..." className="w-full border-2 border-cyan-300 flex-1 text-gray-800 text-xs placeholder:text-gray-400 outline-none flex items-center h-12 gap-3 py-4 px-3 rounded focus-within:ring-2 ring-cyan-500"/>
                    <input type="submit" value="Pesquisar" className='py-2 px-2 bg-cyan-500 rounded font-semibold text-gray-800 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white mt-1' />
                </form>
            </div>
            {
                (cidade != "")?
                <div className="text-center w-[50%] m-auto rounded shadow-lg bg-cyan-300">
                    <h2 className="text-md text-gray-500 mb-5">Sua busca retornou...</h2>
                    <div dangerouslySetInnerHTML={{__html: cidade}} />
                </div>:
                <div className="text-center text-md text-gray-400 ">Nenhuma cidade na busca!</div>
            }
        </div>
    )
}