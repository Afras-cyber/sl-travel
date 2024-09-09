"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import { FaPhone, FaFax, FaMapMarkerAlt, FaEnvelope, FaUser } from 'react-icons/fa'; 
import Image from 'next/image';


export const ContactUs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-left mb-8">Contact Us</h2>

      <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-10">
        {/* Contact Details */}
        <div className="lg:w-1/3 bg-white p-6 shadow-md rounded-md mb-6 lg:mb-0">
          <h3 className="text-3xl font-bold text-blue-900 mb-2">DIAL 1912</h3>
          <p className="text-gray-600 mb-4">
            DIAL 1912 from any phone within Sri Lanka to access tourism information.
          </p>
          
          <div className="mb-4">
            <h4 className="font-bold text-blue-900">Sri Lanka Tourism Head Office</h4>
            <p className="text-gray-600 flex items-center mb-2">
              <FaPhone className="mr-2 text-blue-900" /> 
              +94 112426900
            </p>
            <p className="text-gray-600 flex items-center mb-2">
              <FaFax className="mr-2 text-blue-900" /> 
              +94 112 440001 / 2426984
            </p>
            <p className="text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-900" /> 
              No. 80, Galle Road, Colombo 03, Sri Lanka.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="lg:w-2/3">
          {isClient && (
            <iframe
              id="gmap_canvas"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=520&amp;height=500&amp;hl=en&amp;q=No.%2080,%20Galle%20Road,%20Colombo%2003,%20Sri%20Lanka.+(Sri%20Lanka%20Tourism%20Head%20Office)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

const contactDetails = [
  {
    name: "Sri Lanka Tourism Promotion Bureau",
    phone: "+94 112426900",
    fax: "+94 112440001",
  },
  {
    name: "Sri Lanka Tourism Development Authority",
    phone: "+94 112426900",
    fax: "+94 112440001",
  },
  {
    name: "Chairman's Office",
    phone: "+94 112437759",
    fax: "+94 112437953",
  },
  {
    name: "Director General's Office",
    phone: "+94 112426916 / +94 112426907",
    fax: "+94 112437953",
    email: "dg@srilanka.travel",
  },
  {
    name: "Managing Director's Office",
    phone: "+94 112426900",
    email: "md@srilanka.travel",
  },
  {
    name: "Senior Superintendent of Police - Sri Lanka Tourism Police",
    officer: "J.S Weerasekara",
    phone: "+94 112421052 / +94 112421451",
    fax: "+94 112382209",
    email: "dptd@srilanka.travel",
  },
];

 export const ContactDetails = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {contactDetails.map((contact, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 border shadow-sm rounded-md"
          >
            <h3 className="text-lg font-bold border-b pb-2 mb-4">{contact.name}</h3>
            
            {contact.officer && (
              <p className="text-base flex items-center text-gray-600 mb-2">
                <FaUser className="mr-2 text-blue-900" />
                {contact.officer}
              </p>
            )}
            
            <p className="text-base flex items-center text-gray-600 mb-2">
              <FaPhone className="mr-2 text-blue-900" />
              {contact.phone}
            </p>

            {contact.fax && (
              <p className="text-base flex items-center text-gray-600 mb-2">
                <FaFax className="mr-2 text-blue-900" />
                {contact.fax}
              </p>
            )}

            {contact.email && (
              <p className="text-base flex items-center text-gray-600 mb-2">
                <FaEnvelope className="mr-2 text-blue-900" />
                {contact.email}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      {/* Navbar import */}
      <Navbar />

      {/*hero image */}
      <div className="hero-section relative w-full h-[500px]">
        <Image
          src="/assets/hero2.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}  
          className="w-full h-full"  
        />
      </div>

      {/* Map Section */}
      <ContactUs />
       
       <div>
        <ContactDetails/>
       </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
