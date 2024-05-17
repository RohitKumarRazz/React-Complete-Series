
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className='text-white bg-black p-4 text-xl w-600'>Todos</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
