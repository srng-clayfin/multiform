import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactForm from './Components/ReactForm'

export const App = () =>
 {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <ReactForm/>
    </div>
  )
}
