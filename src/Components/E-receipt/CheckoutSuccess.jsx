import React from 'react'

const CheckoutSuccess = () => {
  return (
    <div className='bg-gray-700 flex justify-center items-center flex-row min-h-screen '>
        <div className='font-semibold text-2xl text-center'>
            <div className='mb-5 ml-2'>
                <img src="/Done.png" alt="" width={"300vw"} />
            </div>
            <h2>Service Registration Successful</h2>
            <h2>Go to email </h2>
            <div className='mt-10'>
                <button>Back to Home</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutSuccess