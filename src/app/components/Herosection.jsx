import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { BiSearch } from 'react-icons/bi'; // Import the BiSearch icon

const Herosection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section relative w-full h-[500px]">
        <Image
          src="/assets/hero.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}  // Use inline style to set objectFit
          className="w-full h-full"  // Ensure the image covers the container
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

      {/* Hero Text Section */}
      <div className="flex flex-col justify-center items-start w-full px-6 md:px-12 py-8 bg-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Sri Lanka</h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-2">
          See what&apos;s waiting for you on your next island getaway.
        </p>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          Savour the unique experiences this island treasure has to offer.
        </p>
      </div>
    </>
  );
};

export default Herosection;
