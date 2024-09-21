import React, { useState } from 'react';
import { LuTrendingUp } from "react-icons/lu";

const PaymentHistoryTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-800';
      case 'pending':
        return ' text-gray-500';
      case 'canceled':
        return 'text-red-800';
    }
  };

  return (
    <div className='h-screen bg-slate-100'>
      <div className="w-full max-w-4xl mx-auto p-4 h-fit bg-slate-300 text-black mt-10">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 ">
              <th className="p-2 text-center">ID</th>
              <th className="p-2 text-center">Date</th>
              <th className="p-2 text-center">Amount</th>
              <th className="p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="border-b ">
                <td className="p-4 flex justify-center">
                  <div className='bg-slate-400 pt-3 rounded-full w-10 h-10 flex justify-center me-3'><LuTrendingUp /></div>
                  <div className='mt-2'>{item.id}</div></td>
                <td className="p-4 text-center">{item.date}</td>
                <td className="p-4 text-center">{item.amount}</td>
                <td className="p-4 text-center">
                  <span className={` px-3 py-1 rounded-full text-md ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            &lt;
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === page + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1 rounded hover:bg-gray-200 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentHistoryTable;