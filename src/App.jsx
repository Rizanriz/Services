import React from 'react'
import FormPage from './Components/Pages/FormPage'
import SignIn from './Components/User/SignIn'
import SignUp from './Components/User/SignUp'
import { Route, Routes } from 'react-router-dom'
import TableData from './Components/ReuseableComponents/Table/TableData'
import Card from './Components/ReuseableComponents/Card/ModelCard'
import Modal from './Components/ReuseableComponents/Modal/Modal'
import Home from './Components/Pages/Home'

const App = () => {
  return (
    <div className='bg-dark-gray h-full text-light-gray'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/login/signup' element={<SignUp/>}/>
        <Route path='/table' element={<TableData/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
    </div>
  )
}

export default App