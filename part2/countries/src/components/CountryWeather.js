import { useState, useEffect } from "react"

import axios from "axios"

const CountryWeather = ({ country }) => {

  const [weather, setWeather] = useState()
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}&units=metric`)
    .then(response => setWeather(response))
  }, [])

  console.log(weather)

  return (
      <div>
        <h2>Weather in {country.capital}</h2>
      </div>
  )

}

export default CountryWeather