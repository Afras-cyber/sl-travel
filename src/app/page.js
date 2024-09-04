import React from 'react'
import Navbar from './components/Navbar';
import Cards1 from './components/Cards1';
import Gallery from './components/Gallery';
import Cards2 from './components/Cards2';



const page = () => {
  return (
    <div>
      <Navbar/>
      <Cards1/>
      <Gallery/>
      <Cards2/>
    </div>
  )
}

export default page
