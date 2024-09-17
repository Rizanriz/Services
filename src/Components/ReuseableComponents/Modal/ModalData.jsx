import React from 'react';
import Card from '../Card/Card';

const ModalData = ({ title, dis, isVisible, onClose }) => {
  if (!isVisible) return null; // If not visible, don't render anything

  return (
    <div>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md  text-black'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <button onClick={onClose} className='text-gray-600 hover:text-gray-800'>
            &#x2715; 
          </button>
        </div>

        <div className='mb-4'>
          {dis}
        </div>

        <div className='flex justify-end'>
          <button 
            onClick={onClose} 
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
              Close
          </button>
        </div>
      </div>
      </div>
      <Card/>
    </div>
  );
};

export default ModalData;


