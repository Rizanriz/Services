import React from 'react'
import Button from '../complaints/Button'

function FranchiceDetails({ name, description, FranchiseeName }) {
    return (
        <div className='px-3'>
            <div className="w-full mx-auto mb-4 bg-slate-200 text-gray-600 shadow-lg rounded-lg overflow-hidden">
                <div className="p-4 flex flex-row flex-wrap items-center border-b-2 gap-4">
                    <div className="w-12 h-12 bg-gray-300 text-black rounded-full flex items-center justify-center text-xl font-bold">
                        {name[0]}
                    </div>
                    <div>
                        <h2 className="text-xl text-black font-bold">{FranchiseeName}</h2>
                        <p>{name}</p>
                    </div>
                    <div className='ml-auto'>
                        <Button onClick={() => console.log('Chat/Call clicked')}
                            variant={'primary'} >
                            <div className="flex items-center justify-center px-6 lg:px-28 sm:px-16 gap-2">
                                Chat/Contact
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="p-4">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FranchiceDetails