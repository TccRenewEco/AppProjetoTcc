import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { TopMenu } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const NaviM = useNavigate()
  return (
    <>
      <TopMenu/>

    </>
  )
}

export default App
