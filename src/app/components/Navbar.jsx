"use client";

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import TopNavbar from './TopNavbar';
import Image from 'next/image'; // Import Image from next/image

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <>
      <div className="top-navbar">
        <TopNavbar />
      </div>

      <div className='main-navbar flex justify-between items-center h-20 px-4'>
        <div>
          <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}> Srilanka</h1>
        </div>

        <ul className='hidden md:flex'>
          <li>What&apos;s New</li>
          <li>What to Do</li>
          <li>Where to Go</li>
          <li>Plan Your Trip</li>
          <li>Upcoming Events</li>
          <li>What the World has to Say</li>
        </ul>

        <div className='hidden md:flex'>
          <BiSearch />
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose className='text-black' size={28}/> : <HiOutlineMenuAlt4 size={28} />}
        </div>

        {/* Mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%] top-0'}>
          <ul>
            <h1>Srilanka</h1>
            <li className='border-b text-center'>What&apos;s New</li>
            <li className='border-b text-center'>What to Do</li>
            <li className='border-b text-center'>Where to Go</li>
            <li className='border-b text-center'>Plan your Trip</li>
            <li className='border-b text-center'>Upcoming Events</li>
            <li className='border-b text-center'>What the world has to Say</li>
          </ul>
        </div>
      </div>

      
    </>
  );
}

export default Navbar;
