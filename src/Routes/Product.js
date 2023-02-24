import React from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import AboutImg from '../assets/product.jpg';
import { Productsss } from './Productsss';
import './product.css';


const Product = () => {
  return (
    <>
        <Navbar />
     <Hero
     cName='hero-mid'
     heroImg={AboutImg}
     url='/'
     btnClass='hide'
      />
      <div className='p__title'>
        <h2>All Products</h2>
        </div>
      <Productsss />
      
    </>
  )
}

export default Product