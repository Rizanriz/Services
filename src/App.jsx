import React from 'react'
import FormPage from './Components/Pages/FormPage'
import SignIn from './Components/User/SignIn'
import SignUp from './Components/User/SignUp'
import { Route, Routes } from 'react-router-dom'
import TableData from './Components/ReuseableComponents/Table/TableData'
import Card from './Components/ReuseableComponents/Card/ModelCard'
import Modal from './Components/ReuseableComponents/Modal/Modal'
import Home from './Components/Pages/Home'
import OTPVerification from './Components/User/OPTVerification'
import PaymentData from './Components/ReuseableComponents/Table/PaymentData'
import Complaint from './Components/complaints/complaint'
import FranchiceDetails from './Components/franchiseeDetails/FranchiceDetails'
import PaymentPage from './Components/ReuseableComponents/Razorpay'
import Ereceipt from './Components/E-receipt/Ereceipt'
import CheckoutSuccess from './Components/E-receipt/CheckoutSuccess'
import NavbarHead from './Components/nav/navbar'

const App = () => {
  return (
    <div className='text-light-gray'>
      <NavbarHead/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/login/signup' element={<SignUp/>}/>
        <Route path='/table' element={<TableData/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/opt' element={<OTPVerification/>}/>
        <Route path='/paymentdata' element={<PaymentData/>}/>
        <Route path='/complaint' element={<Complaint/>}/>
        <Route path='/franshice' element={<FranchiceDetails/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/receipt' element={<Ereceipt/>}/>
        <Route path='/CheckoutSuccess' element={<CheckoutSuccess/>}/>
      </Routes>
    </div>
  )
}

export default App