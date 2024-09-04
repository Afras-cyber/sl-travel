"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const images = [
  "/assets/wildlife.jpg",
  "/assets/thrills.jpg",
  "/assets/festive.jpg",
  "/assets/pristine.jpg",
  "/assets/bliss.jpg", 
  "/assets/heritage.jpg",
  "/assets/scenic.jpg",
  "/assets/essence.jpg",
  "/assets/sigiriya.jpg"
];

const Gallery = () => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4'>
      {images.map((src, index) => (
        <div key={index} className='mb-4 break-inside-avoid'>
          <Image
            src={src}
            alt={`Image ${index}`}
            width={500} // Adjust the width according to your needs
            height={300} // Adjust the height according to your needs
            className='w-full object-cover rounded-lg'
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
