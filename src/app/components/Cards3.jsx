import React from 'react'
import Image from 'next/image'; 


const cardThree = [
    {
      image: "/assets/wilpattu.jpg",
      description: "Wilpattu National Park Wildlife streaming"
    },
    {
      image: "/assets/international.jpg",
      description: "International Endorsements"
    },
    {
      image: "/assets/shows.jpg",
      description: "Greatest Shows on the Earth"
    },
    {
        image: "/assets/sltpb.jpg",
        description: "SLTPB Promotional Kit"
    }
  ];
const Cards3 = () => {
  return (
    <div className='py-12 bg-white-100'>
      <div className='px-4 sm:px-6 lg:px-8 xl:px-12'>
      <h2 className='text-4xl font-bold text-left mb-8'>What&apos;s New</h2>
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
        {cardThree.map((specialities, index) => (
          <div 
            key={index} 
            className='bg-white rounded-lg overflow-hidden cursor-pointer max-w-xs w-full'
          >
            <Image
              src={specialities.image} 
              alt="" 
              width={500} 
              height={300}
              className='w-full h-72 object-cover '
            />
            <div className='p-4 text-left'>
              <p className='text-gray-600 text-xl'>{specialities.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Cards3
