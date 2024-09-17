import React, { useEffect, useState } from 'react';
import logo from "/LOGO.png"
import arrow from "/arrow.svg"
import google from "/googlee.svg"
import location from "/location.svg"
import axios from 'axios';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [currentLocation,setCurrentLocation] = useState({})
  const [currentLocationGeo,setCurrentLocationGeo] = useState({})

  useEffect(()=>{
    // getLocation()
    // getGeoLocation()
  },[])

  const getLocation = async()=>{ //ONE WAY
       const location = await axios.get("https://ipapi.co/json")
       setCurrentLocation(location.data)
       console.log(currentLocation.city);
  }

  // const getGeoLocation = () =>{
  //   navigator.geolocation.getCurrentPosition((position)=>{
  //     console.log(position);
  //     const {latitude,longitude} = position.coords
  //     setCurrentLocationGeo({latitude,longitude})
  //   })
  // } 

  return (
    <div className='bg-light-gray h-screen text-black flex flex-col justify-center items-center px-4'>
      <div className='mb-10 text-center'>
        <img src={logo} alt="logo" className='w-20 h-24 mx-auto' />
        <h1 className='text-2xl font-bold'>Service Connect</h1>
      </div>

      <div className='flex flex-col gap-4 w-full max-w-sm'>
        <h2 className='text-xl font-semibold'>{isSignUp ? 'Getting Started.!' : 'Welcome Back!'}</h2>
        <input type="text" placeholder='Email' required className='p-4 w-full rounded-2xl bg-medium-gray' />
        <input type="password" placeholder='Password' required className='p-4 w-full rounded-2xl bg-medium-gray' />
        
        {isSignUp && (
          <input type="password" placeholder='Confirm Password' required className='p-4 w-full rounded-2xl bg-medium-gray' />
        )}

        <p className='text-sm'>
          <input type="checkbox" /> Agree to Terms & Conditions
        </p>

        <button className='bg-slate-900 flex justify-between items-center p-4 text-black rounded-full mt-4'>
          <h1 className='text-white'>{isSignUp ? 'Sign In' : 'Login'}</h1>
          <img src={arrow}  alt="arrow" className='w-12 bg-white rounded-full py-3 px-3' />
        </button>
      </div>

      <div className='mt-5'>
        <p className='text-sm'>Or Continue With</p>
        <div className='flex gap-3 mt-3'>
          <button>
            <img src={google} alt="google" className='w-10 h-10' />
          </button>
          <button onClick={getLocation}>
            <img src={location} alt="google" className='w-10 h-10' />
          </button>
          <div className='flex flex-col ml-5'>
          <h1>{currentLocation.city}</h1>
          <h1>{currentLocation.latitude}</h1>
          <h1>{currentLocation.longitude}</h1>
          </div>
        </div>
      </div>

      <p className='mt-5'>
        {isSignUp ? 'Already have an Account?' : "Don't have an account?"} 
        <span 
          className='text-blue-600 cursor-pointer ml-1'
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Login' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
}

export default SignUp;
