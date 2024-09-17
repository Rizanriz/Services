import React, { useState } from 'react';
import ModalData from './ModalData'; // Import the ModalCard component

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

    const [dis,setDis] = useState("weifwoefoiwoeifjOWIEJFPoiwejO")
    const title = "helloooooo"

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <button onClick={handleOpenModal} 
        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
        Open Modal</button>

      <ModalData 
        title={title} 
        dis={dis}
        isVisible={isModalVisible}
        onClose={handleCloseModal}/>
    </div>
  );
};

export default App;
