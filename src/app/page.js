import React from 'react';
import Navbar from './components/Navbar'; 
import Herosection from './components/Herosection'; 
import Cards1 from './components/Cards1';  
import Gallery from './components/Gallery';  
import Cards2 from './components/Cards2';  
import Cards3 from './components/Cards3';  
import Footer from './components/Footer';  
import Cards4 from './components/Cards4';  

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Cards1 />
      <Gallery />
      <Cards2 />
      <Cards4 />
      <Cards3 />
      <Footer />
    </div>
  );
};

export default HomePage;
