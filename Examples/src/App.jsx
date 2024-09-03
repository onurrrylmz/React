import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[sayi,setSayi] = useState("0")


  return (
    <div>
      <p>{sayi}</p>
      <button onClick={()=>setSayi(sayi+1)}>Arttır</button>
      <button onClick={()=>setSayi(sayi-1)}>Azalt</button>
    </div>
  )
}

export default App
