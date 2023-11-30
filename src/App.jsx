import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Guide from './components/Guide';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>How To Deploy A Vite + React App</h1>
      <Guide />
    </div>
  )
}

export default App
