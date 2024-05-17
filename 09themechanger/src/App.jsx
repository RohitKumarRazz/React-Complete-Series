
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/Theme'

function App() {
  
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual theme change

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <h1 className='p-4 bg-pink-600 text-white text-3xl'>Rohit Kumar</h1>
     
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
          </div>
      </div>

    </ThemeProvider>
  )
}

export default App
