import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
//  let counter = 5
 const addValue = () => {
  console.log("clicked",counter);
  //counter = counter+1;
  // setCounter(prevCounter => prevCounter+1)
  // setCounter(prevCounter => prevCounter+1)
  // setCounter(prevCounter => prevCounter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  setCounter(counter+1)
 }
 const removeValue = () => {
  console.log("clicked", counter)
  setCounter(counter-1)
 }

  return (
    <>
     <h1>This is the second project of react</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue} 
     >Add value{counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
