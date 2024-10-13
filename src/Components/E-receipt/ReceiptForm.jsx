import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const ReceiptForm = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5">
      <div className="p-4">
        <div className="flex justify-center items-center mb-10 text-black">
          <img src="/Receipt.png" alt="" />
        </div>
        
        <div className="mb-8 flex justify-center">
          <img src="/BAR CODE.png" alt="Barcode" className=" h-24 w-3/4 " />
        </div>
        
        {data.map((item, index) => (
          <div key={index} className="flex text-sm text-gray-600 justify-between py-2 border-b border-gray-200 last:border-b-0">
            <span className="text-gray-900 me-3">{item.label} :</span>
            {item.label === 'TransactionID' ? (
              <div className="flex items-center ">
                <span className="font-semibold mr-2">{item.value}</span>
                <button 
                  onClick={() => copyToClipboard(item.value)}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  title={copied ? "Copied!" : "Copy to clipboard"}
                >
                  <FaCopy size={16} />
                </button>
              </div>
            ) : item.label === 'Status' ? (
              <div className={`font-semibold px-2 text-black ${item.value.toLowerCase() === 'paid' ? 'bg-green-600' : 'bg-red-600'}`}>
                {item.value}
              </div>
            ) : (
              <span className="font-semibold">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptForm;

