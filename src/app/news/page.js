import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const TourismNews = () => {
  return (
    <>
    <Navbar/>

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

    <div className="min-h-screen flex bg-gray-100">
      {/*News List */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              Mega Travel Influencer Nas Daily join-hands to promote Tourism in Sri Lanka
            </a>
            <p className="text-sm text-gray-500">November 24, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              Sri Lanka celebrates its milestone surpassing 100,000 Russian arrivals
            </a>
            <p className="text-sm text-gray-500">August 8, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              The 67th Conference of TAAI commenced at the BMICH
            </a>
            <p className="text-sm text-gray-500">August 8, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              Sri Lanka Tourism promotes its Travel and Tourism Potential in three Australian cities
            </a>
            <p className="text-sm text-gray-500">July 17, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              All set for the TAAI Convention hosted by Sri Lanka Tourism
            </a>
            <p className="text-sm text-gray-500">July 6, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              Sri Lanka tourism bounce back with a positive influx of tourist arrivals
            </a>
            <p className="text-sm text-gray-500">July 6, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              NewZealand Women cricket team receives a warm welcome from Sri Lanaka on their 1st Sri Lanka tour Day 1
            </a>
            <p className="text-sm text-gray-500">July 10, 2023</p>
          </li>
          <li className="mb-4">
            <a href="#" className="block text-blue-700 hover:underline">
              Air SeyChelles makes it inagural flight to srilanka, with familiarization tours inline
            </a>
            <p className="text-sm text-gray-500">July 23, 2023</p>
          </li>
          
        </ul>
      </div>

      {/* News Content */}
      <div className="w-3/4 p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">
          Mega Travel Influencer ‘Nas Daily’ join-hands to promote Tourism in Sri Lanka
        </h1>
        <p className="text-sm text-gray-500 mb-4">Posted on November 24, 2023</p>
        <p className="mb-6 text-sm text-gray-700">
        Sri Lanka Tourism Promotion Bureau (SLTPB), under The Ministry of Tourism and Lands welcomed
        World&apos;s Top Travel Influencer Nusier Yassin also known as Nas Daily to promote Sri Lanka
        as One of Best Travel Destinations in The World to Travel. As part of this exclusive
        social media-based campaign with Sri Lanka Tourism Promotion Bureau, Nas Daily social
        platforms where they have over 67 million followers base worldwide, will be posting various
        destination promotional posts, videos and stories to inspire social media savvy global
        travelers visit Sri Lanka within upcoming seasons.
        </p>
        <p className="mb-6 text-sm text-gray-700">
        Making a statement on Sri Lanka Tourism&apos;s collaboration with Nas Daily, Minister for Tourism
        and Lands Mr. Harin Fernado stated, key focus of this campaign is to promote destination
        Sri Lanka via mainstream social media platforms by reaching out to millions of international
        social media users and creating an excitement and influencing to visit the island within
        upcoming seasons. Also, this campaign expects to create multiple unique reasons to visit
        destination Sri Lanka and encourage travelers to come back for more.
        </p>
        <p className="mb-6 text-sm text-gray-700">
        Living in the era of digital media, travel influencers have emerged as powerful storytellers
        by inspiring billions of social media users around the world. Unlike traditional advertising
        campaigns, influencers marketing campaigns have become a game-changing strategy for destination
        promotions. Influencers create greater impact on inspiring modern-day travelers by acting as
        Digital Word of Mouth, while generating long lasting publicity for destinations. Their genuine
        and personal social media channels provide insights that traditional advertisements can&apos;t
        replicate, making them a trusted source for travel recommendations.

        </p>

        <Image
          src="/assets/nasdaily.jpg" 
          alt="Tourism Event"
          width={1200} 
          height={800} 
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TourismNews;
