import React from 'react';

const cardOne = [
  {
    image: "/assets/visa.jpg",
    description: "Update on Srilankan tourist visa process"
  },
  {
    image: "/assets/bes-desti.jpg",
    description: "The best destinations to travel to in 2023 mentions Srilanka as one of the tourist hotspots this year"
  },
  {
    image: "/assets/golden-paradise.jpg",
    description: "Golden Paradise visa- Department of Immigration and Emigration Srilanka"
  }
];

const Cards1 = () => {
  return (
    <div className='py-12 bg-white-100'>
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {cardOne.map((features, index) => (
          <div 
            key={index} 
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer max-w-xs w-full'
          >
            <img 
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
  );
};

export default Cards1;
