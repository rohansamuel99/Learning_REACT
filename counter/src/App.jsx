import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <NavBar />
      <div className="card">
        <p>
          Multi-purpose counters
        </p>
      </div>
    </>
  )
}

export default App
