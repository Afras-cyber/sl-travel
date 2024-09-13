import React, { useState } from 'react';
import Link from 'next/link';

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='bg-navyblue text-white'>
      <ul className='flex justify-between items-center p-4 md:px-6'>
        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
          <Link href="/">Home</Link>
        </li>

        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
          <Link href="./sitemap">SiteMap</Link>
        </li>

        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
          <Link href="./contact">Contact Us</Link>
        </li>

        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
        <Link href="./news">Tourism News</Link>
        </li>

        <li className='hover:bg-skyblue transition-colors'>
        <Link href="https://www.youtube.com/live/4ldGML1veG4?si=K0V-useUz8JQPbek" target="_blank" rel="noopener noreferrer">
         Wildlife Streaming
        </Link>
        </li>

        <li className='hover:bg-skyblue transition-colors'>
          <Link href="./about">About Us</Link>
        </li>

        <li className='hover:bg-skyblue transition-colors'>
          Tourism Hotline 1912
        </li>
        
        {/* Language Dropdown */}
        <li className='relative'>
          <button
            onClick={toggleDropdown}
            className='hover:bg-skyblue transition-colors p-2 focus:outline-none flex items-center'
          >
            Select Language
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className='absolute top-full right-0 bg-blue-900 text-white mt-1 shadow-lg'>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>English</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>Sinhala</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>Tamil</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>French</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
