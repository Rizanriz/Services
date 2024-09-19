import React from 'react';
import SignUp from '../../User/SignUp';
import axios from 'axios';
import location from "/location.svg";

const Location = () => {

  const getLocation = async () => {
    try {
      console.log("Fetching location...");
      const response = await axios.get("https://ipapi.co/json");
      console.log("Current location:", response.data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div>
      <button onClick={getLocation}>
        <img src={location} alt="location" className='w-10 h-8 mt-1' /> 
      </button>
    </div>
  );
}

export default Location;