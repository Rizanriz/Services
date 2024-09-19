import React, { useEffect } from 'react';
import { account } from './AppWrite'; // Import the account instance
import { useNavigate } from 'react-router-dom'; // For redirection
import google from '/google.svg'

const Auth = () => {
  const navigate = useNavigate();

  // Google OAuth Login Function
  const handleGoogleLogin = async () => {
    console.log("Google login button clicked");
    try {
      await account.createOAuth2Session('google', 'http://localhost:5173','http://localhost:5173');
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  // Check if the user is already logged in
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await account.get();
        if (user) {
          console.log("User is logged in:", user);
          navigate('/'); // Redirect to home if already logged in
        }
      } catch (error) {
        console.error("No user logged in:", error.message);
      }
    };
    checkLoginStatus();
  }, [navigate]);

  return (
    <> 
      <button onClick={handleGoogleLogin}>
          <img src={google} alt="google" className='w-10 h-10' />
      </button>
    </>
  );
};

export default Auth;
