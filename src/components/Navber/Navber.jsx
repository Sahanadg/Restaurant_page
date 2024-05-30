/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaCaretDown, FaUser } from "react-icons/fa";

const Navlinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 1,
        name: "About",
        link: "/#",
    },
    {
        id: 1,
        name: "Contact", 
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "/#",
    },
    {
        id: 2,
        name: "Fruits",
        link: "/#"
    },
    {
        id: 3,
        name: "Grains",
        link: "/#",
    },
];

const Navber = ({ handleOrderPopup }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div  data-aos = "fade" className="bg-white shadow-sm">
            <div className="container flex justify-between py-4 sm:py-3">
                {/* logo section */}
                <div className='font-bold'>Logo</div>
                {/* Navlinks section */}
                <div>
                    <ul className='flex items-center gap-10'>
                        {Navlinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <a
                                    href={link}
                                    className=  "hidden sm:inline-block hover:text-primary text-xl font-semibold"
                                >
                                     {name}
                                </a>
                            </li>
                        ))}
                        {/* simple dropdown and links */}
                        <li className=" hidden md:block cursor-pointer group">
                            <a
                                href="/#"
                                className="inline-block hover:text-primary text-xl font-semibold"
                                onClick={toggleDropdown}
                            >
                                <div className="flex items-center gap-[2px] py-2">
                                    Dropdown
                                    <span>
                                        <FaCaretDown className={`duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </span>
                                </div>
                            </a>
                            {/* Dropdown section */}
                            {isDropdownOpen && ( 
                                <div className="absolute z-[9999] w-[200px] bg-white text-black shadow-md p-2">
                                    <ul>
                                        {DropdownLinks.map(({ id, name, link }) => (
                                            <li key={id}>
                                                <a
                                                    href={link}
                                                    className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        {/*  Login button section */}
                        <li>
                            <button onClick={handleOrderPopup}
                            className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                                <FaUser />
                                My Account
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;
