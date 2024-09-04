import React from 'react';

const TopNavbar = () => {
  return (
    <div className='bg-navyblue text-white'>
      <ul className='flex justify-between items-center p-4 md:px-6'>
        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>Home</li>
        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
          Sitemap
        </li>
        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
          Contact Us
        </li>
        <li className='hidden md:inline-block hover:bg-skyblue transition-colors'>
          Tourism News
        </li>
        <li className='hover:bg-skyblue transition-colors'>
          Wildlife Streaming
        </li>
        <li className='hover:bg-skyblue transition-colors'>
          About Us
        </li>
        <li className='hover:bg-skyblue transition-colors'>
          Tourism Hostline 1912
        </li>
        <li className='hover:bg-skyblue transition-colors'>
          Select Language
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
