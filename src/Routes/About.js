import React from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import AboutImg from '../assets/shoes.jpg';
import Slider from './Slider';

const About = () => {
  return (
    <>
        <Navbar />
     <Hero
     cName='hero-mid'
     heroImg={AboutImg}
     url='/'
     btnClass='hide'
      />
      <Slider />
    </>
  )
}

export default About