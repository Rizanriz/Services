import React from 'react';
import arrow from "/arrow.svg";

const Button = ({ text }) => {
  return (
    <button type="submit" className='flex justify-between items-center gap-52 p-3 text-black bg-bluee rounded-full hover:bg-blue-950'>
      <h1 className='text-white ml-3 text-xl'>{text}</h1>
      <img src={arrow} alt="arrow" className='w-12 bg-white rounded-full py-3 px-3' />
    </button>
  );
};

export default Button;