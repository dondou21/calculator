import { useState  } from 'react'
import Display from '../components/Display'
import Button from '../components/Button'
import './App.css'

function App() {
  const [displayvalue, setDisplayvalue] = useState("0")

  function handleButtonClick(value) {
    setDisplayvalue(prev => prev + value)
  }

  return (
    <>
      <Display value={displayvalue} />
      <Button onButtonClick={handleButtonClick} />
    </>
  )
}

export default App
