import React from 'react'

import './Login.css'
import Container from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import banner from '../assets/piche.png'
import Button  from 'react-bootstrap/Button'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Login  = () => {
  return (
    <>
    
     
      
      <Container id='main-container' className='d-grid h-100'>
      
      <Form id='sign-in-form' className='text-center'>
      <img 
      className='banner'
      src={banner} 
      alt="" />
     
      <Form.Group>
      <Form.Control className='xyz mb-3' type='name' size='lg' placeholder='Enter Name'>
        </Form.Control>
        <Form.Control className='xyz mb-3' type='email' size='lg' placeholder='Enter Email'>
        </Form.Control>
        <Form.Control type='number' size='lg' placeholder='Enter Contact Number'>
        </Form.Control>
        <Form.Control type='text' size='lg' placeholder='Enter Message'>
        </Form.Control>
      </Form.Group>
      <div className='d-grid mt-4'>
      <Button variant='success' size='lg'>Log In</Button>
      </div>
      </Form>
      <br />
      <p> <InstagramIcon /> <FacebookIcon /> <PinterestIcon/>  </p>
      

      
      </Container>
      
    </>
  )
}

export default Login;