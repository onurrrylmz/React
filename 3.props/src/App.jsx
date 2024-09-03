import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {
  
  const productName = "Buzdolabı";

  return (
    <div>
      <Product productName="Ayakkabı" price={3200}/>

      <hr />

      <Product productName="Pantolon" price={950}/>

      <hr />

      <Product productName="Gömlek" price={850} />
      
    </div>
    
  )
}

export default App
