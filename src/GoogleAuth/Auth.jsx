import React, { useEffect } from 'react';
import { account } from './AppWrite'; // Import the account instance
import { useNavigate } from 'react-router-dom'; // For redirection
import SignUp from '../Components/User/SignUp'; // Import your SignUp component

const Auth = () => {
  const navigate = useNavigate();

  // Google OAuth Login Function
  const handleGoogleLogin = async () => {
    console.log("Google login button clicked");
    try {
      await account.createOAuth2Session('google', 'http://localhost:3000', 'http://localhost:3000');
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
    <div> 
      <SignUp handleGoogleLogin={handleGoogleLogin} /> {/* Pass the handleGoogleLogin prop */}
    </div>
  );
};

export default Auth;
