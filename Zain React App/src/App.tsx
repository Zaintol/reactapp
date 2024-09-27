import { useState, createContext } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Start from './components/Start'
export const userContext = createContext<{value: string,setValue: (value: string)=>void}>({value: '',setValue: ()=>{}})
 
function App() {
  const [value, setValue] = useState("guest")
  const [count, setCount] = useState(0)
  return (
    <userContext.Provider value={{value,setValue}}>
      <BrowserRouter>
        <div className="App">
          <Start />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  )
}

export default App
