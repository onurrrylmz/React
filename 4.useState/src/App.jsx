import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Stirng tckn = "4512451274521"
  //String name = "Onur"

  //useState : hooks yukardakinin reacttaki karşılığı

  const [firstName, setFirstName] = useState('Onur'); //const diye firstname tanımladık ve bu değeri boş bir değer olarak girdik. setFirstName de değişiklik yapma metodu
  const [lastName, setLastName] = useState('Yılmaz'); //Dilersen tek tırnak dilersen çift tırnak. Sona da ; koymak zorunda değilim

  return (

    <div>
      <div>{firstName} {lastName}</div>
      <div> <button onClick={()=>{setFirstName("Ayşe")}}>İsmi Değiştir</button></div>
    </div>
  )
}



// export default App

// function App(){
    
//   const handleChange = ()=>{
//       debugger;
//       setFirstName("Ayşe")
//   }

//   return(

//   <div>
//       <div>{firstName}</div>
//       <div><button onClick={handleChange}>İsmi Değiştir</button></div>
//   </div>
// )

// }

// export default App








// function App() {

//   //Stirng tckn = "4512451274521"
//   //String name = "Onur"

//   //useState : hooks yukardakinin reacttaki karşılığı

//   const [firstName, setFirstName] = useState(''); //const diye firstname tanımladık ve bu değeri boş bir değer olarak girdik. setFirstName de değişiklik yapma metodu
//   const [lastName, setLastName] = useState("")
//   const [names, setNames] = useState(["Onur","Ayşe","Batuhan"]) //Dilersen tek tırnak dilersen çift tırnak. Sona da ; koymak zorunda değilim

//   console.log(names)

//   return (

//     <div>
//       {names.map(names,index)}
//     </div>
//   )
// }


