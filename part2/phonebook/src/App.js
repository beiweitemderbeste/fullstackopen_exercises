import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 123 }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {name: newName, number: newNumber}
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App