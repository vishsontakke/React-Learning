import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       < Card/>
    </>
  )
}

export default App
