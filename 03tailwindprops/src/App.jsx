import { useState } from 'react'



import Card from './Card.jsx'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>tail wind test</h1>
     <Card />
    </>
  )
}

export default App
