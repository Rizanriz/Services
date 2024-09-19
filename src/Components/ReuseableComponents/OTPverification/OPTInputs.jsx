import React, { useState, useRef, useEffect } from 'react';
import Button from '../Button';

const OTPInput = ({ length, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }

    if (newOtp.every(v => v !== '') && index === length - 1) {
      onComplete(newOtp.join(""));
    }
  };

  const handleNumberClick = (number) => {
    const emptyIndex = otp.findIndex(v => v === "");
    if (emptyIndex !== -1) {
      const newOtp = [...otp];
      newOtp[emptyIndex] = number.toString();
      setOtp(newOtp);
      if (inputRefs.current[emptyIndex + 1]) {
        inputRefs.current[emptyIndex + 1].focus();
      }
      if (newOtp.every(v => v !== '')) {
        onComplete(newOtp.join(""));
      }
    }
  };

  const handleDeleteClick = () => {
    const lastFilledIndex = otp.map(v => v !== "").lastIndexOf(true);
    if (lastFilledIndex !== -1) {
      const newOtp = [...otp];
      newOtp[lastFilledIndex] = "";
      setOtp(newOtp);
      inputRefs.current[lastFilledIndex].focus();
    }
  };

  const handleResendClick = () => {
    // Implement resend OTP logic here
    setTimer(30); // Reset timer
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="mb-4 text-center">
        <p className="text-sm">
          {timer > 0 ? `Resend OTP in ${timer}s` : (
            <button onClick={handleResendClick} className="text-dark_blue">
              Resend OTP
            </button>
          )}
        </p>
      </div>

      <div className="flex justify-center gap-3  mb-8">
        {otp.map((data, index) => {
          return (
            <input
              key={index}
              type="text"
              ref={(ref) => (inputRefs.current[index] = ref)}
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center text-xl bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_blue"
            />
          );
        })}
      </div>

      <Button text="Verify" />

      <div className="grid grid-cols-3 gap-x-14 gap-y-5 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "←"].map((number, index) => (
          <button
            key={index}
            onClick={() => {
              if (number === "←") {
                handleDeleteClick();
              } else if (number !== "*") {
                handleNumberClick(number);
              }
            }}
            className="w-16 h-16 bg-slate-400 rounded-full text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-dark_blue"
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
