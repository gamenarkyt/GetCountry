import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState('')
  const [info, setInfo] = useState()
const checkips = () => {
  const fetchData = async () => {
    const {data} = await axios.get("https://api.ipapi.is/?q=217.30.10.68")
    setInfo(data)
    console.log(data);
  }
  fetchData()
}

  return (
    <div>
      <span>{info && info.ip}</span>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)}/>
    <button onClick={checkips}>check</button>
    </div>
  )
}

export default App
