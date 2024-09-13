import React from 'react'
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Image from 'next/image';


const page = () => {
  return (
    <div>
      <>
      <Navbar/>
       
       {/*hero image */}
      <div className="hero-section relative w-full h-[500px]">
        <Image
          src="/assets/about.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}  
          className="w-full h-full"  
        />
      </div>

      <div className="flex flex-col lg:flex-row p-10 space-y-10 lg:space-y-0 lg:space-x-10">
      {/* History Section */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-2xl font-bold text-blue-800">History</h1>
        <p className="text-sm mt-8">
          In 1966, the government decided to develop tourism in a planned and systematic manner, 
          after identifying the need to set up an institutional framework. the ceylon tourist board 
          (created by the ceylon tourist board act no. 10 of 1966) and the ceylon hotels corporation 
          (created by ceylon hotels corporation act of 1966) were set up duly.
        </p>
        <p className="text-sm mt-8">
          Created to promote rapid economic development, through the development of foreign tourism, 
          the ceylon tourist board (ctb) was a statutory body that allowed greater freedom in decision 
          making and flexibility in financial management.
        </p>
        <p className="text-sm mt-8">
        The legislation also covered the establishment of a national holiday resort company, which planned
        various types of accommodation and resort areas. Moreover it included the setting up of an authority
        under the Tourist Board to manage and administer each resort. The Act conferred powers for the
        Protection of Highways and Places of Scenic Beauty and vested authority in the Ceylon Tourist Board
        for the Registration and Classification of Tourist Hotels and all other tourist services including
        travel agencies. The Tourist Development Act of 1968 provided the Ceylon Tourist Board with
        the statutory authority to develop tourism on a planned and controlled basis
        </p>
        <p className="text-sm mt-8">
          in october 2007 the tourism act no 38 of 2005 came into effect. with the circulation of the 
          new tourism act, the sri lanka tourist board act no 10 of 1966, which was in effect for the 
          past 41 years, was replaced.
        </p>
        <p className="text-sm mt-8">
        In terms of the provisions contained in the new act, the Tourism Development Fund was legally
        constituted, with 2 main sources remitting finances to the fund. By way of 1/3 of the Airport
        Tax collections and 1% of the Turnover of all Sri Lanka Tourist Board registered establishments.
        The Act provided for the setting up of the Sri Lanka Tourism Development Authority, 
        Sri Lanka Promotions Bureau, Sri Lanka Convention Bureau and Sri Lanka Institute of 
        Hotel Management, thereby replacing the Sri Lanka Tourist Board.
        </p>
      </div>

      {/* Sidetable Section */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-800">Plan Your Visit</h2>
        <ul className= "text-sm">
          <li>Suggested Itineraries</li>
          <li>Online Services</li>
          <li>Travel Agents</li>
          <li>Accommodation</li>
          <li>Transport</li>
          <li>Tour Guides</li>
          <li>Events</li>
          <li>Visitors Say</li>
          <li>Attractions</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    <Footer/>
      </>
    </div>
  )
}

export default page

