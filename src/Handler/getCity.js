require("dotenv").config();

export function getCity(city) {
    return new Promise(async (resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod == 404) return reject({Error: data.message});

            const { main, sys, weather, wind } = data
            if(weather != undefined) {
                const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

                const ret = {
                    name: city,
                    temp: main.temp,
                    feels_like: main.feels_like,
                    country: sys.country,
                    wind:wind['speed'],
                    weather: weather[0]['description'],
                    icon: icon
                }

                return resolve(ret)
            } 
            return reject()
        })
    })
}