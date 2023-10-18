import { useState } from 'react'
import './index.css'
import Counter from './components/counter'
import Login from './components/login'
import ListHewan from './components/listHewan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter /> */}
    {/* <Login /> */}
    <ListHewan />
      {/* <header>
        <nav>
          <ul>
            <li> menu </li>
            <li> home </li>
            <li> about </li>
          </ul>
        </nav>
      </header> */}
    </>
  )
}

export default App
