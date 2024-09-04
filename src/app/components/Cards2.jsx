import React from 'react';
import Image from 'next/image'; 

const cardTwo = [
    {
      image: "/assets/card2.1.jpg",
      description: "Things to see and Do"
    },
    {
      image: "/assets/card2.2.jpg",
      description: "Find a travel Agent"
    },
    {
      image: "/assets/card2.3.jpg",
      description: "Apply Srilankan Visa Online"
    },
    {
        image: "/assets/card2.4.jpg",
        description: "Book a Flight"
    },
    {
        image: "/assets/card2.5.jpg",
        description: "Find Your Accomodation"
    },
    {
        image: "/assets/card2.6.jpg",
        description: "Find a tour Guide"
    },
    {
        image: "/assets/card2.7.jpg",
        description: "Find a tour Driver"
    },
    {
        image: "/assets/card2.8.jpg",
        description: "Camping Sites"
    },
    {
        image: "/assets/card2.9.jpg",
        description: "Blacklisted Service Providers"
    }

  ];

const Cards2 = () => {
  return (
    <div className='py-12 bg-white-100'>
    
      <div className="flex flex-col justify-center items-start w-full px-6 md:px-12 py-8 bg-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Plan Your Dream Holiday</h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-2">
        Each day on this island promises new experiences, discoveries, and life-long memories. With so much to do,let us help you with these itineraries created just for you!
        </p>
          <button className="px-4 py-2 bg-teal-500 text-white text-lg rounded-lg">
            View All
          </button>
      </div>

    
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {cardTwo.map((features, index) => (
          <div 
            key={index} 
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer max-w-xs w-full'
          >
            <Image
              src={features.image} 
              alt="" 
              className='w-full h-72 object-cover'
            />
            <div className='p-4 text-center'>
              <p className='text-gray-600 text-xl' >{features.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards2;
