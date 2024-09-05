import React from 'react'
import Image from 'next/image'; 

const cardFour = [
    {
      image: "/assets/ramayana.jpg",
      title: "RAMAYANA YATHRA"
    },
    {
      image: "/assets/budhdhist.jpg",
      title: "BUDHDHIST PLACES"
    },
    {
      image: "/assets/wellness.jpg",
      title: "WELLNESS TOURISM"
    }
];

const Cards3 = () => {
  return (
    <div className='py-12 bg-white-100'>
      <div className="flex flex-col justify-between items-start w-full px-6 md:px-12 py-8 bg-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore Island Stories</h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-2">
            Each place, and each smile in Sri Lanka has a story to tell. We<br />
            have so much to share with you, so come along to our island in<br /> 
            Paradise!
        </p>

        <button className="px-4 py-2 border-2 border-teal-500 text-teal-500 text-lg rounded-xl hover:bg-teal-500 hover:text-white transition duration-300">
         EXPLORE MORE
       </button>

      </div>
      
      <div className='px-4 sm:px-6 lg:px-8 xl:px-12'>
      <h2 className='text-4xl font-bold text-left mb-8'>New Products</h2>
    
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {cardFour.map((products, index) => (
          <div 
            key={index} 
            className='relative bg-white shadow-md overflow-hidden cursor-pointer max-w-xs w-full'
          >
            <div className='relative w-full h-60'> {/* Fixed height for consistency */}
            <Image
            src={products.image} 
            alt="" 
            width={500} 
            height={300}
            className='w-full h-72'
            style={{ objectFit: 'cover' }}
/>

              <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2'>
                <p className='text-xl'>{products.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Cards3
