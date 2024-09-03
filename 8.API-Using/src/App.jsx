import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const Base_Url = "http://localhost:3001"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(Base_Url + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(Base_Url + "/users" + userId)
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    //POST: veri eklemek için kullanılır.
    const response = await axios.post(`${Base_Url}/users`, newUser)
    console.log("response", response.data)
  }

  const updateUser = async(userId,updatedUser)=>{
    //PUT:veri güncellemek için kullanılır
    //ALT gr+ iki kere virgüle basılacak
    const deletedResponse = await axios.put(`${Base_Url}/users/${userId}`,updateUser)
    console.log(deletedResponse.data)
  }

  const deleteUserById = async(userId)=>{
    const response = await axios.delete(`${Base_Url}/users/${userId}`)
    console.log(response.data)
  }

  useEffect(() => {

    //getAllUsers()

    //getUserById(1)

    // const newUser = {
    //   "username": "batuhan",
    //   "password": "sxxx"
    // }

    // createUser(newUser)

    // updateUser("4f6a", {
    //   "username":"orhan",
    //   "password":"xxy"
    // })

    deleteUserById("4f6a")

    


  }, [])

  

  return (
    <div>

    </div>
  )
}

export default App
