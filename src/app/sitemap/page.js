import React from "react";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Image from 'next/image';

const sitemapData = [
  {
    heading: "Home",
    items: ["Home", "Contact Us", "Investor", "Search"]
  },
  {
    heading: "Users",
    items: ["Account Login", "Forgot Your Password", "Create Account"]
  },
  {
    heading: "Themes",
    items: ["Pristine", "Heritage", "Thrills", "Wild", "Bliss", "Scenic", "Essence", "Festive"]
  },
  {
    heading: "News and Events",
    items: ["Upcoming Events", "Tourism News"]
  },
  {
    heading: "Explore",
    items: [
      "Sri Lanka At A Glance", "International Endorsements", "10 Good Reasons To Visit Sri Lanka", "Marvels of Sri Lanka",
      "World Class Sri Lanka", "Sri Lankan Legends", "12 Things To Do in Colombo", "Suggested Itineraries", 
      "Sri Lankan Heritage", "Provincial Tourism", "Tourist Map of Sri Lanka", "Interactive Map"]
  },
  {
    heading: "Things to See & Do",
    items: [
      "Tourist Attractions", "Beach Holidays", "Wild Safaris", "Adventure Sports", "Discover the Past", 
      "Pilgrimage", "Ayurveda", "Nature Trails", "Adventure Tours", "Scenic Beauty", "Meetings & Conferences", 
      "Colombo City Tour", "Eco Tourism", "Night Life", "Dinning", "Spice Gardens", "Tourist Shops", 
      "Shopping", "Volunteer Tourism", "Research Tourism", "Things to See", "Events"]
  },
  {
    heading: "Travel Essentials",
    items: [
      "Visa Requirements", "Plan Your Trip", "Visa Services", "Online Services", "Sri Lankan Embassies", 
      "Travel Tips", "Travel Habits", "Airports", "Getting Around", "Distance Calculator", "Sri Lanka Weather", 
      "Emergency Services", "Sri Lankan Public Holidays 2024", "Transport", "Tour Guides", "Authorized Tourist Drivers", 
      "Buy E-Tickets for Attractions", "Travel Magazines and Directories", "Currency Converter", 
      "Travel Apps", "Foreign Embassies", "Travel Agents", "Doing Business in Sri Lanka"]
  },
  {
    heading: "Where to Stay",
    items: [
      "Hotels & Other Accommodation", "Newly Registered Hotels & Other Accommodation", "National Holiday Resorts"]
  },
  {
    heading: "Services",
    items: ["Online Services", "Plan Your Trip", "SLTPB Promotional KIT"]
  },
  {
    heading: "About Sri Lanka",
    items: ["History", "Philosophy", "The Board", "Directors", "Careers", "Investor", "Tender Documents"]
  },
  {
    heading: "Travelers Gallery",
    items: ["Traveler Gallery"]
  }
];

const Sitemap = () => {
  return (
    <>
      <Navbar/>

      {/* Hero image */}
      <div className="hero-section relative w-full h-[500px]">
        <Image
          src="/assets/sitemap.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}  
          className="w-full h-full"  
        />
      </div>

      {/* Sitemap content */}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-8">Site Map</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 py-4 px-2 "> 
          
          {/* First Column */}
          <div>
            {sitemapData.slice(0, 5).map((section, index) => (
              <div key={index} className="mb-6">
                <h6 className="text-blue-800 font-semibold text-xl mb-0 pt-2">{section.heading}</h6>
                <ul className="mt-1 text-gray-600 text-sm list-none space-y-0"> {/* Reduced space */}
                  {section.items.map((item, idx) => (
                    <li key={idx} className="m-0 p-0"><span className="mr-2">{`>`}</span>{item}</li> 
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div>
            {sitemapData.slice(5, 6).map((section, index) => (
              <div key={index} className="mb-6">
                <h6 className="text-blue-800 font-semibold text-xl mb-0 pt-2">{section.heading}</h6>
                <ul className="mt-1 text-gray-600 text-sm list-none space-y-0"> {/* Reduced space */}
                  {section.items.map((item, idx) => (
                    <li key={idx} className="m-0 p-0"><span className="mr-2">{`>`}</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Third Column */}
          <div>
            {sitemapData.slice(6, 7).map((section, index) => (
              <div key={index} className="mb-6">
                <h6 className="text-blue-800 font-semibold text-xl mb-0 pt-2">{section.heading}</h6>
                <ul className="mt-1 text-gray-600 text-sm list-none space-y-0"> {/* Reduced space */}
                  {section.items.map((item, idx) => (
                    <li key={idx} className="m-0 p-0"><span className="mr-2">{`>`}</span>{item}</li> 
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fourth Column */}
          <div>
            {sitemapData.slice(7).map((section, index) => (
              <div key={index} className="mb-6">
                <h6 className="text-blue-800 font-semibold text-xl mb-0 pt-2">{section.heading}</h6>
                <ul className="mt-1 text-gray-600 text-sm list-none space-y-0"> {/* Reduced space */}
                  {section.items.map((item, idx) => (
                    <li key={idx} className="m-0 p-0"><span className="mr-2">{`>`}</span>{item}</li> 
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Sitemap;
