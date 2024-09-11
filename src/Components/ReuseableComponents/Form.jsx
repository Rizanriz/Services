import React, { useState } from 'react'
import InputField from './InputField'

const Form = ({fieldConfigs,buttonConfig,InputConfig}) => {

  const [formData, setFormData] = useState({});


  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(formData);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className='w-2/6 shadow-md shadow-gray-600  p-5'>
      <div>
        <h1 className='text-center font-medium'>Enter data</h1>
        <img className='w-2/6 pb-5 mx-auto' src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="" />
      </div>
      <form onSubmit={handleSubmit} className='text-black'>
      {fieldConfigs.map((field) => (
        <div key={field.name} className="mb-4 ">
          <label htmlFor={field.name} className="block text-sm font-medium text-white">
            {field.label}
          </label>
          <input 
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
      ))}
      <div className='flex justify-center'>
      <button 
        type="submit"
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-secondary transition-all duration-300">
        Submit
      </button>
      </div>
    </form>
    </div>
  )
}

export default Form