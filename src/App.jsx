import { useState  } from 'react'
import Display from '../components/Display'
import Button from '../components/Button'
import './App.css'

function App() {
  const [displayvalue, setDisplayvalue] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)

//Click handling
  function handleButtonClick(value) {
    if(!isNaN(value) || value === ".") {
      
    setDisplayvalue(prev => 
      prev === "0" ? value : prev + value
    )} else if(["+", "-", "x", "÷", "%"].includes(value)) {
      setPreviousValue(displayvalue);
      setDisplayvalue("0");
      setOperation(value);
    } else if( value === "=") {
      if(previousValue && operation) {
        const result = computeResult();
        setDisplayvalue(result.toString());
        setPreviousValue(null)
        setOperation(null);
      }
    }
  }

 // Clear display area
  function handleClear() {
    setDisplayvalue("0")
  }

// Operation function
function computeResult() {
  const a = parseFloat(previousValue)
  const b = parseFloat(displayvalue)

  switch (operation) {
    case "+":
      return a + b;
      breack;
    case "-":
      return a - b;
      breack;
    case "x":
      return a * b;
      breack;
    case "÷":
      return  b !== 0 ? a / b : "Error" ;
      breack;
    case "%":
      return a % b;
      breack;
    default:
      return b;
      break;
  }


}

  

  return (
    <>
      <Display value={displayvalue} />
      <Button onButtonClick={handleButtonClick} onClear={handleClear} />
    </>
  )
}

export default App
