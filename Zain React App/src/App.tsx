import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Start from './components/Start'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Start />
    </div>
  )
}

export default App
