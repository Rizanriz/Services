import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="flex items-center h-screen ">
      <div className="rounded overflow-hidden shadow-lg bg-white p-3">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 text-black">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
