import { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Start from './components/Start'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Start />
      </div>
    </BrowserRouter>
  )
}

export default App
