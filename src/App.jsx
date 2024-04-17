import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='font-bold p-2 text-green-400'>hello world</h1>
     <Navbar />
     <Signup/>
    </>
  )
}

export default App
