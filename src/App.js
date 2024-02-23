import { useState } from 'react'
import Form from './Components/Form'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")


  return (
    <div>
      <h1>Introduction to React</h1>
      <Form />
    </div>
  )
}

export default App