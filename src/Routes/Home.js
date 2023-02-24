import React from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import AboutImg from '../assets/home.jpg';

const Home = () => {
  return (
    <>
    <Navbar />
     <Hero
     cName='hero'
     heroImg={AboutImg}
    
     buttonText="S H O P >>"
     url='/'
     btnClass='show'
      />
    </>
  )
}

export default Home;