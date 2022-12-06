import CountryDetails from "./CountryDetails"

const CountriesList = ({ search }) => {
  if (search.length === 1) {
    return (
      <div>
        <CountryDetails search={search}/>
      </div>
    )
  } else if (search.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else {
    return (
      <div>
        <ul>
          {search.map(country => <li key={country.cca2}>{country.name.common}</li>)}
        </ul>
      </div>
    )
  }
}

export default CountriesList