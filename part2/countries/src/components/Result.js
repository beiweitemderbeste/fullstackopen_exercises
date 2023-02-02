
import CountryDetails from "./CountryDetails"
import CountryWeather from "./CountryWeather"

const Result = ({ countries, setCountries }) => {

  

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length === 1) {
    return (
      <div>
        <CountryDetails country={countries[0]} />
        <CountryWeather country={countries[0]} />
      </div>
    )
  } else {
    return (
      <div>
        <ul>
          {countries.map(country => <li key={country.cca2}>{country.name.common}<button onClick={() => setCountries([country])}>show</button></li>)}
        </ul>
      </div>
    )
  }
}

export default Result