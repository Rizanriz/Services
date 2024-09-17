import React from 'react'
import Form from '../ReuseableComponents/Form/Form'
import Table from '../ReuseableComponents/Table/Table';

const fieldConfigs = [
    { name: 'fullname', label: 'Full Name', placeholder: 'Enter your full name', type: 'text', required: true },
    { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text', required: true },
    { name: 'dob', label: 'Date of Birth', placeholder: 'Enter your date of birth', type: 'date', required: true },
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true },
    { name: 'mobile', label: 'Mobile', placeholder: 'Enter your mobile number', type: 'tel', required: true },
    { name: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', required: false },
    { name: 'housename', label: 'House Name', placeholder: 'Enter your house name', type: 'text', required: true },
    { name: 'landmark', label: 'Landmark', placeholder: 'Enter landmark', type: 'text', required: true },
    { name: 'pincode', label: 'Pincode', placeholder: 'Enter your pincode', type: 'text', required: true },
    { name: 'district', label: 'District', placeholder: 'Enter your district', type: 'text', required: true },
    { name: 'state', label: 'State', placeholder: 'Enter your state', type: 'text', required: true }
  ];  

  const buttonConfig = {
    label:"continue",
    type:"Submit",
    btnWidth:"90%",
    btnHeight:"50px"
  }
  const InputConfig = {
    inputWidth:"100%",
    inputHeigth:"50px"
  }

 const getApiEndpoints = async (FormData)=>{
    try {
      await new Promise((resolve) => setTimeout(resolve,1000))
      console.log("Form date:" , FormData);
      return {success:true ,data:FormData}
    } catch (error) {
      console.error("Eroor:" ,error);
      return {success:false, error:error.message}
    }
  }

const FormPage = () => {
  return (
    <div className='flex justify-center pt-10 pb-10'>
        <Form 
        fieldConfigs={fieldConfigs} 
        buttonConfig={buttonConfig} 
        InputConfig={InputConfig}
        getApiEndpoints={getApiEndpoints}/>
    </div>
  )
}

export default FormPage