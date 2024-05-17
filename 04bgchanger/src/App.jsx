import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      > <h1 className="text-center" style={{color: 'white', fontSize:40, fontWeight:600, fontFamily:"cursive"}}>BackGround Changer</h1>
        <div className="flex  flex-wrap justify-center shadow-lg bottom-12 insert-x-0 px-x2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={ () => setColor("red")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "red", color:"white"}}>Red</button>
            <button onClick={ () => setColor("green")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "green", color:"white"}}>Green</button>
            <button onClick={ () => setColor("white")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "white", color:"black"}}>White</button>
            <button onClick={ () => setColor("orange")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "orange", color:"white"}}>Orange</button>
            <button onClick={ () => setColor("pink")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "pink", color:"white"}}>Pink</button>
            <button onClick={ () => setColor("blue")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "blue", color:"white"}}>Blue</button>
            <button onClick={ () => setColor("black")} className="outline-none px-4 rounded-full shadow-lg" style={{backgroundColor: "black", color:"white"}}>black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
