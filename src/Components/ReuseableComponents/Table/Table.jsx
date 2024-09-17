import React, { useState } from 'react';

const Table = ({ data, handleAddNewItem, handleEdit, TableHead }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState(null);

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort data by date
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortDirection === 'asc') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortDirection === 'desc') {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  // Handle sorting
  const handleSort = (direction) => {
    setSortDirection(direction);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-7xl">
        <div className="mb-5 flex justify-between items-center ">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border text-black border-gray-500 rounded-md"
          />

          <div>
            <button onClick={() => handleSort('asc')} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
              Oldest
            </button>
            <button onClick={() => handleSort('desc')} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Newest
            </button>
            <button onClick={handleAddNewItem} className="px-4 py-2 bg-green-500 text-white rounded-md ml-4">
              Add New Item
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                {
                  TableHead.map((item,i) => (
                    <th className='font-serif text-xl p-2'>{item.header}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody className="text-black text-sm font-light">
              {sortedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-400"
                >
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    {item.id}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    {item.date}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    {item.completedServices}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    {item.location}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    {item.contact}
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-center font-semibold">
                    <span
                      className={`py-1 px-3 rounded-full text-xs ${item.status === 'Active'
                          ? 'bg-green-200 text-green-600'
                          : 'bg-red-200 text-red-600'
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => handleEdit(item.id)}
                    >Edit</button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 ms-3 rounded hover:bg-red-700"
                      onClick={() => handleDelete(item.id)}
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
