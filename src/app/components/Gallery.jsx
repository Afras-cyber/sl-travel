"use client";

import React from 'react';
import Image from 'next/image'; 
import { motion } from 'framer-motion';

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
        <motion.div
          key={index}
          className='mb-4 break-inside-avoid'
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
        >
          <Image
            src={src}
            alt={`Image ${index}`}
            width={500} 
            height={300} 
            className='w-full object-cover rounded-lg'
          />
        </motion.div>
      ))}
    </div>
  );

};

export default Gallery;
