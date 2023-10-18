import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul>
            <li> menu </li>
            <li> home </li>
            <li> about </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App
