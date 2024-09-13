import React, { useState } from 'react';
import Table from './Table';

const TableData = () => {
  const [data, setData] = useState([
    {
      name: 'John Doe',
      id: 1,
      date: '2024-09-12',
      completedServices: 5,
      location: 'New York',
      contact: 'john@example.com',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      id: 2,
      date: '2024-09-11',
      completedServices: 3,
      location: 'Los Angeles',
      contact: 'jane@example.com',
      status: 'Inactive',
    },
  ]);

  const handleAddNewItem = () => {
    const newItem = {
      name: 'New User',
      id: data.length + 1,
      date: new Date().toISOString().split('T')[0], // Current date 
      completedServices: 0,
      location: 'Unknown',
      contact: 'newuser@example.com',
      status: 'Active',
    };
    setData([newItem, ...data]); 
  };

  const handleEdit = (id) => {
    console.log('Edit item with id:', id);
    //edit functionality here
  };
  const handleDelete = (id) => {
    console.log('Edit item with id:', id);
    // delete functionality here
  };
  
  return (
    <div>
      <Table data={data} 
      handleAddNewItem={handleAddNewItem} 
      handleEdit={handleEdit} 
      handleDelete={handleDelete} />
    </div>
  );
};

export default TableData;
