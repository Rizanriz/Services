import React from 'react';

const InputField = ({name,type,placeholder,value,onChange,onBlur,error,touched,inputWidth,inputHeigth}) => {
  return (
    <div className="flex flex-col">
      {/* <label className="font-heading text-dark-gray">{label}</label> */}
      <input
        className="px-4 py-3 mt-1 rounded-md border border-light-gray bg-white font-input text-black focus:outline-none"
        style={{ width: inputWidth, height: inputHeigth }}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
