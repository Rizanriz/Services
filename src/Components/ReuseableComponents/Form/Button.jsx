import React from 'react';

const Button = ({ 
  label, 
  type = "button", 
  disabled = false, 
  btnWidth = '100%', 
  btnHeight = '50px' 
}) => {

  return (
    <button
      type={type}
      disabled={disabled}
      className="flex items-center rounded-full bg-green-500 p-4 text-black font-default hover:bg-green-600 transition-all duration-300 disabled:opacity-50"
      style={{ width: btnWidth, height: btnHeight }}
    >
      <span className="flex-grow text-center">{label}</span>
      <img src="./arrowright.svg" className="ml-auto w-8 h-8" alt="arrow" />
    </button>
  );
};

export default Button;
