import React from 'react';
import OTPInput from '../ReuseableComponents/OTPverification/OPTInputs';

const OTPVerification = () => {
  const handleOtpComplete = (otp) => {
    console.log('OTP Entered:', otp);
    // Add your OTP verification logic here
  };

  return (
    <div className="bg-slate-300 text-black h-screen w-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-6">Enter OTP</h2>
      <OTPInput length={4} onComplete={handleOtpComplete} />
    </div>
  );
};

export default OTPVerification;