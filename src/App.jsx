import React from 'react'
import FormPage from './Components/Pages/FormPage'
import SignIn from './Components/User/SignIn'
import SignUp from './Components/User/SignUp'
import { Route, Routes } from 'react-router-dom'
// import Table from './Components/ReuseableComponents/Table'
import TableData from './Components/ReuseableComponents/TableData'

const App = () => {
  return (
    <div className='bg-dark-gray h-full text-light-gray'>
      <Routes>
        <Route path='/' element={<FormPage/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/login/signup' element={<SignUp/>}/>
        <Route path='/table' element={<TableData/>}/>
      </Routes>
    </div>
  )
}

export default App