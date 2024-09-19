import React, {  useState } from 'react';
import logo from "/LOGO.png";
import arrow from "/arrow.svg";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import Auth from '../../GoogleAuth/Auth';


const SignUp = ({getLocation}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      // form submission logic
      console.log({ email, password, confirmPassword });
    }
  };

  return (
    <div className='bg-light-gray h-screen text-black flex flex-col justify-center items-center px-4'>
      <div className='mt-3 text-center flex'>
        <img src={logo} alt="logo" className='w-20 h-24 mx-auto me-3' />
        <h1 className='text-2xl font-bold mt-2 me-3'>Service Connect</h1>
      </div>

      <form className='flex flex-col gap-4 w-full max-w-sm' onSubmit={handleSubmit}>
          <h2 className='text-xl font-semibold ml-3'>Login to your account </h2>

        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-4 w-full rounded-2xl bg-medium-gray'
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-4 w-full rounded-2xl bg-medium-gray'
            required
          />
          <span className="absolute right-3 top-5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}>
               {showPassword ? <GrHide /> : <BiShow />}
          </span>
        </div>

        <div className='flex justify-between'>
          <p>
            <input type="checkbox" /> Remember Me
          </p>
          <a href="/opt">Forgot Password...!</a>
        </div>

        <button type="submit" className='bg-bluee flex justify-between items-center p-3 text-black rounded-full mt-4'>
          <h1 className='text-white ml-3 font-default text-xl'>Sign In</h1>
          <img src={arrow} alt="arrow" className='w-12 bg-white rounded-full py-3 px-3' />
        </button>
      </form>

      <div className='mt-5'>
        <p className='text-sm'>Or Continue With</p>
        <div className='flex gap-10 mt-5'>
          <Auth/>
          <FaApple className='w-9 h-9' />
        </div>
      </div>

    </div>
  );
}

export default SignUp;
