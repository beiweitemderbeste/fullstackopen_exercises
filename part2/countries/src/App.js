import { useState, useEffect } from 'react'

import axios from "axios"

import Search from "./components/Search"
import CountriesList from "./components/CountriesList"

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")

  const search = countries.filter(country => country.name.common.startsWith(searchCountry))

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data))
  }, [])

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
  }

  return (
    <div>
      <Search searchCountry={searchCountry} handleSearchChange={handleSearchChange} />
      <CountriesList search={search} />
    </div>
  )
}

export default App
