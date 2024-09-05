import React from 'react'
import Navbar from './components/Navbar';
import Cards1 from './components/Cards1';
import Gallery from './components/Gallery';
import Cards2 from './components/Cards2';
import Cards3 from './components/Cards3';
import Footer from './components/Footer';
import Cards4 from './components/Cards4';



const page = () => {
  return (
    <div>
      <Navbar/>
      <Cards1/>
      <Gallery/>
      <Cards2/>
      <Cards4/>
      <Cards3/>
      <Footer/>
    </div>
  )
}

export default page
