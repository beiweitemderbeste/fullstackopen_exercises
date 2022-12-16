import { useState, useEffect } from 'react'

import axios from "axios"

import Search from "./components/Search"
import Result from "./components/Result"

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")

  
  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
    const filteredCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
    setCountries(filteredCountries)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setAllCountries(response.data))
  }, [])

  return (
    <div>
      <Search searchCountry={searchCountry} handleSearchChange={handleSearchChange} />
      <Result countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App