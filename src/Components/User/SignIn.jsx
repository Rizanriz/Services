import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const SignIn = () => {

  const navigate = useNavigate()
  return (
    <div className="bg-dark-gray min-h-screen flex flex-col justify-center items-center pt-36">
      <div className='relative w-full h-full flex flex-col justify-center items-center'>

        <img src="./Oval.png" alt="Oval" className='absolute object-contain w-auto h-auto z-0' />
        <img src="./SHAPE.png" alt="Shape" className='absolute object-contain w-[500px] z-10' />
        <img src="./LOGO.png" alt="Logo" className='relative top-4 object-contain w-auto z-20' />

        <div className='text-white text-lg font-medium mt-2 z-30 text-center relative left-7 bottom-8'>
          <h1 >Service Connect</h1>
          <h3 >Let's grow with our community</h3>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full mt-40 text-xl'>
        <Link to={"signup"} className='bg-white w-3/4 lg:w-1/4 h-16 flex justify-left pl-4 items-center gap-3 rounded-full'>
          <img src="./call.svg" alt="Login with Email/Phone" />
          <h1 className='text-black'>Login with Email/Phone</h1>
        </Link>

        <button className='bg-emerald-50 w-3/4 lg:w-1/4 h-16 flex justify-left items-center pl-4 gap-3 text-black rounded-full mt-4'>
          {/* <img src="./google.svg" alt="Login with Google" /> */}
          {/* <h1 className='text-white'>Login with Google</h1> */}
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
              navigate('/')
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </button>
      </div>

    </div>
  )
}

export default SignIn
