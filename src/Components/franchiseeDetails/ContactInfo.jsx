import React from 'react'

function ContactInfo({ contactData }) {
    return (
    <>
     <div className='px-3'>
        <div className="mt-4 w-full mx-auto bg-slate-200 text-gray-600 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 border-b">
                <h3 className="text-lg text-black font-semibold">Contact info</h3>
            </div>
            <div className="p-4">
                {contactData.map((item, index) => (
                    <div key={index} className="mb-2">
                        <strong>{item.label} : </strong> {item.value}
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
    )
}

export default ContactInfo