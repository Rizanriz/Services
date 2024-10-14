import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import { CiCircleChevLeft } from 'react-icons/ci';
import { SlOptionsVertical } from "react-icons/sl";
import { FaShareFromSquare } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";

function NavbarHead() {
    const location = useLocation(); // Get the current location
    const navigate = useNavigate(); // Get the navigate function
    const pathParts = location.pathname.split('/');
    const pathName = pathParts[1] || 'Home'; // Second part or fallback to 'Home'
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    // Capitalize the first letter of the pathname and lowercase the rest
    const formattedPathName = pathName.charAt(0).toUpperCase() + pathName.slice(1).toLowerCase().replace(/-/g, ' ');

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
    };

    return (
        <nav className="bg-dark-gray w-full h-[80px] flex items-center px-4 justify-between">
            <div className='flex items-center'>
                <button onClick={() => navigate(-1)} className="text-primary text-2xl">
                    <CiCircleChevLeft className="h-[40px] w-[40px]" />
                </button>
                <p className="text-[21px] text-primary text-center font-default font-semibold ml-2">
                    {formattedPathName}
                </p>
            </div>
            {formattedPathName === 'Receipt' && (
                <div className="relative">
                    <button onClick={handleToggleDropdown} className="text-white">
                        <SlOptionsVertical className="h-[24px] w-[24px]" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 me-3 w-40 bg-light-gray text-black border border-gray-300 rounded shadow-lg ">
                            <ul className="flex flex-col p-2">
                                <li className="hover:bg-white cursor-pointer p-2 flex items-center gap-3" onClick={() => alert('Share clicked')}>Share <FaShareFromSquare /></li>
                                <li className="hover:bg-white cursor-pointer p-2 flex items-center gap-3" onClick={() => alert('Download clicked')}>Download <FiDownload /></li>
                                <li className="hover:bg-white cursor-pointer p-2 flex items-center gap-3" onClick={() => alert('Print clicked')}>Print <IoPrintOutline /></li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}

export default NavbarHead;
