import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseClasses = "py-2 px-4 rounded-full transition-colors";
  const variantClasses = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-200 text-gray-600 hover:bg-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
