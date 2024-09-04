import React from 'react';

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
          <img src={src} className='w-full object-cover rounded-lg' alt={`Image ${index}`} />
        </div>
      ))}
    </div>

    
  );
};

export default Gallery;
