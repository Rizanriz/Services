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
      className="rounded-full bg-dark-gray p-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50"
      style={{ width: btnWidth, height: btnHeight }}
    >
      <span className="flex-grow text-center">{label}</span>
      <img src="./buttonArrow.svg" className="ml-2 w-8 h-8" alt="arrow" />
    </button>
  );
};

export default Button;
