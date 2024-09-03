import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName,setFirstName]=useState('');
  const [lastName, setLastName]=useState('')
  
  useEffect(()=>{
    console.log("Her zaman çalışır")
  })

  useEffect(()=>{
    console.log("ilk render elde edildiğinde çalışır")
    //veritabanından ürünleri getir ve listele
  }, [])

  // useEffect(()=>{
  //   console.log("İlk render edildiğinde ve firstname state değeri değiştiğinde çalışır")
  // },[firstName])

  // useEffect(()=>{
  //   console.log("İlk render edildiğinde ve lastname state değeri değiştiğinde çalışır")
  // }, [lastName])

  useEffect(()=>{
    console.log("İlk render edildiğinde ve firstname veya lastname state değerlerinde değişiklik olduğunda çalışır")
  },[firstName,lastName])


  return (
    <div>
      <div><button onClick={()=>setFirstName}>Adı Değiştir</button></div>
      <div><button onClick={()=>setLasttName}>Soyadı Değiştir</button></div>
    </div>
  )
}

export default App
