const CountryDetails = ({ search }) => {
  const country = search[0]
  const languages = Object.values(search[0].languages)

  console.log(country.flags.png)

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h4>languages:</h4>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt="flag"></img>
    </div>
  )
}

export default CountryDetails