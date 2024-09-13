import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Form = ({ fieldConfigs, buttonConfig, InputConfig, getApiEndpoints }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    fieldConfigs.forEach((field) => {
      if (field.required && !formData[field.name]) {
        validationErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return; 
    }
    console.log('Form data:', formData);
    setFormData({});  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', 
    });
  };

  return (
    <div className="shadow-md shadow-gray-600 p-5">
      <div>
        <h1 className="text-center font-medium">Enter data</h1>
        <img
          className="w-2/6 pb-5 mx-auto"
          src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
          alt="profile"
        />
      </div>
      <form onSubmit={handleSubmit} className="text-black">
        {fieldConfigs.map((field) => (
          <div key={field.name} className="mb-4">
            <InputField
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
              inputWidth={InputConfig.inputWidth}
              required={field.required}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p> 
            )}
          </div>
        ))}
        
        <div className="flex justify-center pt-5">
          <Button
            label={buttonConfig.label}
            type={buttonConfig.type}
            btnWidth={buttonConfig.btnWidth}
            btnHeight={buttonConfig.btnHeight}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
