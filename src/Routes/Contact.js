import React from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import AboutImg from '../assets/nikejordan.jpg';
import Login from './Login';

const Contact = () => {
  return (
    <>
    <Navbar />
 <Hero
 cName='hero-mid'
 heroImg={AboutImg}
 url='/'
 btnClass='hide'
  />
  
  <h1>Contact Us</h1>

  <Login />
</>
  )
}

export default Contact