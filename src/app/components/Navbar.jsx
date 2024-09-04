"use client";

import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import TopNavbar from './TopNavbar';


const Navbar = () => {
const [nav, setNav] = useState(false)
const [logo, setLogo] = useState(false)
const handleNav = () => {
    setNav (!nav);
    setLogo (!logo)
}

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
        <li>What's New</li>
        <li>What to do</li>
        <li>Where to go</li>
        <li>Plan your Trip</li>
        <li>Upcoming Events</li>
        <li>What the world has to say</li>
      </ul>

      <div className='hidden md:flex'>
       <BiSearch />
      </div>

     {/*Hamburger menu */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black'  size={28}/> : <HiOutlineMenuAlt4 size={28} /> }
      </div>

      {/*mobile menu dropdown */}
      <div onClick={handleNav} className= {nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' :'absolute left-[-100%] top-0'}>
        <ul>
            <h1>Srilanka</h1>
        <li className='border-b text-center'>What's New</li>
        <li className='border-b text-center'>What to do</li>
        <li className='border-b text-center'>Where to go</li>
        <li className='border-b text-center'>Plan your Trip</li>
        <li className='border-b text-center'>Upcoming Events</li>
        <li className='border-b text-center'>What the world has to say</li>
        </ul>
      </div>
    </div>

    {/* Hero Section */}
    <div className="hero-section relative w-full h-[500px]">
        <img
           src="/assets/hero.jpg"
           alt="Hero Background"
           className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">AN ISLAND ESCAPE</h1>
          <p className="text-4xl md:text-6xl font-bold mb-4">AWAITS YOU</p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-3/4 md:w-1/2">
            <input
              type="text"
              placeholder="Search for destinations..."
              className="w-full px-4 py-2 text-black rounded-l-full focus:outline-none"
            />
            <BiSearch size={28} className="text-gray-500" />
          </div>
        </div>
      </div>
      
      {/* h1 and p elements under the hero section */}
      <div className="flex flex-col justify-center items-start w-full px-6 md:px-12 py-8 bg-white">
         <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Sri Lanka</h1>
             <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-2">
                See what's waiting for you on your next island getaway.
            </p>
             <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Savour the unique experiences this island treasure has to offer.
            </p>
      </div>
    </>
  )
}

export default Navbar
