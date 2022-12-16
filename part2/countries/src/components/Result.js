import CountryDetails from "./CountryDetails"

const Result = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length === 1) {
    return (
      <CountryDetails country={countries[0]} />
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